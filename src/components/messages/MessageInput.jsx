import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import SendMessage from './SendMessage';

export default function MessageInput() {
    const [message, setMessage] = useState('')
    const { loading, newMessage } = SendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await newMessage(message)
        setMessage('')
    }

    const handleChange = (e) => {
        const { value } = e.target
        setMessage(value)
    }

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-500' placeholder='Send a message'
                    value={message}
                    name='message'
                    onChange={handleChange}

                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button>
            </div>
        </form>
    )
}

// import React from 'react'
// import { BsSend } from 'react-icons/bs'

// export default function MessageInput() {
//     return (
//         <form className='px-4 my-3'>
//             <div className='w-full'>
//                 <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-500 text-white' placeholder='Send a message' />
//                 <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                     <BsSend />
//                 </button>
//             </div>
//         </form>
//     )
// }
