import React, { createContext, useReducer, useState } from 'react';
import AuthReducer from '../reducer/AuthReducer';
import { useApi } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [userState, dispatch] = useReducer(AuthReducer, {
        signedIn: false,
        error: '',
        user: [],
    });

    const api = useApi();
    const navigate = useNavigate();

    //ver se é cpf ou cnpj pra direcionar
    const [cad, setCad] = useState('');

    //arrumar
    const verifyCad = (cpfCnpj) => {
        setCad(JSON.stringify(cpfCnpj[0]));
        if (cad.length > 12) {
            console.log('entidade');
            return ('entidade')
        }

        else {
            console.log('estudante');
            return ('estudante');
        }
    }

    //setar o signedIn true no localStorage quando entrar
    const signIn = async (cpfCnpj, password) => {

        const data = await api.signIn(cpfCnpj, password);

        if (data.user) {
            localStorage.setItem('signedIn', 'true');
            localStorage.setItem('userId', JSON.stringify(data.user.id));
            dispatch({
                type: 'signIn',
                payload: {
                    user: data.user,
                }
            });
   
            navigate('/estudante');

            return true;
        }
        else {
            dispatch({
                type: 'error',
                payload: 'Usuário ou senha incorretos'
            });
            return false;
        }
    }

    //limpar localStorage e redirecionar para a home
    const signOut = async () => {
        await api.signOut();
        localStorage.clear();
        dispatch({ type: 'signOut' });
        //navigate('Login');

    };

    //verificar se há usuário logado quando carrega
    const tryLocalSignIn = async () => {
        const access = localStorage.getItem('signedIn');

        if (access) {
            const userId = localStorage.getItem('userId');
            const data = await api.getUser(userId);

            dispatch({
                type: 'signIn',
                payload: {
                    user: data,
                }
            });
            //navigate('Home');
        }
        else {
            dispatch({ type: 'signOut' });
            //navigate('Login');
        }
    };

    return (
        <AuthContext.Provider value={{
            userState,
            signIn,
            signOut,
            tryLocalSignIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider }