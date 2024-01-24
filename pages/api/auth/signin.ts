import { NextApiRequest, NextApiResponse } from "next";
import validator from 'validator';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import * as jose from 'jose';

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method==="POST"){

        const errors : string[]=[];
        const {email,password}=req.body;


        const validatorSchema=[

            {
                valid: validator.isEmail(email),
                errorMessage: "Email is invalid"
            },
            {
                valid: validator.isLength(password,{
                    min:1
                }),
                errorMessage:"Password is invalid"
            }

        ]

        validatorSchema.forEach((check)=>{
            if(!check.valid){
                errors.push(check.errorMessage)
            }
        });

        if(errors.length){
            return res.status(400).json({errorMessage:errors[0]})
        }

        const userWithEmail = await prisma.user.findUnique({
            where:{email}
        })

        if(!userWithEmail){
            return res.status(400).json({errorMessage:"User not found with this email!"})
        }
        
         const secret=new TextEncoder().encode(process.env.JWT_Secret);

        const IsMatch=await bcrypt.compare(password,userWithEmail.password);

        if(IsMatch)
        {
            const alg="HS256";

            const token = await new jose.SignJWT({email : userWithEmail.email})
            .setProtectedHeader({alg})
            .setExpirationTime("1h")
            .sign(secret);

            return res.status(200).json({Message:"Json web token is : " + token})
        }
        else
        {
            return res.status(400).json({errorMessage:"Password is invalid"})
        }

        

    }

}