import axios from "axios";

// eslint-disable-next-line
const api = axios.create({
    baseURL: process.env.REACT_API
});

export const useApi = () => ({

    //se for usar token
    /*     const validateToken = async (token) => {
            const response = await api.post('/validate', { token });
            return response.data;
        }; */

    signIn: async (cadastro, password) => {
        //dados mockup
        return {
            user: { id: 3, level: 2, name: 'João', cadastro: '11111111111' },
        };
        //dados de busca na api
        /*  const response = await api.post('/signin', { cadastro, password });
         return response.data; */
    },

    signOut: async () => {
        //dados mockup
        return { status: true };

        //dados busca api
        /*     const response = await api.post('/signout');
            return response.data; */
    },

    getUser: async (id) => {
        //dados mockup
        return {
            user: { id: 3, level: 2, name: 'João', cadastro: '11111111111' },
        };

        //dados busca api
        /*     const response = await api.get('/user', { id });
            return response.data; */
    }

});