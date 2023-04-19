import type { NextApiRequest, NextApiResponse } from "next/types";
import { Readable, PassThrough } from "stream";
import { prisma } from "~/server/db";
import bufferImage from "buffer-image";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.id || typeof req.query.id != "string") {
    res.status(400).end();
    return;
  }
  const image = await prisma.books
    .findFirstOrThrow({
      where: {
        id: req.query.id,
      },
      select: {
        imageString: true,
      },
    })
    .catch(() => {
      res.status(404).end();
    });
  if (!image || !image.imageString) {
    res.status(404).end();
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  res.send({ image: image.imageString });
}
