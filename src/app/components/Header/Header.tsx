"use client"
import { NAV_LINKS } from "@/app/constants";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

const AnimatedNavLinks = () => (
    <div className="nav__list">
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="nav__item">
                {link.label}
            </Link>
        ))}
    </div>
);


const Header = () => {
    const [active, setActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 86);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${active ? 'header--active' : ''}`}>
            <div className="header__container">
                <Link href="/" id="logo" className="header__logo">
                    <Image src={'/images/webdevakash.webp'} alt="Akash Kumae - Web developer and designer" width={83} height={85} />
                </Link>
                {!active && <AnimatedNavLinks />}
                <div className="header-social">
                    {/* <a className="header-social__link" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="header-social__link" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="header-social__link" href="#"><FontAwesomeIcon icon={faTwitter} /></a> */}
                </div>
            </div>


            <div className="nav-mob">
                <div className="nav-mob-container">
                    <div className="nav-mob-wrapper">
                        <Link href="/" id="logo" className="header__logo" >
                            <Image src='/images/webdevakash.webp' alt="Akash Kumar" width={83} height={85} />
                        </Link>
                        <div onClick={() => setActive(!active)}>
                            <div className={active ? 'activeHamburger' : 'hamburger'} />
                        </div>
                    </div>
                </div>

                <div className={active ? 'activeSidenav' : 'sidenav'}>
                    <ul className="mob-ul">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link href={link.href} >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
