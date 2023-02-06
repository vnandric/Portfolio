import styles from "./projecten.module.css";

import Image from "next/image";
import Link from "next/link";

import project1 from "../../src/media/project1.png";
import project2 from "../../src/media/project2.png";
import project3 from "../../src/media/project3.png";
import project4 from "../../src/media/project4.png";
import project5 from "../../src/media/project5.png";

const talen = () => {
    return (
        <div>
            <div className={styles.box} id="projecten">
                <div>
                    <h2>Projecten</h2>
                    <p>
                        Hier onder in heb ik een aantal projecten die ik in de komende anderhalf jaar allemaal gemaakt heb. Klik op de 
                        afbeelding om meer over dat project te weten te komen.
                    </p>
                </div>
                <div className={styles.flex_box}>
                    <div className={styles.pic_box}>
                        <h3>Discord Bot</h3>
                        <Image src={project1} alt="png" className={styles.pics}></Image>
                        <p>
                            Ik heb om te expirimenteren een klein discord bot gemaakt. Vandaag gebruiken wij hem wel eens en later wil
                            ik hem nog verder uitbreiden. om iets meer mee te kunnen doen.
                        </p>
                    </div>

                    <div className={styles.pic_box}>
                        <h3>PHP CRUD</h3>
                        <Link href="https://87788.stu.sd-lab.nl/crud/index.php" target="_blank"><Image src={project2} alt="png" className={styles.pics}></Image></Link>                        
                        <p>
                            Voor een school project moesten we een PHP CRUD systeem maken. Hier de site, heb de styling alleen een beetje
                            links laten liggen.
                        </p>
                    </div>

                    <div className={styles.pic_box}>
                        <h3>API</h3>
                        <Link href="https://87788.stu.sd-lab.nl/minor/api/opdracht1/opdracht1.php" target="_blank"><Image src={project3} alt="png" className={styles.pics}></Image></Link>
                        <p>
                            Hier heb ik een API call gemaakt en een website er mee gebouwt. Je kan hier het weer van vandaag bekijken maar
                            ook van de komende 3 dagen.
                        </p>
                    </div>                    
                </div>

                <div className={styles.flex_box}>
                    <div className={styles.pic_box}>
                        <h3>T3</h3>
                        <Link href="https://create.t3.gg/" target="_blank"><Image src={project4} alt="png" className={styles.pics}></Image></Link>
                        <p>
                            Deze site is ook iets nieuws voor mij. Ik heb dit gemaakt met T3 en wilde hier meer over leren.
                            en vandaar heb ik de site gemaakt met deze package.
                        </p>
                    </div>

                    <div className={styles.pic_box}>
                        <h3>PHP CRUD</h3>
                        <Link href="https://chillhub.nl/" target="_blank"><Image src={project5} alt="png" className={styles.pics}></Image></Link>
                        <p>
                            Met een groepje van 3 hebben we samen een project die wij gaan maken. Dit zal een livestream webpagina worden voor 
                            DJ's.
                        </p>
                    </div>                  
                </div>
            </div>
        </div>
    
)};

export default talen;