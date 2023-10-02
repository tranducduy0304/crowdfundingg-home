import Image from "next/image";
import React from "react";
// import Logo from "public/Logo.jpeg";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles["col"]}>
                {/* <Image src={Logo} alt="Logo" className={styles.logo} /> */}
                <p className={styles.desc}>
                    Kết Nối Yêu Thương, Xây Dựng Cộng Đồng
                </p>
            </div>
            <div className={styles["col"]}>
                <h3 className={styles.title}>Trợ giúp</h3>
                <ul>
                    <li className={styles.desc}>Giới thiệu</li>
                    <li className={styles.desc}>Blogs</li>
                    <li className={styles.desc}>Liên hệ</li>
                </ul>
            </div>
            <div className={styles["col"]}>
                <h3 className={styles.title}>Liên hệ chúng tôi</h3>
                <ul>
                    <li className={styles.desc}>
                        Khu đô thị FPT City, Ngũ Hành Sơn, Da Nang 550000
                    </li>
                    <li className={styles.desc}>(84) 000-000</li>
                    <li className={styles.desc}>support@damd.com</li>
                </ul>
            </div>
        </div>
    );
}
