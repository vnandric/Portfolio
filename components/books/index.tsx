/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './index.module.scss';

import { api } from "../../src/utils/api";
import { useEffect, useState } from 'react';

import View from './view/index';


const Booksklant = () => {
    const [books, setBooks] = useState<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        author: string;
        description: string;
        shortdescription: string;
        isbn: string;
    }[]>([]);

    const [showPopup, setShowPopup] = useState<string | undefined>(undefined);

    const getBooks = api.book.getbooks.useQuery(undefined, {onSuccess: (data) => {
        setBooks(data);
    }});

    if(getBooks.isLoading && getBooks.data == undefined) return (<p>Loading...</p>);
    
    
    return (
        <>
            {showPopup != undefined && getBooks.data != undefined ? (
                <View
                onSuccess={(data) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    const index = books.findIndex((book) => book.id === data.id);
                    setBooks([
                    ...books.slice(0, index),
                    data,
                    ...books.slice(index + 1),
                    ]);
                }}
                close={setShowPopup}
                book={getBooks.data.find((book) => book.id === showPopup)}
                />
            ) : null}
            <h1>Books</h1>
            <div className={styles.container}>
                {books.map((book) => {
                    return (
                        <>
                            <div className={styles.getBooks}>
                                <div key={book.id}>
                                    {/* <Image src={book.image} alt="Picture of the book" className={styles.img} /> */}
                                    <Image id={book.id}/>
                                    <p>{book.shortdescription}</p>
                                    <button onClick={() => {
                                        setShowPopup(book.id);
                                    }}>View</button>
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

const Image = ({ id }: { id: string }) => {
    const [image, setImage] = useState<string>("");
    useEffect(() => {
      const getImage = async () => {
        const response = await fetch("/api/books/images?id=" + id);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setImage(data.image);
      }
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      getImage().catch(() => {});
    }, [id]);
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image}  alt="Uploaded Image"  className={styles.image}/>;
  };