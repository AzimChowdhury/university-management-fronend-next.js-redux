import LoginPage from '@/components/login/login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'university-login'
}

const Login = () => {
    return (
        <div>
            <LoginPage />
        </div>
    );
};

export default Login;