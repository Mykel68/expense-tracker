export interface User {
    _id: string;
    email: string;
    password: string;
}

export interface UserRegistrationData {
    email: string;
    password: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}
