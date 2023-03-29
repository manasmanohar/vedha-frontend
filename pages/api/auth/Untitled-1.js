export default function LandingPage() {
    return (
        <SessionProvider>
            <LandingPageContent />
        </SessionProvider>
    )
}

function LandingPageContent() {
    const { data: session } = useSession()
    console.log(session)

    return <Layout excludeLayout={true}>{/* Rest of the code */}</Layout>
}
