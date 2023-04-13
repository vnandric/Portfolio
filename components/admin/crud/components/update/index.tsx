/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './index.module.scss';

import { api } from "../../../../../src/utils/api";
import { type Dispatch, type SetStateAction, useState } from 'react';
import { type Books } from '@prisma/client';

type props = {
    book?: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string;
        isbn: string;
    }
    close: Dispatch<SetStateAction<string | undefined>>
    onSuccess?: (data:{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string;
        isbn: string;
    }) => void
}

const Update = (props:props) => {
    const [title, setTitle] = useState<string>(props.book?.title ?? "");
    const [author, setAuthor] = useState<string>(props.book?.author ?? "");
    const [description, setDescription] = useState<string>(props.book?.description ?? "");
    const [isbn, setIsbn] = useState<string>(props.book?.isbn ?? "");


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
                        <div className={styles.thaButtons}>
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
                            <button onClick={() => {
                                props.close(undefined);
                            }}>Close</button>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Update;