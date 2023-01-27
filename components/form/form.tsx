import styles from "./form.module.css";

import { api } from "../../src/utils/api";
import { useState } from "react";

const form = () => {
    const sendMail = api.mail.sendmail.useMutation();
    const [email, setEmail] = useState<string>("");

    return (
        <div className={styles.flexbox}>
            <h1>Mijn gegevens</h1>
            <p>
                Als u uw mail hier beneden invult, dan zal er een mail
                naar u verzonden worden met mijn gegevens!
            </p>
            <div className={styles.form}>
                <input type="text" className="focus:outline-none" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}/>
                <button  onClick={() => {
                    sendMail.mutateAsync({mailAdress: email}).then(()=> {
                        console.log("mail verzonden");
                    }).catch((err) => {
                        console.log(err);
                    });
                    return;
                }}>Verzend</button>
            </div>
        </div>       
    )
}

export default form;