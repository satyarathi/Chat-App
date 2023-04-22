import React from 'react'
import Mychat from '../../components/mychat/mychat'
import Chatbox from '../../components/chatbox/chatbox'
import SideDrawer from '../../components/drawer/drawer'

function Chatpage() {
  return (
    <div style={{width: "100%"}}>
        <SideDrawer />
        <Mychat />
        <Chatbox />

    </div>
  )
}

export default Chatpage