import styles from './index.module.scss';

import { api } from "../../src/utils/api";
import { useState } from 'react';

const Admin = () => {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");
    
    const createBooks = api.book.createbooks.useMutation({onSuccess: (data) => {
        console.log(data);
    },
    onError: (err) => {
        console.log(err.message);
    }});

    return (
        <>
            <div className={styles.form}>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(event.target.value);
                }}/>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setAuthor(event.target.value);
                }}/>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDescription(event.target.value);
                }}/>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsbn(event.target.value);
                }}/>
                <button onClick={() => {
                    createBooks.mutateAsync({
                        title: title,
                        author: author,
                        description: description,
                        isbn: isbn
                    })
                }}>verzend</button>
            </div>
        </>
    )
}

export default Admin;