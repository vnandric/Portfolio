import styles from "./form.module.css";

import { api } from "../../../src/utils/api";
import { useState } from "react";
import Alert from "../alert/Alert";

const Form = () => {
    const [mailSend, setMailSend] = useState<boolean>(false);
    const sendMail = api.mail.sendmail.useMutation({
        onSuccess: () => {
            setMailSend(true);
            setTimeout(() => {
                setMailSend(false);
            }, 3000);
        }
    });
    const [email, setEmail] = useState<string>("");

    return (
        <div id="gegevens" className={styles.flexbox}>
            <h1 className="text-cyan-300">Mijn gegevens</h1>
            <p>
                Als u uw mail hier beneden invult, dan zal er een mail
                naar u verzonden worden met mijn gegevens!
            </p>
            <div className={styles.form}>
                <input type="text" value={email} className="focus:outline-none" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}/>
                <button  onClick={() => {
                    sendMail.mutateAsync({mailAdress: email}).then(()=> {
                        console.log("mail verzonden");
                        setEmail("");
                    }).catch((err) => {
                        console.log(err);
                    });
                    return;
                }}>Verzend</button>
                <Alert showAlert={mailSend} setShowAlert={setMailSend} message={"Email is verstuurd"} />
            </div>
        </div>       
    )
}

export default Form;