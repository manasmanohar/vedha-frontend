import '@/styles/globals.css'
import Layout from '@/components/Layout'
import React, { useState, useEffect } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

export default function App({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createPagesBrowserClient())

    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionContextProvider>
    )
}
