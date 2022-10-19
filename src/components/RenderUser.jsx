import React from 'react'

const RenderUser = ({user}) => {
  
  return (
    <div>
      <div className='container'>{user.map(({name, age,isHappy}, i) => (
        <div key={i} style={{color: isHappy ? 'green' : 'red'}}>
          name: {name} {' '}
          age: {age}
        </div>
      ))}</div>
    </div>
  )
}

export default RenderUser;