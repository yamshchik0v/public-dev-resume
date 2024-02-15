import React, { useState, useEffect } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import Link from '@mui/material/Link'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../features/langSlice'
import './sidebarNav.scss'
import Tooltip from '@mui/material/Tooltip'

const SidebarNavigation = () => {
  const language = useSelector((state) => state.language.value)
  const dispatch = useDispatch()
  const [lang, setLang] = useState(language)

  useEffect(() => {
    setLang(language)
  }, [language])

  return (
    <aside className='navigation__container'>
      <div className='toggle__list'>
        <Tooltip placement=''>
          <button
            className='toggle-lang'
            onClick={() => dispatch(changeLanguage())}
          >
            {lang}
          </button>
        </Tooltip>
        <div className='toggle-theme'>
          <input type='checkbox' id='toggleTheme' />
          <label htmlFor='toggleTheme'></label>
        </div>
      </div>
      <nav>
        <ul className='navigation__list'>
          <Tooltip title='About' placement='left' disableInteractive>
            <li>
              <Link href='#'>
                <PersonOutlineOutlinedIcon />
              </Link>
            </li>
          </Tooltip>
          <Tooltip title='Contact' placement='left' disableInteractive>
            <li>
              <Link href='#'>
                <ModeCommentOutlinedIcon />
              </Link>
            </li>
          </Tooltip>
          <Tooltip title='Projects' placement='left' disableInteractive>
            <li>
              <Link href='#'>
                <WorkOutlineOutlinedIcon />
              </Link>
            </li>
          </Tooltip>
          <Tooltip title='Resume' placement='left' disableInteractive>
            <li>
              <Link href='#'>
                <AssignmentIndOutlinedIcon />
              </Link>
            </li>
          </Tooltip>
        </ul>
      </nav>
      <Tooltip title='Download Resume' placement='bottom' disableInteractive>
        <button className='download-resume'>
          <FileDownloadOutlinedIcon />
        </button>
      </Tooltip>
    </aside>
  )
}

export default SidebarNavigation
