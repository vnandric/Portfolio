import Image from "next/image";
import pfp from "../../../src/media/pfp.jpg";

import styles from "./uv.module.css";

const UnderNavbar = () => {
    return (
        <Image src={pfp} alt="Picture of the author" className={styles.img} />
    )
}

export default UnderNavbar