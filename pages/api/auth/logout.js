import { NextApiHandler } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const handler = async (req, res) => {
    const supabase = createPagesServerClient({ req, res })
    await supabase.auth.signOut({})

    res.redirect('/landingpage')
}

export default handler
