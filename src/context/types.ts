import { ICart, ICategory, IProduct, ITable } from "../types"

export interface ICartContextProps {
    cartTables: ITable[]
    setCartTables: React.Dispatch<React.SetStateAction<ITable[]>>
    cart: ICart | null
    setCart: React.Dispatch<React.SetStateAction<ICart | null>>
    activeCart: number
    setActiveCart: React.Dispatch<React.SetStateAction<number>>
    addToCart: (table_id: number, product_id: number, product_price: number, name: string) => void
    updateCustomerDetails: (table_id: number, cutomer_first_name: string, cutomer_last_name: string, customer_mobile: string) => void
    showOrderForm: boolean
    setShowOrderForm: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IAppContextProps {
    categories: ICategory[]
    setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    // tables: ITable[]
    // setTables: React.Dispatch<React.SetStateAction<ITable[]>>
}

export interface IFilterContextProps {
    categories: ICategory[]
    setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export interface IFilterState {
    isLoading: boolean
    isError: boolean
    categories: ICategory[],
    filtered_categories: ICategory[],
    products: IProduct[],
    filtered_products: IProduct[],
    filters: {
        name: string,
        code: string
    },
    setFilter: (event: React.ChangeEvent<HTMLInputElement>) => void
    setFilterByCategory: (id: number) => void
}