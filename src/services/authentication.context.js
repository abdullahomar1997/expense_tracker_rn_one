import React, { createContext, useEffect, useState } from 'react';
import { getData, removeData, storeData } from '../utils/LocalStorage';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
    
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(null);

    const handleToken = value => {
        setIsLoading(true);
        if (value === null) removeData();
        else storeData(value);
        setToken(value);
        setIsLoading(false);
    };

    useEffect(() => {
        (async function () {
            setIsLoading(true);
            const val = await getData();
            setToken(val);
            setIsLoading(false);
        })();
    }, []);

    const onLogin = async data => {
        setIsLoading(true);

        // Validation
        if (data.email.trim() == '' || data.password.trim() == '') {
            setErrMsg('All the fields are mandatory');
            setIsLoading(false);
            return;
        }

        const res = await postService('LOGIN_API', '', data);
        if (res.token !== undefined) {
            // setData(initialState);
            setIsLoading(false);
            // handleToken('Bearer '.concat(res.token));
        } else {
            if (res !== 'Network Error') setErrMsg('Invalid credentials');
            else setErrMsg('You are not connected to the internet.');
            setIsLoading(false);
        }
    };

    const onRegister = async data => {
        setIsLoading(true);

        if (validate(data) === false) {
            setIsLoading(false);
            return;
        }

        delete data.confirmPassword;

        const res = await postService('REGISTER_API', '', data);
        if (res.token !== undefined) {
            // setData(initialState);
            setIsLoading(false);
            // navigation.goBack();
        } else {
            if (res !== 'Network Error') setErrMsg('Email alreday exists.');
            else setErrMsg('You are not connected to the internet.');
            setIsLoading(false);
        }
    };

    const validate = data => {
        if (
            data.firstName.trim().length === 0 ||
            data.lastName.trim().length === 0 ||
            data.email.trim().length === 0
        ) {
            setErrMsg('All the fields are mandatory');
            return false;
        }

        //Email
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(data.email) === false) {
            setErrMsg('Incorrect email address');
            return false;
        }

        if (data.password.length < 6) {
            setErrMsg('Password must be of atleast 6 characters');
            return false;
        }
        if (data.password !== data.confirmPassword) {
            setErrMsg('Passwords must match');
            return false;
        }

        return true;
    };

    return (
        <AuthenticationContext.Provider
            value={{
                token,
                onRegister,
                onLogin,
                isLoading,
                handleToken,
                errMsg,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;
