// src/types/express.d.ts (or any folder where you define your types)

declare namespace Express {
    export interface Request {
        userId?: string;  // Add userId property
    }
}
