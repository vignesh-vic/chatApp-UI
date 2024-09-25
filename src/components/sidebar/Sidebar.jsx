import React from 'react'
import SearchInput from './SearchInput'
import Logout from './Logout'
import Conversations from './Conversations'

export default function Sidebar() {
    return (
        <div className='border-r border-slate-100 flex flex-col bg-gray-400 p-3 rounded-sm '>
            <SearchInput />
            <div className='divider my-0 py-3 h-1' />
            <Conversations />
            <Logout />
        </div>
    )
}



// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversation from './Conversation'
// import Logout from './Logout'

// export default function Sidebar() {
//     return (
//         <div className='border-r border-slate-100 flex flex-col bg-gray-300 p-3 rounded-sm '>
//             <SearchInput />
//             <div className='divider my-0 py-3 h-1' />
//             <Conversation />
//             <Logout />
//         </div>
//     )
// }
