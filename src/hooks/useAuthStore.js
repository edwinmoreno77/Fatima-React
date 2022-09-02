import { useDispatch, useSelector } from 'react-redux';
import { fatimaServerApi } from '../api';
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());

        try {
            const { data } = await fatimaServerApi.post('/api/auth/login', { email, password });
            const { token, user } = data;

            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: user.name, uid: user.uid, email: user.email, role: user.role }));

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async ({ email, password, name }) => {
        dispatch(onChecking());
        try {
            const { data } = await fatimaServerApi.post('/api/user', { name, email, password, role: 'USER_ROLE' });
            const { token, user } = data;

            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: user.name, uid: user.uid, email: user.email, role: user.role }));

        } catch (error) {
            dispatch(onLogout(error.response.data?.errors[0].msg || 'Error desconocido'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await fatimaServerApi.get('/api/auth/renew');

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }



    return {
        // * Propiedades
        errorMessage,
        status,
        user,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }

}