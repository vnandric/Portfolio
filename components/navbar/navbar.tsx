import styles from "../styles/navbar.module.css";

const navbar = () => {
    return (
        <div className={styles.navflex}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>Hallo</li>
                    <li>Bonjour</li>
                    <li>hahaha</li>
                </ul>
            </nav>
        </div>
        );
};
export default navbar;