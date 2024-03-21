import React from 'react'
import Logo from './utils/Logo';

const Footer = () => {
    const footLinks = [
        {
            id: 1,
            mainTitle: 'Features',
            subLinks: [
                {
                    id: 1,
                    text: 'Link Shortening',
                    link: '#linkshortening',
                },
                {
                    id: 2,
                    text: 'Branded Links',
                    link: '#brandedlinks',
                },
                {
                    id: 3,
                    text: 'Analytics',
                    link: '#analytics',
                }
            ]
        },
        {
            id: 2,
            mainTitle: 'Resources',
            subLinks: [
                {
                    id: 1,
                    text: 'Blog',
                    link: '#blog',
                },
                {
                    id: 2,
                    text: 'Developers',
                    link: '#developers',
                },
                {
                    id: 3,
                    text: 'Support',
                    link: '#support',
                }
            ]
        },
        {
            id: 3,
            mainTitle: 'Company',
            subLinks: [
                {
                    id: 1,
                    text: 'About',
                    link: '#about',
                },
                {
                    id: 2,
                    text: 'Our Team',
                    link: '#ourteam',
                },
                {
                    id: 3,
                    text: 'Careers',
                    link: '#careers',
                },
                {
                    id: 4,
                    text: 'Contact',
                    link: '#contact',
                }
            ]
        },
    ];
    const socials = [
        {
            id: 1,
            imgLink: 'images/icon-facebook.svg',
            link: '#facebook',
            alt: 'facebook icon',
        },
        {
            id: 2,
            imgLink: 'images/icon-twitter.svg',
            link: '#twitter',
            alt: 'twitter icon',
        },
        {
            id: 3,
            imgLink: 'images/icon-pinterest.svg',
            link: '#pinterest',
            alt: 'pinterest icon',
        },
        {
            id: 4,
            imgLink: 'images/icon-instagram.svg',
            link: '#instagram',
            alt: 'instagram icon',
        }
    ]

  return (
    <div className="footer">
        <main className="footer-container">
            <Logo bgColor="#fff" />
            <section className="all-links">
            {footLinks.map(item => {
                const { id, mainTitle, subLinks } = item;
                return (
                            <section className="footer-main-links">
                                <h5 key={id} className='poppins-semibold'>{mainTitle}</h5>
                                <ul>
                                    {subLinks.map(item => {
                                        const { id, text, link } = item;
                                        return <li key={id}><a className='poppins-regular' href={link}>{text}</a></li>;
                                    })}
                                </ul>
                            </section>
                        )
                })
            };
            <section className="socials">
                {socials.map(item => {
                    const { id, imgLink, link, alt } = item;
                    return (
                        <li key={id}>
                            <a href={link}>
                                <img src={imgLink} alt={alt} />
                            </a>
                        </li>
                    )
                })}
            </section>
            </section>
        </main>
    </div>
  )
}

export default Footer