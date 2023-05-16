import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

export function WithAuth({ children }) {
    const user = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.replace('/landingpage')
        }
    }, [user, router])

    if (!user) return null

    return <>{children}</>
}
