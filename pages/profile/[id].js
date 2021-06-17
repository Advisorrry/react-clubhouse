import { useRouter } from 'next/router'
import React from 'react'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

export default function ProfilePage() {
    const router = useRouter()
    const { id } = router.query
    const ava =
        'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1'

    console.log(id)
    return (
        <>
            <Header />

            <div className="container mt-40">
                <Profile
                    fullname="Alexander Bell"
                    username="advisorrry"
                    avatarUrl={ava}
                    about="We don't know much about them, but we're sure markeloff0122 is great."
                />
            </div>
        </>
    )
}
