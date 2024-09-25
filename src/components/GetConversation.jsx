import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../config/axiosConfig'

function GetConversation() {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])


    useEffect(() => {
        const getConversation = async () => {
            setLoading(true)
            try {
                const res = await axiosInstance.get('/users')
                if (res.error) {
                    throw new Error(res.error)
                }
                // console.log(res.data, "ghf");

                setConversations(res.data)
            } catch (error) {
                console.log('error at getConversation', error);

            } finally {
                setLoading(false)

            }
        }
        getConversation()
    }, [])

    return (
        { loading, conversations }
    )
}

export default GetConversation