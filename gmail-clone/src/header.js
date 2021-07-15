import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'

function header() {
  return (
    <div className='header'>
      <div className='headerLeft'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='http://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
          alt='logo'
        />
      </div>
      <div className='headerMiddle'>
        <SearchIcon style={{ fill: 'grey' }} />
        <input type='text' placeholder='Search' />
        <ArrowDropDownIcon className='headerInputCaret' />
      </div>
      <div className='headerRight'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default header
