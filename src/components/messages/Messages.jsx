import React from 'react'
import Message from './Message'
import GetMessage from './GetMessage'
import MessageSkeleton from './MessageSkeleton'

function Messages() {
    const { messages, loading } = GetMessage()

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            <div className='absolute bottom-16 text-center flex-wrap'>
                {
                    !loading && messages.length === 0 && (
                        <p>Send a message to start conversation</p>
                    )
                }
            </div>
            {
                !loading && messages.length > 0 && messages?.map((message, idx) => (
                    <Message key={idx} message={message} />
                ))
            }
        </div>
    )
}

export default Messages
// import React from 'react'
// import Message from './Message'

// function Messages() {
//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     )
// }

// export default Messages