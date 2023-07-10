import axios, { AxiosResponse } from "axios";
import { ITable } from "../types";

class ApiService {
    static apiServer = axios.create({
        baseURL: "http://localhost:4000",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        withCredentials: true
    });

    static login = ({ username, password }:
        { username: string, password: string })
        : Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.post("/api/auth/login", {
                username,
                password
            }).then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            })
        })
    }

    static getCart = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get('/api/cart').then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static setCart = (table: ITable): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.post('/api/cart', {
                table
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static deleteFromCart = (id: number): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.delete(`/api/cart/item/${id}`).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static getProducts = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get('/api/products').then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static getCategories = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get('/api/categories').then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static getOrders = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get('/api/order').then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static viewOrder = (id: number): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get(`/api/order/${id} `).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }
}

export default ApiService;