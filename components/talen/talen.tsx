import styles from "./talen.module.css";

import Image from "next/image";
import html5pic from "../../src/media/htmlpic.png";
import css3pic from "../../src/media/csspic.png";
import jspic from "../../src/media/jspic.png";

import project1 from "../../src/media/img1.jpg";

const talen = () => {
    return (
        <div id="talen" className={styles.box}>
            <div className={styles.htmlbox}>
                <Image alt='jpg' src={html5pic} className={styles.htmlimg}></Image>
                <div className={styles.htmluitleg}>
                    <div>
                        HTML is natuurlijk 1 van de hoofdtalen die ik beheers. Ik beschik de basis en kan hier wel
                        wat leuks me.
                    </div>
                </div>
                <div className={styles.projectpic}>
                    <Image alt='png' src={project1} className={styles.imgheights}></Image>
                    <Image alt='png' src={project1} className={styles.imgheights}></Image>
                </div>
            </div>

            <div className={styles.cssbox}>
                <Image alt='jpg' src={css3pic} className={styles.imgheights}></Image>
                <div className={styles.uitleg}>
                    <div>
                        Zonder CSS is de HTML dus dit kan ik ook. Vind backend develpen leuker maar bij CSS beschik 
                        ik de basis ook wel. Speel met de site om te zien dat hij ook responsive is!
                    </div>
                </div>
                <div className={styles.projectpic}>
                    <Image alt='png' src={project1} className={styles.imgheights}></Image>
                    <Image alt='png' src={project1} className={styles.imgheights}></Image>
                </div>
            </div>

            <div className={styles.jsbox}>
                <Image alt='jpg' src={jspic} className={styles.imgheights}></Image>
                <div className={styles.uitleg}>
                    <div>
                        Javascript is ook een optie bij HTML voor diversen dingen. Ik heb hier ook de basis, Ik 
                        snap de code vaak wel maar zelf kan ik en doe ik er niet veel mee. Altans geen
                        gecompliceerde dingen.
                    </div>
                </div>
                <div className={styles.projectpic}>
                    <Image alt='png' src={project1} className={styles.imgheights}></Image>
                    <Image alt='png' src={project1} className={styles.imgheights}></Image>
                </div>
            </div>
        </div>
    
)};

export default talen;