import styles from './index.module.scss'

import { type Dispatch, type SetStateAction, useState, useEffect } from 'react';

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

const View = (props:props) => {

    return (
        <>
            <div className={styles.blok}>
                <div className={styles.container}>
                    <Image id={props.book?.id}/>
                    <div>
                        <p>{props.book?.title}</p>
                        <p>{props.book?.author}</p>
                        <p>{props.book?.description}</p>
                        <p>{props.book?.isbn}</p>
                    </div>
                    <button onClick={() => {
                        props.close(undefined);
                    }}>Close</button>           
                </div>                
            </div>
        </>
    )
}

export default View

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