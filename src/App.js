import React from 'react';
import SidebarNavigation from './components/sidebar-navigation/SidebarNavigation'
import ContentPhoto from './components/content-photo/ContentPhoto';
import './App.sass';
import ContentPage from './components/content-page/ContentPage';
// import CounterComponent from './components/counter/CounterComponent';

function App() {
  return (
    <main className="main" >
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
