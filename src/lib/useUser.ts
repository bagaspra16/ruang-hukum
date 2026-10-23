'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  avatar_url: string | null;
  role: string | null;
  university: string | null;
  major: string | null;
  learning_goal: string | null;
}

export interface UseUserReturn {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  // Derived helpers
  displayName: string;
  firstName: string;
  initials: string;
  email: string;
  university: string;
  major: string;
  learningGoal: string;
  updateProfile: (updates: {
    full_name?: string;
    university?: string;
    major?: string;
    learning_goal?: string;
  }) => Promise<{ error: Error | null }>;
}

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function loadUser(authUser: User | null) {
      if (!authUser) {
        setUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }

      setUser(authUser);

      // Try to fetch extended profile from public.profiles table
      const { data } = await supabase
        .from('profiles')
        .select('id, full_name, email, avatar_url, role, university, major, learning_goal')
        .eq('id', authUser.id)
        .single();

      if (data) {
        setProfile(data as UserProfile);
      } else {
        // Fallback: construct profile from auth user metadata
        setProfile({
          id: authUser.id,
          full_name: authUser.user_metadata?.full_name ?? null,
          email: authUser.email ?? null,
          avatar_url: authUser.user_metadata?.avatar_url ?? null,
          role: 'student',
          university: authUser.user_metadata?.university ?? null,
          major: authUser.user_metadata?.major ?? null,
          learning_goal: authUser.user_metadata?.learning_goal ?? null,
        });
      }

      setLoading(false);
    }

    // Initial load
    supabase.auth.getUser().then(({ data: { user: authUser } }) => {
      loadUser(authUser);
    });

    // Listen for auth changes (login / logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      loadUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const updateProfile = async (updates: {
    full_name?: string;
    university?: string;
    major?: string;
    learning_goal?: string;
  }) => {
    if (!user) return { error: new Error('User not logged in') };
    const supabase = createClient();

    const profilePayload: UserProfile = {
      id: user.id,
      email: user.email ?? null,
      full_name: updates.full_name !== undefined ? updates.full_name : (profile?.full_name ?? null),
      avatar_url: profile?.avatar_url ?? null,
      role: profile?.role ?? 'student',
      university: updates.university !== undefined ? updates.university : (profile?.university ?? null),
      major: updates.major !== undefined ? updates.major : (profile?.major ?? null),
      learning_goal: updates.learning_goal !== undefined ? updates.learning_goal : (profile?.learning_goal ?? null),
    };

    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        ...profilePayload,
        updated_at: new Date().toISOString(),
      });

    if (profileError) {
      console.error('Error updating profile in Supabase:', profileError);
      return { error: profileError };
    }

    // Also update auth user metadata
    await supabase.auth.updateUser({
      data: {
        full_name: profilePayload.full_name,
        university: profilePayload.university,
        major: profilePayload.major,
        learning_goal: profilePayload.learning_goal,
      },
    });

    // Update local state immediately
    setProfile((prev) =>
      prev
        ? {
            ...prev,
            ...updates,
          }
        : profilePayload
    );

    return { error: null };
  };

  // Derive display helpers — prefer profile data, then auth metadata, then email
  const rawName =
    profile?.full_name ||
    user?.user_metadata?.full_name ||
    null;

  const rawEmail = profile?.email || user?.email || '';

  const displayName = rawName
    ? rawName.split(' ').slice(0, 2).join(' ')
    : rawEmail.split('@')[0];

  const firstName = rawName
    ? rawName.split(' ')[0]
    : rawEmail.split('@')[0];

  const initials = rawName
    ? rawName.split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase()
    : rawEmail.slice(0, 2).toUpperCase();

  return {
    user,
    profile,
    loading,
    displayName,
    firstName,
    initials,
    email: rawEmail,
    university: profile?.university ?? '',
    major: profile?.major ?? '',
    learningGoal: profile?.learning_goal ?? '',
    updateProfile,
  };
}
