import styles from "../styles/talen.module.css";

import Image from "next/image";
import html5pic from "../../src/media/htmlpic.png";
import css3pic from "../../src/media/csspic.png";

import project1 from "../../src/media/img1.jpg";

const talen = () => {
    return (
        <div id="talen" className={styles.box}>
            <div className={styles.htmlbox}>
                <Image alt='jpg' src={html5pic} className={styles.imgheights}></Image>
                <div className={styles.htmluitleg}>
                    <div>
                        HTML is natuurlijk 1 van de hoofdtalen die ik beheers. Ik beschik de basis en kan hier wel
                        wat leuks me.
                    </div>
                </div>
                <Image alt='png' src={project1} className={styles.imgheights}></Image>
                <Image alt='png' src={project1} className={styles.imgheights}></Image>
            </div>

            <div className={styles.cssbox}>
                <Image alt='png' src={project1} className={styles.imgheights}></Image>
                <Image alt='png' src={project1} className={styles.imgheights}></Image>
                <div className={styles.cssuitleg}>
                    <div>
                        Zonder CSS is de HTML dus dit kan ik ook. Vind backend develpen leuker maar bij CSS beschik ik de basis
                        ook wel. Speel met de site om te zien dat hij ook responsive is!
                    </div>
                </div>
                <Image alt='jpg' src={css3pic} className={styles.imgheights}></Image>
            </div>
        </div>
    
)};

export default talen;