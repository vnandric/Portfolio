import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { prisma } from "../../db";

export const booksRouter = createTRPCRouter({
    //make a crud for my books model
    //get all books
    getbooks: publicProcedure
        .mutation(async () => {
            const books = await prisma.books.findMany();
            return books;
        }
    ),

    createbooks: protectedProcedure.input(z.object({
            title: z.string().min(1, "Title must be at least 1 character long"),
            author: z.string().min(1, "Author must be at least 1 character long"),
            description: z.string().min(1, "Description must be at least 1 character long"),
            isbn: z.string().min(1, "ISBN must be at least 1 character long")
        }).required())
        .mutation(async ({input}) => {
            const books = await prisma.books.create({
                data: {
                    title: input.title,
                    author: input.author,
                    description: input.description,
                    isbn: input.isbn
                }
            })
            return books;
        }),
});