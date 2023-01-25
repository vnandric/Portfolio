import styles from "../styles/talen.module.css";

import Image from "next/image";
import html5pic from "../../src/media/htmlpic.png";

const talen = () => {
    return (
        <div id="talen" className={styles.box}>
            <div className={styles.htmlbox}>
                <Image alt='jpg' src={html5pic} className={styles.html}></Image>
            </div>
        </div>
    
)};

export default talen;