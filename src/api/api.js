import * as axios from "axios";

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';
const API_KEY = '1fd88349-5aac-4516-be07-d66b2b1326e4';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, count = 10, friend = null) {
        return axiosInstance.get(`/users?page=${currentPage}&count=${count}&friend=${friend}`)
            .then(responce => responce.data);
    },
    isUserFollowed(userId) {
        return axiosInstance.get(`/follow/${userId}`)
            .then(responce => responce.data);
    },
    unfollowUser(userId) {
        return axiosInstance.delete(`/follow/${userId}`).then(responce => responce.data);
    },
    followUser(userId) {
        return axiosInstance.post(`/follow/${userId}`).then(responce => responce.data);
    },

}

export const authAPI = {
    authMe() {
        return axiosInstance.get(`/auth/me`)
            .then(responce => responce.data);
    },
    login(email, password, rememberMe=false, captcha=false) {
        return axiosInstance.post(`/auth/login`,
            {
                email: email,
                password: password,
                rememberMe: rememberMe,
                captcha: captcha
            })
            .then(responce => responce.data);
    },
    logout() {
        return axiosInstance.delete(`/auth/login`)
            .then(responce => responce.data);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`/profile/${userId}`)
            .then(responce => responce.data);
    },
    getStatus(userId) {
        return axiosInstance.get(`/profile/status/${userId}`)
            .then(responce => responce.data);
    },
    putStatus(status) {
        return axiosInstance.put(`/profile/status`, { status: status })
            .then(responce => responce.data);
    }

}