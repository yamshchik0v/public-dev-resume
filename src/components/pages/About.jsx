import React from 'react'
import './aboutPage.scss'
import { stackIcons } from '../../assets/icons/techStack'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined'
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined'
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'

const About = () => {
  function getAge(birthDate) {
    const today = new Date()
    const born = new Date(birthDate)
    return (
      today.getFullYear() -
      born.getFullYear() -
      (today.getMonth() < born.getMonth() ||
        (born.getMonth() === today.getMonth() &&
          today.getDate() < born.getDate()))
    )
  }
  function renderIcons() {
    return stackIcons.map((icon, index) => (
      <li key={index} className='stack__list-item' title={icon.name}>
        <img src={icon.logo} alt={icon.name} />
      </li>
    ))
  }
  return (
    <section className='page__container'>
      <h1 className='page__title'>about me</h1>
      <div className='basic-info__container'>
        <ul className='basic-info__list'>
          <li className='basic-info__list-item'>
            {getAge('1999-08-10')} years
          </li>
          <li className='basic-info__list-item'>Saint-Petersburg</li>
          <li className='basic-info__list-item'>Development</li>
        </ul>
      </div>
      <div className='about-me__container'>
        <p className='paragraph'>
          Hi! I'm Aleksandr Yamshchikov. A passionate self-taught frontend
          developer born in Russia. I studied a lot of information from the
          internet on my own to understand how the web works and to create my
          own applications and websites. Currently looking for my first job and
          am applying for a junior developer position.
        </p>
        <p className='paragraph'>
          Released a JS music player, an Express.js server for sending emails, a
          password generator, blog on React.
        </p>
      </div>
      <div className='line'></div>
      <div className='stack__container'>
        <h3 className='subtitle'>technologies stack</h3>
        <ul className='stack__list'>{renderIcons()}</ul>
      </div>
      <div className='line'></div>
      <div className='principles__container'>
        <h3 className='subtitle'>my principles</h3>
        <ul className='principles__list'>
          <li className='principles__list-item'>
            <HandshakeOutlinedIcon />
            <p>Responsibility</p>
          </li>
          <li className='principles__list-item'>
            <AlarmOnOutlinedIcon />
            <p>Punctuality</p>
          </li>
          <li className='principles__list-item'>
            <ConnectWithoutContactOutlinedIcon />
            <p>Communication</p>
          </li>
          <li className='principles__list-item'>
            <SelfImprovementOutlinedIcon />
            <p>Discipline</p>
          </li>
          <li className='principles__list-item'>
            <SchoolOutlinedIcon />
            <p>Continuous self-education</p>
          </li>
        </ul>
      </div>
      <div className='line'></div>
      <div className='goal__container'>
        <h3 className='subtitle'>my goal</h3>
        <div className='goal__info'>
          <RocketLaunchOutlinedIcon />
          <p className='paragraph'>
            My goal is to become a sought-after developer in the market. Improve
            my qualifications to a senior full-stack developer and teach people
            how to create demanded and high-quality products.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
