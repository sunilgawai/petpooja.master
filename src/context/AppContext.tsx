import { createContext, useState, useEffect, ReactNode } from "react";
import { IAppContextProps } from "./types";
import { ICategory, IProduct } from "../types";
import ApiService from "../services/ApiService";
import { AxiosResponse } from "axios";

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        ApiService.getProducts()
            .then((response: AxiosResponse) => setProducts(response.data))
            .catch(err => console.error(err));

        ApiService.getCategories()
            .then(response => setCategories(response.data))
            .catch(err => console.error(err));

    }, [])

    return <AppContext.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
    }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppContextProvider };