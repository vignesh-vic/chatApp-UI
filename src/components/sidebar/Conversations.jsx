import React from 'react'
import Conversation from './Conversation'
import GetConversation from '../GetConversation'
import { getRandomEmoji } from '../../utils/emojis';

function Conversations() {
    const { loading, conversations } = GetConversation()

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations?.map((conversation, index) => (
                <Conversation
                    key={index}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={index === conversations?.length - 1}
                />
            ))
            }
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    )
}

export default Conversations



//started code
// import React from 'react'
// import Conversation from './Conversation'

// function Conversations() {
//     return (
//         <div className='py-2 flex flex-col overflow-auto'>
//             <Conversation />
//         </div>
//     )
// }

// export default Conversations