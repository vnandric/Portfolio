/* eslint-disable @next/next/no-img-element */
import styles from "./login.module.scss";

import { signIn, signOut, useSession } from "next-auth/react";


const Login = () => {
    
    return (
        <div className={styles.flex}>
            <div className={styles.box}>
                <img src="/chillhub.png" alt="jpg" />

                <button className={styles.discord} onClick={ () => {
                void signIn("discord");
                }}><b>Log in met discord</b></button>
            </div>
        </div>
    );  
}

export default Login;