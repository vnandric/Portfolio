import styles from "./about.module.css";
import Image from "next/image";
import CHAD from "../../src/media/chad.jpg"

const about = () => {
    return (
        <div className={styles.center} id='about'>
            <div className={styles.flex}>
                <div className={styles.box}>
                    <h1 className="text-center text-3xl p-5">Wie ben ik</h1>
                    <p className="text-xl">
                        Ik ben Valentino Andric, een 19-jarige jongen die graag nieuwe dingen leert en veel bezig
                        is in het dagelijkse leven. Na 15 minuten stil zitten word ik gek en ga ik maar iets doen.
                        Of dat nou iets voor school is, gamen of een boek lezen. Ik moet bezig zijn en blijven en iets
                        nieuws leren is altijd leuk.                        
                    </p>
                    <h1 className="text-center text-3xl p-5">Opleiding</h1>
                    <p className="text-xl">
                        Ik volg de Opleiding Software Developer op het Grafisch Lyceum in Rotterdam. Ik zit hier in het
                        2de jaar en dit is een 3 jarig durende Opleiding, waarvan het laatse jaar vooral uit stage bestaat.
                        Ik heb hiervoor niet een andere opleiding gedaan, maar ik ben wel een jaar blijven zitten op de
                        middelbare school. Soms leer je op een harde manier van je fouten. Ik heb hier geen spijt van, dit heeft
                        mij alleen maar een hardere werker gemaakt.             
                    </p>
                    <h1 className="text-center text-3xl p-5">Sport</h1>
                    <p className="text-xl">
                        Naast mijn opleiding ben ik ook een keeper bij een voetbalclub. Op moment keep ik bij Capelle O23-01
                        en heb ik hoopelijk al een paar stappen gezet binnen de club om hoger op te kunnen komen. Ik is 
                        namelijk een nieuwe club voor mij. Maar ik zit al op voetbal sinds mijn 9de en was eerst een speler.
                        Na een paar jaar volledig eigenwijs te zijn besloot ik toch maar te keepen, want in pricipe deed ik 
                        beide maar kon toch wel beter keepen en ik mocht daar ook eigenwijs zijn. Als ik de ballen maar tegenhoud
                        zal de trainer er geen problemen mee hebben. Voor het keepen ga ik ook naar de sportschool om meer 
                        kracht op te kunnen bouwen. Ik train 3 a 4 keer bij de club en daarnaast, wanneer ik geen training heb 
                        ga ik naar de sportschool. Dus ik ben best wel een sportief persoon.    
                    </p>
                    <h1 className="text-center text-3xl p-5">Werk</h1>
                    <p className="text-xl">
                        Ik heb redelijk werk ervaring maar niet binnen mijn beroep het software development. Ik heb wel bij 2 
                        horeca's en op moment werk ik bij de Albert Heijn. Ik heb 8 maanden bij mijn eerste horeca gewerkt in 
                        Rotterdam, bij de Rodeo in de buurt van het Erasmus brug. Hier was ik spoeler maar moest ik stoppen, omdat
                        het best zwaar was, ik ging naar school, ik voetbalde en ik was nog best jong(15). Bij de volgende 
                    </p>
                </div>
                <Image alt='png' src={CHAD} className={styles.img}></Image>
            </div>
        </div>
    )
};

export default about;