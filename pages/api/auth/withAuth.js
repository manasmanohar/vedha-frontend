import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function withAuth(Component) {
    function WithAuth(props) {
        const { data: session } = useSession()
        const router = useRouter()

        if (!session) {
            router.replace('/landingpage')
            return null
        }

        return <Component {...props} />
    }

    return dynamic(() => Promise.resolve(WithAuth), { ssr: false })
}
