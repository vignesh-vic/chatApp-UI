import React from 'react'
import profile from '../../images/profile.png'
import moment from 'moment/moment';

function Message({ message }) {

    const formatDate = (createdAt) => {
        return moment(createdAt).format('DD/MM/YY');

    }
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profile} alt='user' />

                </div>
            </div>
            <div className={'chat-bubble text-white bg-blue-500'}>
                {message?.message}
            </div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                {formatDate(message?.createdAt)}
            </div>
        </div>
    )
}

export default Message