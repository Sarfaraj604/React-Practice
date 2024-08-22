import React from 'react'

export default function Nav() {
  return (
    <nav className='container'>
      <div className="logo">
        <img src="/image/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>login</button>
    </nav>
  )
}
