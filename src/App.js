import React, {useState} from 'react';
import SidebarNavigation from './components/sidebar-navigation/SidebarNavigation'
import ContentPhoto from './components/content-photo/ContentPhoto';
import './App.scss';
import ContentPage from './components/content-page/ContentPage';
// import CounterComponent from './components/counter/CounterComponent';

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <main className="main" data-theme={isDark ? 'dark' : 'light'}>
      <section className='page-content'>
        <SidebarNavigation/>
        <ContentPhoto/>
        <ContentPage/>
        </section>
      {/* <CounterComponent/> */}
    </main>
  );
}

export default App;
