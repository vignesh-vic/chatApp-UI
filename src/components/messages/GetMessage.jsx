import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../../slices/Message.slice'
import axiosInstance from '../../config/axiosConfig'

function GetMessage() {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages } = useSelector((state) => state.MessageSlice)

    const dispatch = useDispatch()


    useEffect(() => {
        const getMessage = async () => {
            setLoading(true)
            try {
                const res = await axiosInstance.get(`/messages/${selectedConversation?._id}`)
                if (res.data.error) {
                    setLoading(false)
                    throw new Error(res.error)
                }
                dispatch(setMessages(res.data))
            } catch (error) {
                setLoading(false)
                console.log('error at getMessage', error);
            } finally {
                setLoading(false)
            }
        }
        getMessage()
    }, [selectedConversation?._id, dispatch])
    return { messages, loading }
}

export default GetMessage