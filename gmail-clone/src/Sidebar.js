import './sidebar.css'
import { Button } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import SidebarOptions from './SidebarOptions'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar_compose'
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title='Starred' number={54} />
      <SidebarOptions Icon={AccessTimeIcon} title='Snoozed' number={54} />
      <SidebarOptions Icon={LabelImportantIcon} title='Important' number={54} />
      <SidebarOptions Icon={NearMeIcon} title='Sent' number={54} />
      <SidebarOptions Icon={NoteIcon} title='Drafts' number={54} />
      <SidebarOptions Icon={ExpandMoreIcon} title='More' number={54} />
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'></div>
      </div>
    </div>
  )
}

export default Sidebar
