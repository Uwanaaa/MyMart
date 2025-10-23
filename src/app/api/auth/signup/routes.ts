import clientPromise from "@/lib/mongodb";
import { NextResponse} from 'next/server';
import bcrypt from 'bcrypt';

export default async function handler(req: Request){
    try{
        const { username,email,password } = await req.json()

        const client = await clientPromise;
        const db = client.db('MyMart');
        const usersCollection = db.collection('users');

        const existingUser = await usersCollection.findOne({ username });

        if(existingUser){
            return NextResponse.json({message: 'Username already taken'}, {status: 409});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username,
            email,
            password: hashedPassword,
        };

        await usersCollection.insertOne(newUser);

        return NextResponse.json({message: 'Signup successful'}, {status: 201});    

    }
    catch(error){
        console.log('Error in signup route', error);
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }
}
