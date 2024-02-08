import React, { useState } from 'react'
import './App.scss'
import SidebarNavigation from './components/sidebar-navigation/SidebarNavigation'
import ContentPhoto from './components/content-photo/ContentPhoto'
import About from './components/pages/About'

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <main className='main' data-theme={isDark ? 'dark' : 'light'}>
      <section className='page-content'>
        <SidebarNavigation />
        <ContentPhoto />
        <About />
      </section>
    </main>
  )
}

export default App
