/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './index.module.scss';

import { api } from "../../src/utils/api";
import { useState } from 'react';
import Image from 'next/image';

import { type Books } from '@prisma/client';

import richdad from '../../src/media/richdadpoordad.jpg';


const Booksklant = () => {
    const [books, setBooks] = useState<Books[]>([]);

    const getBooks = api.book.getbooks.useQuery(undefined, {onSuccess: (data) => {
        setBooks(data);
    }});

    if(getBooks.isLoading && getBooks.data == undefined) return (<p>Loading...</p>);
    
    
    return (
        <>
            <h1>Books</h1>
            <div className={styles.container}>
                {books.map((book) => {
                    return (
                        <>
                            <div className={styles.getBooks}>
                                <div key={book.id}>
                                    {/* <Image src={book.image} alt="Picture of the book" className={styles.img} /> */}
                                    <Image src={richdad} alt="Picture of the book" className={styles.img}/>
                                    <p>{book.title}</p>
                                    <p>{book.author}</p>
                                    <p>{book.description}</p>
                                    <p>{book.isbn}</p>
                                </div>
                            </div>                            
                        </>
                    )
                })}
            </div>
            
        </>
    )
}

export default Booksklant;