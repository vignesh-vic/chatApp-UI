import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectConversation } from '../../slices/Message.slice'

const NoChatSelected = () => {
    // const isSelected = selecedConnversation?._id === conversation?._id
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg text-gray-800 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome John Dae</p>
                <p>select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'></TiMessages>
            </div>
        </div>
    )
}

const MessgeContainer = () => {
    const selecedConnversation = useSelector((state) => state.MessageSlice.selectedConversation)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setSelectConversation(null))
        }
    }, [dispatch])

    return (
        <div className='md:min-w-[78.5%] bg-slate-300 border-r-2 flex flex-col'>
            {

                selecedConnversation ?
                    (
                        <>
                            <div className='bg-slate-500 px-4 py-2 mb-2'>
                                <span className="px-2 ">{selecedConnversation.fullName}</span>
                            </div >
                            <Messages />
                            <MessageInput />
                        </>
                    ) :
                    (
                        <NoChatSelected />
                    )
            }
        </div >
    )
}

export default MessgeContainer

