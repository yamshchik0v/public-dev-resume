import React, { useState, useEffect } from 'react'
import Person4Icon from '@mui/icons-material/Person4'
import MailIcon from '@mui/icons-material/Mail'
import WorkIcon from '@mui/icons-material/Work'
import AssignmentIcon from '@mui/icons-material/Assignment'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import Link from '@mui/material/Link'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../features/langSlice'
import './sidebarNav.scss'
import { CheckBox } from '@mui/icons-material'

const SidebarNavigation = () => {
  const language = useSelector((state) => state.language.value)
  const dispatch = useDispatch()
  const [lang, setLang] = useState(language)

  useEffect(() => {
    setLang(language)
  }, [language])

  return (
    <nav className='navigation__container'>
      <div className='toggle-list'>
        <Button variant='contained' onClick={() => dispatch(changeLanguage())}>
          {lang}
          <CheckBox />
        </Button>
      </div>
      <ul className='navigation__list'>
        <li>
          <Link href='#'>
            <Person4Icon />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <MailIcon />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <WorkIcon />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <AssignmentIcon />
          </Link>
        </li>
      </ul>
      <Button>
        <UploadFileIcon />
      </Button>
    </nav>
  )
}

export default SidebarNavigation
