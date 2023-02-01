import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>Hello {props.name} - {props.surname}</h1>
      {props.children}
    </>
  )
}

export default Header
