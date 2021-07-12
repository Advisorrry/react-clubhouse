import React from 'react'
import clsx from 'clsx'
import { WhiteBlock } from '../../WhiteBlock'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'
import { Avatar } from '../../Avatar'

import styles from './ChooseAvatarStep.module.scss'
import { MainContext } from '../../../pages'

export const ChooseAvatarStep = () => {
    const { onNextStep, userData } = React.useContext(MainContext)
    const [avatarUrl, setAvatarUrl] = React.useState(
        'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1',
    )
    const inputFileRef = React.useRef(null)

    const handleChangeImage = (event) => {
        const file = event.target.file[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setAvatarUrl(imageUrl)
        }
    }

    React.useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener('change', handleChangeImage)
        }
    }, [])

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/celebration.png"
                title={'Okay, ' + userData.fullname}
                description="How’s this photo?"
            />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <div className={styles.avatar}>
                    <Avatar width="120px" height="120px" src={userData.avatarUrl} />
                </div>
                <div className="mb-30">
                    <label htmlFor="image" className="link cup">
                        Choose a different photo
                    </label>
                </div>

                <Button onClick={onNextStep}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.svg" />
                </Button>
            </WhiteBlock>
        </div>
    )
}
