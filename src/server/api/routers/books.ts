import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { prisma } from "../../db";
import { get } from "http";
import { base64toBlob, blobToBase64 } from "~/server/functions/base64toblob";
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
        description: true,
        isbn: true,
        image: false,
        createdAt: true,
        updatedAt: true,
      },
    });
    return books;
  }),
  getImage: publicProcedure
    .input(
      z.object({
        id: z.string().min(1, "ID must be at least 1 character long"),
      })
    )
    .mutation(async ({ input }) => {
      const data = await prisma.books
        .findUniqueOrThrow({
          where: {
            id: input.id,
          },
          select: {
            image: true,
          },
        })
        .catch(() => {
          throw new TRPCError({
            message: "Image not found",
            code: "NOT_FOUND",
          });
        });
      if (data.image == null)
        throw new TRPCError({
          message: "Image not found",
          code: "NOT_FOUND",
        });
      return blobToBase64(data.image);
    }),
  createbooks: protectedProcedure
    .input(
      z
        .object({
          title: z.string().min(1, "Title must be at least 1 character long"),
          author: z.string().min(1, "Author must be at least 1 character long"),
          description: z
            .string()
            .min(1, "Description must be at least 1 character long"),
          isbn: z.string().min(1, "ISBN must be at least 1 character long"),
          image: z.string().min(1, "Image must be at least 1 character long"),
        })
        .required()
    )
    .mutation(async ({ input }) => {
      const books = await prisma.books.create({
        data: {
          title: input.title,
          author: input.author,
          description: input.description,
          isbn: input.isbn,
        },
      });

      return await prisma.books.update({
        where: {
          id: books.id,
        },
        data: {
          image: base64toBlob(input.image),
        },
        select: {
          id: true,
          title: true,
          author: true,
          description: true,
          isbn: true,
          image: false,
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
          description: input.description,
          isbn: input.isbn,
        },
        select: {
          id: true,
          title: true,
          author: true,
          description: true,
          isbn: true,
          image: false,
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
          description: true,
          isbn: true,
          image: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return books;
    }),
});
