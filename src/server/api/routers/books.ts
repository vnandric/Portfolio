import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { prisma } from "../../db";
import { TRPCError } from "@trpc/server";

export const booksRouter = createTRPCRouter({
  //make a crud for my books model
  //get all books
  getbooks: publicProcedure.query(async () => {
    const books = await prisma.books.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        shortdescription: true,
        description: true,
        isbn: true,
        imageString: false,
        createdAt: true,
        updatedAt: true,
      },
    });
    return books;
  }),
  uploadImage: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1, "ID must be at least 1 character long"),
        image: z.string().min(1, "Image must be at least 1 character long"),
      })
    )
    .mutation(async ({ input }) => {
      const books = await prisma.books
        .findFirstOrThrow({
          where: {
            id: input.id,
          },
          select: {
            id: true,
          },
        })
        .catch(() => {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Book not found",
          });
        });
      return await prisma.books.update({
        where: {
          id: input.id,
        },
        data: {
          imageString: input.image,
        },
        select: {
          id: true,
          title: true,
          author: true,
          shortdescription: true,
          description: true,
          isbn: true,
          imageString: false,
          createdAt: true,
          updatedAt: true,
        },
      });
    }),

  createbooks: protectedProcedure
    .input(
      z
        .object({
          title: z.string().min(1, "Title must be at least 1 character long"),
          author: z.string().min(1, "Author must be at least 1 character long"),
          shortdescription: z.string().min(1, "Short Description must be at least 1 character long"),
          description: z
            .string()
            .min(1, "Description must be at least 1 character long"),
          isbn: z.string().min(1, "ISBN must be at least 1 character long"),
        })
        .required()
    )
    .mutation(async ({ input }) => {
      return await prisma.books.create({
        data: {
          title: input.title,
          author: input.author,
          shortdescription: input.shortdescription,
          description: input.description,
          isbn: input.isbn,
        },
        select: {
          id: true,
          title: true,
          author: true,
          shortdescription: true,
          description: true,
          isbn: true,
          imageString: false,
          createdAt: true,
          updatedAt: true,
        },
      });
    }),

  updatebooks: protectedProcedure
    .input(
      z
        .object({
          id: z.string().min(1, "ID must be at least 1 character long"),
          title: z.string().min(1, "Title must be at least 1 character long"),
          author: z.string().min(1, "Author must be at least 1 character long"),
          shortdescription: z.string().min(1, "Short Description must be at least 1 character long"),
          description: z
            .string()
            .min(1, "Description must be at least 1 character long"),
          isbn: z.string().min(1, "ISBN must be at least 1 character long"),
        })
        .required()
    )
    .mutation(async ({ input }) => {
      const books = await prisma.books.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          author: input.author,
          shortdescription: input.shortdescription,
          description: input.description,
          isbn: input.isbn,
        },
        select: {
          id: true,
          title: true,
          author: true,
          shortdescription: true,
          description: true,
          isbn: true,
          imageString: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return books;
    }),

  deletebooks: protectedProcedure
    .input(
      z
        .object({
          id: z.string().min(1, "ID must be at least 1 character long"),
        })
        .required()
    )
    .mutation(async ({ input }) => {
      const books = await prisma.books.delete({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          title: true,
          author: true,
          shortdescription: true,
          description: true,
          isbn: true,
          imageString: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return books;
    }),
});
