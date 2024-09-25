import React from 'react'
import profile from '../../images/profile.png'
function Message() {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profile} alt='user' />

                </div>
            </div>
            <div className={'chat-bubble text-white bg-blue-500'}>
                Hi! what is up?
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                12:42
            </div>
        </div>
    )
}

export default Message