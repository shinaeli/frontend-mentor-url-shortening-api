import React, { useState } from 'react'
import Logo from './utils/Logo';
import Button from './utils/Button';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const leftLinks = [
        {
            id: 1,
            text: 'Features',
            link: '#features',
        },
        {
            id: 2,
            text: 'Pricing',
            link: '#pricing',
        },
        {
            id: 3,
            text: 'Resources',
            link: '#resources',
        }
    ];

    const rightLinks = [
        {
            id: 4,
            text: 'Login',
            link: '#login',
        }
    ];

  return (
    <nav className="container">
            <section className='nav-sublink-1'>
                <Logo />
                <ul>
                    {
                        leftLinks.map(item => {
                            const { id, text, link } = item;
                            return <li key={id}><a className='poppins-regular' href={link}>{text}</a></li>;
                        })
                    }
                </ul>              
            </section>
            <section className='nav-sublink-2'>
                <ul>
                    {
                        rightLinks.map(item => {
                            const { id, text, link } = item;
                            return <li key={id}><a className='poppins-regular' href={link}>{text}</a></li>;
                        })
                    }
                    <li>
                        <Button text="Sign Up" />
                    </li>
                </ul>
            </section>
            <section className="mobile-nav">
                <Logo />
                {showLinks && (<ul className="mobile-nav-ul">
                    {
                        leftLinks.map(item => {
                            const { id, text, link } = item;
                            return <li key={id}><a className='poppins-bold' href={link}>{text}</a></li>;
                        })
                    }
                    {
                        rightLinks.map(item => {
                            const { id, text, link } = item;
                            return <li key={id}><a className='poppins-bold' href={link}>{text}</a></li>;
                        })
                    }
                    <li>
                        <Button text="Sign Up" />
                    </li>
                </ul>)}
                <section className="menu" onClick={() => setShowLinks(prev => !prev)}>
                    <img src="images/icon-hamburger.svg" alt="hamburger menu" />
                </section>
            </section>
    </nav>
  )
}

export default Navbar