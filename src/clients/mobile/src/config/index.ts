const API_HOST = "http://192.168.178.20:3000/api/";
const AUTH_API_HOST = "http://192.168.178.20:8888/api/auth/";

const config = {
    api: {
        host: API_HOST,
        timeout: 20000,
        profileEndpoints: {
            get: "/profiles/",
        },
    },
    auth: {
        host: AUTH_API_HOST,
        registerURI: "/register",
        basicLoginURI: "/login",
        google: {
            iosClientId: "193844320749-m7q9j7b6i5nq3sfeetemmhdq3ftuom32.apps.googleusercontent.com",
            androidClientId: "193844320749-4g8226ebu80nhe5q4s6j3kfvfgs7ur5j.apps.googleusercontent.com",
            androidStandaloneAppClientId: "193844320749-52o6lb4aspngsh76unn2mm6e5kfb48i9.apps.googleusercontent.com",
            iosStandaloneAppClientId: undefined,
            scopes: ['profile', 'email'],
            c19TokenEndpoint: "/login/google-access-token",
        },
        timeout: 20000,
        verifyJWTEndpoint: "/jwt/verify"
    }
};

export {
    API_HOST,
    AUTH_API_HOST,
}

export default config;
