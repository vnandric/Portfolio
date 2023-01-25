import styles from "../styles/navbar.module.css";

const navbar = () => {
    return (
        <div className={styles.navFlex}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><a href="#">Hallo</a></li>
                    <li><a href="#">Bonjour</a></li>
                    <li><a href="#">hahaha</a></li>
                </ul>
            </nav>
        </div>
        );
};
export default navbar;