import React, { useEffect } from 'react'
import Mychat from '../../components/mychat/mychat'
import Chatbox from '../../components/chatbox/chatbox'
import SideDrawer from '../../components/drawer/drawer'
import { Box } from '@mui/material'
import { fetchChats } from '../../service/chatService'

function Chatpage() {

    useEffect(() =>{
        fetchChats();
    }, [])

  return (
    <div style={{width: "100%"}}>
        <SideDrawer />
        <Box display={'flex'} justifyContent={'space-between'}>
        <Mychat />
        <Chatbox />
        </Box>
    </div>
  )
}

export default Chatpage