import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard({ name, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textBtn = isFollowing ? 'Siguiendo' : 'Seguir'
    const btnClassName = isFollowing ? 'tw-following-btn' : 'tw-follow-btn'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-header'>
                <img src={`https://unavatar.io/${userName}`} alt={`Avatar de ${userName}`} />
                <div className="tw-follow-card-info">
                    <strong>{name}</strong>
                    <span>@{userName} </span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    <span className='btn-text'>{textBtn}</span>
                    <span className='stop-following'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}