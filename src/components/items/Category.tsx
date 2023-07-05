import { FC } from "react";
import { ICategory } from "../../types";
import { useFilterContext } from "../../context";

type CategoryProps = {
    category: ICategory;
}
const Category: FC<CategoryProps> = ({ category }) => {
    const { setFilterByCategory } = useFilterContext();
    return (
        <button
            onClick={()=> setFilterByCategory(category.id)}
            className="nav-link active px-2 py-2" id="nav-cakes-tab"
            data-bs-toggle="tab" data-bs-target="#nav-cakes"
            type="button" role="tab" aria-selected="true">
            {category.Category_Name}
        </button>
    )
}

export default Category; 