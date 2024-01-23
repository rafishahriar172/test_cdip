import { NextApiRequest, NextApiResponse } from "next";
import validator from 'validator';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {firstName,lastName,email,password,phone,city} = req.body;
    const errors : string [] = [];
    if (req.method==="POST"){
        const validatorSchema = [
            {
                valid: validator.isLength(firstName,{
                    min:1,
                    max:20
                }),
                errorMessage:"First name is invalid"
            },
            {
                valid: validator.isLength(lastName,{
                    min:1,
                    max:20
                }),
                errorMessage:"Last name is invalid"
            },
            {
                valid: validator.isEmail(email),
                   
                errorMessage:"Email name is invalid"
            },
            {
                valid: validator.isMobilePhone(phone),
                errorMessage:"Phone is invalid"
            },
            {
                valid: validator.isLength(city,{
                    min:1,
                    max:20
                }),
                errorMessage:"City name is invalid"
            },
            {
                valid: validator.isStrongPassword(password),
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

        if(userWithEmail){
            return res.status(400).json({errorMessage:"Already existing Email!"})
        }

        const hasPassword = await bcrypt.hash(password,10);

        const user = await prisma.user.create({
            data:{
                first_name:firstName,
                last_name:lastName,
                city:city,
                email:email,
                password:hasPassword,
                phone:phone
            }
        });
        
        return res.status(200).json({Hello: user});
    }   
}