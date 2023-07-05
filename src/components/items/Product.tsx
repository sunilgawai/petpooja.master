import { Link } from 'react-router-dom';
import { IProduct } from '../../types';
import { useCartContext } from '../../context';
import { FC } from "react";

type ProductProps = {
    product: IProduct;
}
const Product: FC<ProductProps> = ({ product }) => {
    const { id, ItemRate_ID: { Item_Rate }, Item_Name } = product;
    const { addToCart } = useCartContext();

    return (
        <li>
            <Link
                onClick={(e) => {
                    e.preventDefault();
                    // handleAddToCart(id, Item_Rate, Item_Name)
                    addToCart(id, Item_Rate, Item_Name)
                    // console.log(id, Item_Name, Item_Rate)
                }}
                to="#"
                className="active">
                {product.Item_Name}
            </Link>
        </li>
    )
}

export default Product;