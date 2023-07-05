import { createContext, useState, useEffect, ReactNode } from "react";
import { IAppContextProps } from "./types";
import { ICategory, IProduct } from "../types";
import ApiService from "../services/ApiService";

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
            .then(response => response.json())
            .then(products => setProducts(products))
            .catch(err => console.error(err));

        fetch('http://localhost:4000/api/categories')
            .then(response => response.json())
            .then(categories => setCategories(categories))
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