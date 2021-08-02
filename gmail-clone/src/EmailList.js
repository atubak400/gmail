import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import React from 'react'
import './emailList.css'

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList__setting'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default EmailList
