/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from "./index.module.scss";

import { api } from "../../../src/utils/api";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

import Update from "./components/update";

import { PrismaClient, type Books } from "@prisma/client";

import type { InferGetServerSidePropsType,  NextPage } from "next";

type pageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
const Admin:NextPage<pageProps> = ({images}
) => {
  const [books, setBooks] = useState<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    author: string;
    description: string;
    isbn: string;
}[]>([]);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>(""); // :)
  const [isbn, setIsbn] = useState<string>("");

  const [showPopup, setShowPopup] = useState<string | undefined>(undefined);

  const createBooks = api.book.createbooks.useMutation({
    onSuccess: (data) => {
      setBooks([...books, data]);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  const deleteBook = api.book.deletebooks.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err: { message: any }) => {
      console.log(err.message);
    },
  });
  const getBooks = api.book.getbooks.useQuery(undefined, {
    onSuccess: (data) => {
      setBooks(data);
    },
  });

  if (getBooks.isLoading && getBooks.data == undefined)
    return <p>Loading...</p>;

  return (
    <>
      {showPopup != undefined && getBooks.data != undefined ? (
        <Update
          onSuccess={(data) => {
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

      <div className={styles.form}>
        <p>Title</p>
        <input
          type="text"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
        />
        <p>Author</p>
        <input
          type="text"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAuthor(event.target.value);
          }}
        />
        <p>Description</p>
        <input
          type="text"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
        />
        <p>ISBN</p>
        <input
          type="text"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            setIsbn(event.target.value);
          }}
        />
        <input
          type="file"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.files);

            if (
              event.target.files == null ||
              event.target.files[0] == undefined
            ) {
              return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function () {
              setImage(reader.result as string);
            };
            reader.onerror = function (error) {
              console.log("Error: ", error);
            };
          }}
        />
        <button
          onClick={() => {
            console.log(image, typeof image);
            void createBooks.mutateAsync({
              title: title,
              author: author,
              image: image.toString(),
              description: description,
              isbn: isbn,
            });
          }}
        >
          Send
        </button>
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
                                    {images.map((image) => {
                                        if (image.id === book.id) {
                                            return <img src={image.image?.toString("base64")} alt={book.title} key={image.id} />
                                        }
                                    })
                                    }
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

      <button onClick={() => signOut()}>Log out</button>
    </>
  );
};

export default Admin;


export async function getServerSideProps() {
    const prisma = new PrismaClient()
    const images = await prisma.books.findMany({
        select: {
            id: true,
            image: true,
        }
    })
    return {
      props: {
        images: images
      }, // will be passed to the page component as props
    }
  }