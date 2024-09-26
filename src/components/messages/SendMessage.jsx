import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../../slices/Message.slice';
import axiosInstance from '../../config/axiosConfig';

function SendMessage() {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages } = useSelector((state) => state.MessageSlice)

    const dispatch = useDispatch()

    const newMessage = async (message) => {

        setLoading(true)
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedConversation?._id}`, { message })
            const data = await res.json()

            if (data.error) {
                throw new Error(res.error)
            }
            dispatch(setMessages([...messages, data]))
        } catch (error) {
            console.log('error at sendMessage', error);

        } finally {
            setLoading(false)
        }
    }

    return {
        newMessage,
        loading
    }
}

export default SendMessage