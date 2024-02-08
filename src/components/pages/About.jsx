import React from 'react'
import './aboutPage.scss'

const About = () => {
  function getAge (birthDate) {
    const today = new Date();
    const born = new Date(birthDate)
    return (
      today.getFullYear() - born.getFullYear() - (today.getMonth() < born.getMonth() ||
   (born.getMonth() === today.getMonth() && (today.getDate() < born.getDate() )))
    )
  }
  return (
    <section className='page__container'>
      <h1 className='title'>about me</h1>
      <div className='basic-info__container'>
        <ul>
          <li>{getAge('1999-08-10')} years /</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default About
