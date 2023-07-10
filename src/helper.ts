import { IAuthState } from "./types";

export const getAuth = (): Promise<IAuthState> => {
    return new Promise((res, rej) => {
        const string = localStorage.getItem("authState");
        if (!string || string === undefined || string === null) {
            return rej(null);
        }
        const authState = JSON.parse(string);
        if (authState === null || authState === undefined) {
            return rej(null);
        } else {
            res(authState);
        }
    })
}