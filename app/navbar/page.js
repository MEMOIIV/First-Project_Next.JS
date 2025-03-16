"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-logo']}>
                <Link href="/" onClick={ () => setIsOpen(false)}>
                    <p>Next</p>
                </Link>
            </div>
            <ul  className={`${styles['navbar-links']} ${isOpen ? styles.active : ''}`}>
                <li> 
                    <Link href="/"  onClick={ () => setIsOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link href="/Posts" onClick={ () => setIsOpen(false)}>Posts</Link>
                </li>
                <li>
                    <Link href="/articles" onClick={ () => setIsOpen(false)}>Articles</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
