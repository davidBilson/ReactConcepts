import React from 'react'
import useStore from '../../store/useStore';

const Friends = () => {
    const friends = useStore((state) => state.friends)
  return (
    <section>
        <h5>Friends {friends.length}</h5>
        <div>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>{friend.name}</li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Friends