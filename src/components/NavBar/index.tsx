'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUserContext } from '@/context/UserContext';
import styles from './styles.module.css';
const NavBar = () => {
  const { user } = useUserContext();
  if (!user) return;
  const { name, avatar } = user;

  return (
    <div className={styles.header}>
      <div className={styles.header_profile}>
        <Image src={avatar} alt="logo" width={100} height={100} />
        <h1 className={styles.header_title}>{name}</h1>
      </div>
      <label htmlFor="menu" tabIndex={0} className={styles.menu_button_label}>
        🍔
      </label>
      <input
        id="menu"
        type="checkbox"
        className={styles.menu_button_checkbox}
      />
      <ul className={styles.nav_bar}>
        <Link href="/">About user</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default NavBar;

