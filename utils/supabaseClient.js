export const signInWithGoogle = async (supabase) => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/api/auth/callback',
        },
    })

    if (error) {
        console.error(error)
    }
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error(error)
    }
}
//NEXT_PUBLIC_SUPABASE_ANON_KEY
//NEXT_PUBLIC_SUPABASE_URL
