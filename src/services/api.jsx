import axios from "axios"

const URL = "https://f3417f8d229cce.lhr.life";
const rout = "/api/v1"
const API_URL = `${URL}${rout}`

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const getTeamSizes = async () => {
    return await api.get(`/team-sizes`);
}

export const getUserActivities = async () => {
    return await api.get(`/user-activities`);
}

export const getUserRoles = async () => {
    return await api.get(`/user-roles`);
}

export const signUp = async (userData) => {
    return await api.post(`/auth/sign-up`, userData);
}

export const signIn = async (userData) => {
    return await api.post(`/auth/sign-in`, userData);
}