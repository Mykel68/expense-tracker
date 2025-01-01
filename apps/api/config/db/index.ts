import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import * as schema from './schema';


dotenv.config();

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in environment variables');
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
// export const db = drizzle(pool, { schema });

(async () => {
    try {
        await pool.query('SELECT 1');
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
})();


// export default {
//     out: './migrations',
//     schema: './schema', 
//     driver: 'pg',
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL || '',
//     },
// };




