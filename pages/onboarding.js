import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient'
import ProgressBar from '@/components/Progressbar'
import UserOnboardingCard from '@/components/UserOnboardingCard'

const STEPS = [
    { title: 'Step 1', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Step 2', description: 'Consectetur adipiscing elit.' },
    { title: 'Step 3', description: 'Sed do eiusmod tempor incididunt.' },
    { title: 'Step 4', description: 'Ut labore et dolore magna aliqua.' },
]

const INITIAL_STATE = {
    step: 0,
    classroomCode: '',
}

function Onboarding() {
    const router = useRouter()
    const [state, setState] = useState(INITIAL_STATE)

    useEffect(() => {
        const { user } = supabase.auth.getSession()
        if (!user) {
            router.push('/')
        } else {
            const { onboarding } = user.user_metadata || {}
            if (onboarding) {
                setState(JSON.parse(onboarding))
            }
        }
    }, [])

    const handleNextStep = () => {
        setState((prevState) => ({
            ...prevState,
            step: prevState.step + 1,
        }))
    }

    const handlePreviousStep = () => {
        setState((prevState) => ({
            ...prevState,
            step: prevState.step - 1,
        }))
    }

    const handleClassroomCodeChange = (event) => {
        const { value } = event.target
        setState((prevState) => ({
            ...prevState,
            classroomCode: value,
        }))
    }

    const handleFinish = async () => {
        const { user } = supabase.auth.session()
        const { error } = await supabase.auth.update({
            user_metadata: { onboarding: null },
        })
        if (error) {
            console.error(error)
        } else {
            router.push('/dashboard')
        }
    }

    const { step, classroomCode } = state

    return (
        <div className="min-h-screen bg-gray-100">
            <ProgressBar steps={STEPS} currentStep={step} />
            <div className="max-w-7xl mx-auto py-6 h-64 sm:px-6 lg:px-8">
                <div className="px-4 py-4 sm:px-0">
                    <UserOnboardingCard
                        title={STEPS[step].title}
                        description={STEPS[step].description}
                        onNext={handleNextStep}
                        onPrevious={handlePreviousStep}
                        onFinish={handleFinish}
                        isLastStep={step === STEPS.length - 1}
                        classroomCode={classroomCode}
                        onClassroomCodeChange={handleClassroomCodeChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Onboarding
