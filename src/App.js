import React from 'react'
import './App.scss'
import SidebarNavigation from './components/sidebar-navigation/SidebarNavigation'
import ContentPhoto from './components/content-photo/ContentPhoto'
import About from './components/pages/About'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme)
  return (
    <main className='main'>
      <section className='page-content'>
        <SidebarNavigation theme={theme}/>
        <ContentPhoto />
        <About />
      </section>
    </main>
  )
}

export default App
