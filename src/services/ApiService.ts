import axios, { AxiosResponse } from "axios";
import { ITable } from "../types";

class ApiService {
    static apiServer = axios.create({
        baseURL: "http://localhost:4000",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authState")}`
        },
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
            this.apiServer.get('/api/cart', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('authState')} `
                }
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static setCart = (table: ITable): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.put('/api/cart', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('authState')} `
                },
                data: {
                    table
                }
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static getProducts = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.post('/api/products', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('authState')} `
                }
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static getCategories = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.post('/api/categories', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('authState')} `
                }
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static getOrders = (): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get('/api/order', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'applications/json',
                    Authorization: `Bearer ${localStorage.getItem('authState')} `
                }
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    static viewOrder = (id: number): Promise<AxiosResponse<any, any>> => {
        return new Promise((resolve, reject) => {
            this.apiServer.get(`/ api / order / ${id} `, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'applications/json',
                    Authorization: `Bearer ${localStorage.getItem('authState')} `
                }
            }).then((response) => {
                return resolve(response);
            }).catch((err) => {
                return reject(err)
            })
        })
    }
}

export default ApiService;