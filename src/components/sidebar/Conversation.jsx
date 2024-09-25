import React from 'react'
import profile from '../../images/profile.png'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectConversation } from '../../slices/Message.slice'
function Conversation({ conversation, emoji, lastIdx }) {
    const selecedConnversation = useSelector((state) => state.MessageSlice.selectedConversation)
    const dispatch = useDispatch()
    const isSelected = selecedConnversation?._id === conversation?._id

    return (
        <>
            <div className={`flex gap-2 items-center  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-blue-500" : 'bg-slate-300'} `}
                onClick={() => {
                    dispatch(setSelectConversation(conversation))
                }}
            >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={profile} alt='user' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-white'>{conversation?.fullName}</p>
                        <span>{emoji}</span>
                    </div>
                </div>
            </div >
            <div>

            </div>

            {!lastIdx && <div className='divider my-0 py-2 h-1' />}
        </>
    )
}

export default Conversation


//started code
// import React from 'react'
// import profile from '../../images/profile.png'
// function Conversation() {
//     return (
// <>
//     <div className='flex gap-2 items-center bg-slate-300 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//                 <img src={profile} alt='user' />
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-white'>John Doe</p>
//                 <span></span>
//             </div>
//         </div>
//     </div>
//     <div>

//     </div>
//     <div className='divider my-0 py-2 h-1' />
// </>
//     )
// }

// export default Conversation