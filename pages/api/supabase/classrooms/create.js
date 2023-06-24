import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8)

    return code
}

const handler = async (req, res) => {
    const body = req.body
    const supabase = createPagesServerClient({ req, res })
    const auth = await supabase.auth.getSession()

    if (!auth.data.session) {
        return res.status(401).json({
            error: 'not_authenticated',
            description: 'The user does not have an active session or is not authenticated',
        })
    }

    const code = generateCode()

    try {
        await supabase.from('classrooms').insert([
            {
                name: body.name,
                code,
                teacher_id: auth.data.session.user.id,
            },
        ])    
    } catch (err) {
        console.error(err)
    }

    return res.json({ code })
}

export default handler
