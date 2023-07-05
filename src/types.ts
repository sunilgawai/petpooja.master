
export interface IOrder {
    id: number;
    order_id: string;
    Shop_Code: string;
    customer_first_name: string;
    customer_last_name: string;
    customer_email: null;
    customer_mobile: string;
    date_purchased: null;
    order_price: null;
    payment_method: PaymentMethod;
    payment_status: string;
    order_status: string;
    createdAt: string;
    updatedAt: string;
    salesman_id: null;
    order_items: IOrderItem[];
}

export interface IOrderItem {
    Shop_Code: string;
    id: number;
    order_id: number;
    item_id: number;
    item_quantity: number;
    products_name: null;
    products_image: null;
    products_unit_price: null;
    products_totalPrice: null;
    createdAt: string;
    updatedAt: string;
}

export enum PaymentMethod {
    Card = "CARD",
    Cash = "CASH",
    Due = "DUE",
    Other = "OTHER",
}


export interface IOrderForm {
    shop_code: string;
    customer_first_name: string;
    customer_last_name: string;
    customer_mobile: string;
    order_price: string;
    payment_method: string;
    payment_status: string;
    order_items: ICartItem[];
}

export interface ITable {
    id: number;
    cart_table_id: string;
    cart_table_name: string;
    Cart: ICart;
}

export interface ICart {
    id?: number;
    customer_first_name?: string;
    customer_last_name?: string;
    customer_mobile?: string;
    payment_status?: string;
    payment_method?: string;
    total_price: number;
    cart_table_id?: number;
    Cart_items: ICartItem[];
}

export interface ICartItem {
    id?: number;
    cart_id?: number;
    itemmaster_id: number;
    product_price?: number
    quantity: number;
    name: string
}

export interface Categories {
    categories: ICategory[];
}

export interface ICategory {
    Shop_Code: string;
    id: number;
    Category_Id: number;
    Category_Name: string;
    Category_Discontinued: boolean;
    Category_Code: string;
    IsSpecial: string;
    Chapter_ID: number;
    CategoryGroup_ID: number;
    Sort_Index: number;
    Category_HSNCode: null | string;
    Series: null | string;
    BusinessType_ID: string;
    createdAt: string;
    updatedAt: string;
}

// Generated by https://quicktype.io

// Generated by https://quicktype.io

export interface IProduct {
    Shop_Code: string;
    id: number;
    Item_Id: number;
    Item_Code: string;
    tbl_categorymaster_id: number;
    Item_Name: string;
    Item_Description: null;
    Item_UOM: string;
    tbl_srate_id: number;
    Item_Location: null;
    Item_Manufacturer: null;
    Item_OrderPlaceTime: null;
    Item_DeliverySchedule: null;
    Item_Egg: string;
    Item_Veg: null;
    Item_Expiry: number;
    Item_MaxOrderLevel: number;
    Item_MinOrderLevel: number;
    Item_ReorderLevel: number;
    Item_MOQ: null;
    Increment_Factor_For_additional_Qty: number;
    Item_FlavourId: null;
    Item_Discontinued: boolean;
    Item_Favourite: null;
    Item_FixWeight: number;
    Item_DeliverySchedule2: string;
    Item_DeliverySchedule9: string;
    Item_DeliveryDays: string;
    Item_Falvours2: string;
    Item_Flavours9: string;
    Item_MinQty: number;
    Item_Image: null;
    Item_IsMinQtyMandatory: boolean;
    Item_IsShapeRequired: boolean;
    Item_Shapes: string;
    Item_ShortName: string;
    Item_Type: string;
    Item_IsSpecial: string;
    Item_UnitID: number;
    Item_ChapterID: number;
    Item_TaxID: number;
    Item_FreightRatePercentage: number;
    Item_MaxWeight: null;
    Item_IsRemarkRequired: boolean;
    Item_PackagingTypeID: number;
    Item_Large: boolean;
    Item_IsExcisable: boolean;
    Item_LeadTime: number;
    IsAvailableForUrgentOrder: boolean;
    CalculateExciseOnMRP: boolean;
    Rack_ID: null;
    ItemsPerTray: number;
    NoOfDaysToManufacture: number;
    Station_ID: number;
    Item_OrderTypes: string;
    DiscountPercentage: number;
    MarginPercentage: number;
    Item_EANCode: string;
    AllowRateEditing: boolean;
    AllowNegativeStock: boolean;
    Item_HSNCode: string;
    NoOfPieces: number;
    ProductType: string;
    IsAssemblyItem: boolean;
    UrgentOrderShapes: null;
    UrgentOrderFlavours: null;
    IsItemReturnable: null;
    createdAt: string;
    updatedAt: string;
    ItemRate_ID: ItemRateID;
    Item_CategoryId: ItemCategoryID;
}

export interface ItemRateID {
    Shop_Code: string;
    id: number;
    Rate_ID: number;
    Item_Code: string;
    Item_Rate: number;
    Rate_IsEffective: boolean;
    Rate_EffectiveFrom: string;
    Rate_EffectiveTo: string;
    Item_BillingRate: number;
    Shape_ID: number;
    createdAt: string;
    updatedAt: string;
}

export interface ItemCategoryID {
    Shop_Code: string;
    id: number;
    Category_Id: number;
    Category_Name: string;
    Category_Discontinued: boolean;
    Category_Code: string;
    IsSpecial: string;
    Chapter_ID: number;
    CategoryGroup_ID: number;
    Sort_Index: number;
    Category_HSNCode: string;
    Series: string;
    BusinessType_ID: string;
    createdAt: string;
    updatedAt: string;
}



