import Image from "next/image";
import styles from "./page.module.css";
import Header from "public/header.jpeg";
import Avatar from "public/logo.jpeg";

export default function Home() {
    return (
        <div className={styles.container}>
            {/* Header  */}
            <div className={styles.header}>
                <div className={styles.item}>
                    <h1 className={styles.title}>
                        Kết nối yêu thương, xây dựng cộng đồng
                    </h1>
                    <p className={styles.desc}>
                        Tạo sự gắn kết và xây dựng cộng đồng vững mạnh thông qua
                        tình yêu thương.
                    </p>
                    <div className={styles.button}>
                        <button className={styles.button1}>
                            Đăng ký thành viên
                        </button>
                        <button className={styles.button2}>
                            {" "}
                            Tìm hiểu thêm
                        </button>
                    </div>
                </div>
                <div className={styles.item}>
                    <Image src={Header} alt="" className={styles.img} />
                </div>
            </div>

            {/* Campaign */}
            <div className={styles.campaign}>
                <h2>Các chiến dịch đang diễn ra</h2>
                <div className={styles["campaign-list"]}>
                    <div className={styles["campaign-item"]}>
                        <Image
                            className={styles["campaign-item-image"]}
                            src={Header}
                            alt="a image about a campaign"
                        />
                        <div className={styles["campaign-detail"]}>
                            <p className={styles["campaign-desc"]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque purus mauris, mattis ac
                                finibus ut, ultricies sit amet eros. Donec
                                tempor tortor sed libero tempor, id dapibus nisi
                                sodales
                            </p>
                            <div className={styles.row}>
                                <Image
                                    className={styles.avatar}
                                    src={Avatar}
                                    alt="avatar of origation"
                                />
                                <h4 className={styles.name}>
                                    Trung tâm tình nguyện quốc gia
                                </h4>
                                <button className={styles.time}>
                                    Còn 10 ngày
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles["campaign-item"]}>
                        <Image
                            className={styles["campaign-item-image"]}
                            src={Header}
                            alt="a image about a campaign"
                        />
                        <div className={styles["campaign-detail"]}>
                            <p className={styles["campaign-desc"]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque purus mauris, mattis ac
                                finibus ut, ultricies sit amet eros. Donec
                                tempor tortor sed libero tempor, id dapibus nisi
                                sodales
                            </p>
                            <div className={styles.row}>
                                <Image
                                    className={styles.avatar}
                                    src={Avatar}
                                    alt="avatar of origation"
                                />
                                <h4 className={styles.name}>
                                    Trung tâm tình nguyện quốc gia
                                </h4>
                                <button className={styles.time}>
                                    Còn 10 ngày
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles["campaign-item"]}>
                        <Image
                            className={styles["campaign-item-image"]}
                            src={Header}
                            alt="a image about a campaign"
                        />
                        <div className={styles["campaign-detail"]}>
                            <p className={styles["campaign-desc"]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque purus mauris, mattis ac
                                finibus ut, ultricies sit amet eros. Donec
                                tempor tortor sed libero tempor, id dapibus nisi
                                sodales
                            </p>
                            <div className={styles.row}>
                                <Image
                                    className={styles.avatar}
                                    src={Avatar}
                                    alt="avatar of origation"
                                />
                                <h4 className={styles.name}>
                                    Trung tâm tình nguyện quốc gia
                                </h4>
                                <button className={styles.time}>
                                    Còn 10 ngày
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles["campaign-item"]}>
                        <Image
                            className={styles["campaign-item-image"]}
                            src={Header}
                            alt="a image about a campaign"
                        />
                        <div className={styles["campaign-detail"]}>
                            <p className={styles["campaign-desc"]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque purus mauris, mattis ac
                                finibus ut, ultricies sit amet eros. Donec
                                tempor tortor sed libero tempor, id dapibus nisi
                                sodales
                            </p>
                            <div className={styles.row}>
                                <Image
                                    className={styles.avatar}
                                    src={Avatar}
                                    alt="avatar of origation"
                                />
                                <h4 className={styles.name}>
                                    Trung tâm tình nguyện quốc gia
                                </h4>
                                <button className={styles.time}>
                                    Còn 10 ngày
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles["campaign-item"]}>
                        <Image
                            className={styles["campaign-item-image"]}
                            src={Header}
                            alt="a image about a campaign"
                        />
                        <div className={styles["campaign-detail"]}>
                            <p className={styles["campaign-desc"]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque purus mauris, mattis ac
                                finibus ut, ultricies sit amet eros. Donec
                                tempor tortor sed libero tempor, id dapibus nisi
                                sodales
                            </p>
                            <div className={styles.row}>
                                <Image
                                    className={styles.avatar}
                                    src={Avatar}
                                    alt="avatar of origation"
                                />
                                <h4 className={styles.name}>
                                    Trung tâm tình nguyện quốc gia
                                </h4>
                                <button className={styles.time}>
                                    Còn 10 ngày
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles["campaign-item"]}>
                        <Image
                            className={styles["campaign-item-image"]}
                            src={Header}
                            alt="a image about a campaign"
                        />
                        <div className={styles["campaign-detail"]}>
                            <p className={styles["campaign-desc"]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque purus mauris, mattis ac
                                finibus ut, ultricies sit amet eros. Donec
                                tempor tortor sed libero tempor, id dapibus nisi
                                sodales
                            </p>
                            <div className={styles.row}>
                                <Image
                                    className={styles.avatar}
                                    src={Avatar}
                                    alt="avatar of origation"
                                />
                                <h4 className={styles.name}>
                                    Trung tâm tình nguyện quốc gia
                                </h4>
                                <button className={styles.time}>
                                    Còn 10 ngày
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
