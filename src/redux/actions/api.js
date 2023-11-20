import http from '../../services/NetworkService';

export const authLogin = (data) => {
    return http.post('/admin/login', { ...data });
};
