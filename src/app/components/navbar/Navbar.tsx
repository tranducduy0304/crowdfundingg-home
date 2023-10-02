import React from "react";
import styles from "./navbar.module.css";
import Logo from "public/Logo.jpeg";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={styles.main}>
            <div className={styles["container-nav"]}>
                <Image src={Logo} className={styles.logo} alt="Logo" />
                <nav className={styles.navbar}>
                    {/* <Image src={Logo} className={styles.logo} alt="Logo" /> */}
                    <ul className={styles["navbar-list"]}>
                        <li className={styles["navbar-item"]}>
                            <a className={styles.navigation} href="#">
                                Start a Campaign
                            </a>
                        </li>
                        <li className={styles["navbar-item"]}>
                            <a className={styles.navigation} href="#">
                                Blogs
                            </a>
                        </li>
                        <li className={styles["navbar-item"]}>
                            <a className={styles.navigation} href="#">
                                What we do
                            </a>
                        </li>
                        <li className={styles["navbar-item"]}>
                            <button className={styles["btn-login"]}>
                                Login
                            </button>
                        </li>
                        <li className={styles["navbar-item"]}>
                            <button className={styles["btn-signup"]}>
                                Signup
                            </button>
                        </li>
                        {/* <li className='navbar__menu-item'>Menu Item 4</li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
