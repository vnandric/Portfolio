import styles from "../styles/about.module.css";
import Image from "next/image";
import CHAD from "../../src/media/chad.jpg"

const about = () => {
    return (
        <div className={styles.center} id='about'>
            <div className={styles.flex}>
                <div className={styles.box}>
                    <h1 className="text-center text-3xl p-5">Waarom gebruiken we het?</h1>
                    <p className="text-xl">
                        Het is al geruime tijd een bekend gegeven dat een lezer, 
                        tijdens het bekijken van de layout van een pagina, afgeleid wordt 
                        door de tekstuele inhoud. Het belangrijke punt van het gebruik 
                        an Lorem Ipsum is dat het uit een min of meer normale verdeling 
                        van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw 
                        tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop 
                        publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem 
                        Ipsum als hun standaard model tekst, en een zoekopdracht naar "lorem ipsum" 
                        ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies 
                        hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms 
                        expres (ingevoegde humor en dergelijke).
                    </p>
                </div>
                <Image alt='png' src={CHAD} className={styles.img}></Image>
            </div>
        </div>
    )
};

export default about;