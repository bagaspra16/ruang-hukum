'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'

// ─── LOGIN ─────────────────────────────────────────────────────────────────

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// ─── REGISTER ──────────────────────────────────────────────────────────────

export async function register(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('full_name') as string

  // Determine site base URL for email redirect
  const headerList = await headers()
  const host = headerList.get('x-forwarded-host') || headerList.get('host')
  const proto = headerList.get('x-forwarded-proto') || (process.env.NODE_ENV === 'production' ? 'https' : 'http')

  let siteUrl = 'https://ruang-hukum.vercel.app'
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    siteUrl = process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  } else if (host && !host.includes('localhost')) {
    siteUrl = `${proto}://${host}`
  }

  const emailRedirectTo = `${siteUrl}/auth/callback?next=/dashboard`

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo,
    },
  })

  if (error) {
    return { error: error.message }
  }

  // Attempt to sign in immediately after register (skip email confirmation for simple setup)
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (signInError) {
    // If email confirmation is enabled, just redirect to login with a message
    return { success: 'Account created! Please check your email to confirm your account, then log in.' }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

// ─── LOGOUT ────────────────────────────────────────────────────────────────

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}

// ─── GET CURRENT USER ──────────────────────────────────────────────────────

export async function getCurrentUser() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
