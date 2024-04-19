'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { NAV_LINKS } from "@/app/constants";

const AnimatedNavLinks = () => (
    <div className="nav__list">
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="nav__item">{link.label}</Link>
        ))}
    </div>
);

const Header = () => {
    const [active, setActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 86);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${active ? 'header--active' : ''}`}>
            <div className="header__container">
                <Link href="/" id="logo" className="header__logo">
                    <Image src={'/images/webdevakash.webp'} alt="Akash Kumar - Web developer and designer" width={100} height={30} />
                </Link>
                {!active && <AnimatedNavLinks />}
                {/* Social Icons could be uncommented here */}
            </div>
            <div className="nav-mob">
                <div className="nav-mob-container">
                    <div className="nav-mob-wrapper">
                        <Link href="/" className="header__logo">
                            <Image src='/images/webdevakash.webp' alt="Akash Kumar" width={100} height={30} />
                        </Link>
                        <div onClick={() => setActive(!active)} aria-label="Toggle navigation" role="button" tabIndex={0}>
                            <div className={active ? 'activeHamburger' : 'hamburger'} />
                        </div>
                    </div>
                    <div className={active ? 'activeSidenav' : 'sidenav'}>
                        <ul className="mob-ul">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
