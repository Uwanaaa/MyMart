
export class AuthRepository {

    constructor(private dbClient: any) {}

    async createUser(username: string, email: string, hashedPassword: string) {
        const db = this.dbClient.db('MyMart');
        const usersCollection = db.collection('users');

        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            throw new Error('Username already taken');
        }

        const newUser = {
            username,
            email,
            password: hashedPassword,
        };
        
        await usersCollection.insertOne(newUser);
        return { message: 'Signup successful' };
    }
}