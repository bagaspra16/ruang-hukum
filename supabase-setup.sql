-- ============================================================
-- Ruang Hukum — Supabase Auth Setup
-- Run this SQL in: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Profiles table (auto-created on user signup)
create table if not exists public.profiles (
  id          uuid references auth.users(id) on delete cascade primary key,
  full_name   text,
  email       text,
  avatar_url  text,
  role        text default 'student',
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- 2. Enable Row Level Security
alter table public.profiles enable row level security;

-- 3. RLS Policies
-- Users can view their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- 4. Trigger: auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

-- Drop and recreate trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- OPTIONAL: Disable email confirmation (for simpler dev setup)
-- Go to: Authentication → Providers → Email
-- Toggle OFF "Confirm email" to allow instant login after register
-- ============================================================
