import React, { useState } from 'react'
import Forms from '../components/Forms';
import Header from '../components/Header';
import RenderUser from '../components/RenderUser';
import './style.css'

const CallApi = () => {
  const [isOpened, setIsopened]  = useState(false);
  const [user, setUser] = useState([
    {name: 'Emmanuel', age: '90', isHappy: true},
    {name: 'Chibuzor', age: '75', isHappy: false},
    {name: 'Bukola', age: '50', isHappy: true},
  ])

  function openMe() {
    setIsopened(!isOpened);
  }

  return (
    <div>
      <Header />
      <div>{isOpened ? 'I am opened' : 'I am not opened'}</div>
      <button onClick={openMe}>Open me</button>
      <RenderUser user={user} />
      <Forms />
    </div>
  )
}

export default CallApi