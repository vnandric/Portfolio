import styles from './index.module.scss';

import { api } from "../../../src/utils/api";
import { useState } from 'react';
import Books from '~/pages/books';

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

    const getBooks = api.book.getbooks.useQuery();

    const deleteBook = api.book.deletebooks.useMutation({onSuccess: (data: any) => {
        console.log(data);
    },
    onError: (err: { message: any; }) => {
        console.log(err.message);
    }});

    return (
        <>
            <div className={styles.form}>
                <p>Title</p>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(event.target.value);
                }}/>
                <p>Author</p>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setAuthor(event.target.value);
                }}/>
                <p>Description</p>
                <input type="text" onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDescription(event.target.value);
                }}/>
                <p>ISBN</p>
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

            <div>
                <h1>Books</h1>
                {getBooks.data?.map((book) => {
                    return (
                        <>
                            <div key={book.id}>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                                <p>{book.isbn}</p>
                            </div>
                        </>                        
                    )
                })}
            </div>
        </>
    )
}

export default Admin;