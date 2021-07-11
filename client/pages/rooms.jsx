import Link from 'next/link'
import { Button } from '../components/Button'
import { ConversationCard } from '../components/ConversationCard'
import { Header } from '../components/Header'
import Axios from '../core/axios'

export default function RoomPage({ rooms = [] }) {
    return (
        <>
            <Header />
            <div className="container mt-40">
                <div className="d-flex align-items-center justify-content-between">
                    <h1>All conversions</h1>
                    <Button>+ Start a room</Button>
                </div>
                <div className="grid">
                    {rooms.map((obj) => (
                        <Link key={obj.id} href={`/rooms/${obj.id}`}>
                            <a className="d-flex">
                                <ConversationCard
                                    title={obj.title}
                                    guests={obj.guests}
                                    guestsCount={obj.guestsCount}
                                    speakersCount={obj.speakersCount}
                                    avatars={obj.avatars}
                                />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    try {
        const { data } = await Axios.get('/rooms.json')
        console.log(data)
        return {
            props: {
                rooms: data,
            },
        }
    } catch (error) {
        console.log(error, 'ошибка')
    }
}
