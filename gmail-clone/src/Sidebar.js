import './sidebar.css'
import { Button } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import SidebarOptions from './SidebarOptions'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar_compose'
      >
        Compose
      </Button>
      <SidebarOptions />
    </div>
  )
}

export default Sidebar
