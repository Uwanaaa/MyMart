import clientPromise from "@/lib/mongodb";
import { NextResponse} from 'next/server';
import bcrypt from 'bcrypt';


export default async function handler(req: Request){
    try{
         const { username,password } = await req.json()
         const client = await clientPromise;

         const db = client.db('MyMart');
         const usersCollection = db.collection('users');
         

        const existingUser = await usersCollection.findOne({ username });

        if(!existingUser){
            return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
         }

         const isValid = await bcrypt.compare(password, existingUser.password);

         if(!isValid){
            return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
         }

         return NextResponse.json({message: 'Login successful'}, {status: 200});
    }
    catch(error){
        console.log('Error in signup route', error);
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }
}