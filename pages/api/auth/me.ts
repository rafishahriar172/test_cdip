import { NextApiRequest, NextApiResponse } from "next";
import jwt, { Secret } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).json({ errorMessage: "Authorization header is missing" });
    }

    try {
      const jwtSecret = Buffer.from(process.env.JWT_Secret || '', 'base64') as Secret;
      const decodedToken = jwt.verify(token, jwtSecret);
      
      return res.status(200).json({decodeToken: decodedToken});

    } catch (error) {
      return res.status(401).json({ errorMessage: error });
    }
  } else {
    return res.status(405).json({ errorMessage: "Method not allowed" });
  }
}
