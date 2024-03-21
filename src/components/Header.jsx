import React from 'react'
import Button from './utils/Button'

const Header = () => {
  return (
    <div className="container header">
        <section className="header-main-1">
            <h1 className="poppins-bold">More than just shorter links</h1>
            <p className='poppins-regular'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button className="header-btn" text="Get Started" />
        </section>
        <section className="header-main-2"></section>
    </div>
  )
}

export default Header