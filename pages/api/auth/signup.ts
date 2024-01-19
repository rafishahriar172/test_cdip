import { NextApiRequest, NextApiResponse } from "next";
import validator from 'validator'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {firstName} = req.body;
    const errors : string [] = [];
    if (req.method==="POST"){
        const validatorSchema = [
            {
                valid: validator.isLength(firstName,{
                    min:1,
                    max:20
                }),
                errorMessage:"First name is invalid"
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
        
        return res.status(200).json({Hello:"Post..."});
    }   
}