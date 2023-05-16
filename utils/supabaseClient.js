import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey, {
    autoRefreshToken: true,
    persistSession: true,
})

export const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    console.log(user, 'user')
    console.log(session, 'session')

    if (error) {
        console.error(error, 'error')
    }
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error(error)
    }
}
