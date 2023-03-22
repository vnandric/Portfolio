/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './index.module.scss';

import { api } from "../../../src/utils/api";
import { useState } from 'react';

import Update from './components/update';

import { type Books } from '@prisma/client';


const Admin = () => {
    const [books, setBooks] = useState<Books[]>([]);
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");

    const [showPopup, setShowPopup] = useState<string | undefined>(undefined);

    const createBooks = api.book.createbooks.useMutation({onSuccess: (data) => {
        setBooks([...books, data]);
    },
    onError: (err) => {
        console.log(err.message);
    }});

    const getBooks = api.book.getbooks.useQuery(undefined, {onSuccess: (data) => {
        setBooks(data);
    }});

    const deleteBook = api.book.deletebooks.useMutation({onSuccess: (data) => {
        console.log(data);
    },
    onError: (err: { message: any; }) => {
        console.log(err.message);
    }});

    if(getBooks.isLoading && getBooks.data == undefined) return (<p>Loading...</p>);
    
    
    return (
        <>
            {showPopup != undefined && getBooks.data != undefined  ?
                <Update onSuccess={(data) => {
                    const index = books.findIndex((book) => book.id === data.id);
                    setBooks([...books.slice(0, index), data, ...books.slice(index + 1)]);
                }} close={setShowPopup} book={getBooks.data.find((book) => book.id === showPopup)} />
            : null}
            
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
                <button onClick={() => 
                    void createBooks.mutateAsync({
                        title: title,
                        author: author,
                        description: description,
                        isbn: isbn
                    })
                    
                }>Send</button>
            </div>

            <div>
                <h1>Books</h1>
                {books.map((book) => {
                    return (
                        <>
                            <div key={book.id}>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                                <p>{book.isbn}</p>
                            </div>
                            <button onClick={() => {
                                deleteBook.mutate({id: book.id});

                                const index = books.findIndex((findBook) => findBook.id === book.id);
                                setBooks([...books.slice(0, index), ...books.slice(index + 1)]);
                                }}>Delete</button>
                            <button onClick={() => {
                                setShowPopup(book.id);
                            }}>Update</button>
                        </>
                    )
                })}
            </div>
            
        </>
    )
}

export default Admin;