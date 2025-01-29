"use client";

import { useEffect } from 'react';
import isSiggedIn from '@/actions/isSignIn';
import { useAuthStore } from '@/store/auth';

export const useAuthInit = () => {
    const { setUser } = useAuthStore();

    useEffect(() => {
        const initializeAuth = async () => {
            const user = await isSiggedIn();

            if (user && user !== true) {
                // If the user is not `true` or `false`, it's the payload object
                // setUserEmail(user.email);
                // setUserId(user.userId);
                // setUserName(user.name);

                setUser(user);
            } else {
                console.warn('No valid user session found.');
                // Optionally, redirect or handle unauthenticated state
            }
        };

        initializeAuth();
    }, [setUser]);
};