import styles from "./about.module.css";
import Image from "next/image";
import pfp from "../../src/media/pfp.jpg";

const about = () => {
    return (
        <div className={styles.center} id='about'>
            <div className={styles.flex}>
                <div className={styles.box}>
                    <div className={styles.margin}>
                        <h1 className="text-center text-3xl p-5 text-cyan-300">Wie ben ik</h1>
                        <p className="text-xl">
                        Ik ben Valentino Andric, een 19-jarige jongen die graag nieuwe dingen leert en veel bezig
                        is in het dagelijkse leven. Na 15 minuten stil zitten word ik gek en ga ik maar iets doen.
                        Of dat nou iets voor school is, gamen of een boek lezen. Ik moet bezig zijn en blijven en iets
                        nieuws leren is altijd leuk.                        
                        </p>
                    </div>
                    <div className={styles.margin}>
                        <h1 className="text-center text-3xl p-5 text-cyan-300">Opleiding</h1>
                        <p className="text-xl">
                            Ik volg de opleiding software developer op het Grafisch Lyceum in Rotterdam. Hier zit ik in het 
                            tweede jaar en moet ik nog 1 jaar stage lopen om mijn opleiding af te ronden.           
                        </p>
                    </div>
                    <div className={styles.margin}>
                        <h1 className="text-center text-3xl p-5 text-cyan-300">Sport</h1>
                        <p className="text-xl">
                            Naast school zit ik op voetbal en ga ik naar de sportschool om meer kracht op te bouwen. Ik ben 
                            namelijk een keeper. Ik ben dus ook best veel bezig met sporten.    
                        </p>
                    </div>
                    <div className={styles.margin}>
                        <h1 className="text-center text-3xl p-5 text-cyan-300">Werk</h1>
                        <p className="text-xl">
                            Ik heb bij 2 horeca's gewerkt en ik werk nu bij de Albert Heijn om nog een beetje inkomsten te hebben 
                            en om te socializen. Binnen mijn vak gebied heb ik nog geen ervaring binnen en bedrijf maar ik 
                            hoop voor mijn stage een leuk bedrijf te vinden waar ik mijn kennis kan uitbreiden.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default about;