import React from 'react'
import { WelcomeStep } from '../components/steps/WelcomeStep'
import { EnterNameStep } from '../components/steps/EnterNameStep'
import { GithubStep } from '../components/steps/GithubStep'
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep'
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep'
import { EnterCodeStep } from '../components/steps/EnterCodeStep'
import { Header } from '../components/Header'

const stepsComponents = {
    0: WelcomeStep,
    1: GithubStep,
    2: EnterNameStep,
    3: ChooseAvatarStep,
    4: EnterPhoneStep,
    5: EnterCodeStep,
}

export const MainContext = React.createContext()

export default function Home() {
    const [step, setStep] = React.useState(0)
    const [userData, setUserData] = React.useState('')
    const Step = stepsComponents[step]
    const onNextStep = () => {
        setStep((prev) => prev + 1)
    }

    const setFieldValues = (field, value) => {
        setUserData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    return (
        <MainContext.Provider value={{ step, onNextStep, userData, setUserData, setFieldValues }}>
            <Step />
        </MainContext.Provider>
    )
}
