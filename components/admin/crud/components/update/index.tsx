/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './index.module.scss';

import { api } from "../../../../../src/utils/api";
import { type Dispatch, type SetStateAction, useState } from 'react';
import { type Books } from '@prisma/client';

type props = {
    book?: Books
    close: Dispatch<SetStateAction<string | undefined>>
    onSuccess?: (data:Books) => void
}
const Update = (props:props) => {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");


    const updateBook = api.book.updatebooks.useMutation({onSuccess: (data) => {
       if(props.onSuccess != undefined) props.onSuccess(data);
    },
    onError: (err: { message: unknown; }) => {
        console.log(err.message);
    }});
    if(props.book == undefined) return (<p>Boek  niet gevonden...</p>);

    return (
        <>
                <div className={styles.popupform} id="form">
                    <div>
                        <p>Title</p>
                        <input type="text" defaultValue={props.book.title} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(event.target.value);
                        }}/>
                        <p>Author</p>
                        <input type="text" defaultValue={props.book.author} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setAuthor(event.target.value);
                        }}/>
                        <p>Description</p>
                        <input type="text" defaultValue={props.book.description} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(event.target.value);
                        }}/>
                        <p>ISBN</p>
                        <input type="text" defaultValue={props.book.isbn} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setIsbn(event.target.value);
                        }}/>
                        <button onClick={() => {
                            if(props.book == undefined) return;
                            updateBook.mutate({
                                id: props.book?.id,
                                title: title,
                                author: author,
                                description: description,
                                isbn: isbn
                            });
                            props.close(undefined);
                        }}>Send</button>
                    </div>
                </div>

        </>
    )
}

export default Update;