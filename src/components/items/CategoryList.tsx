import { useFilterContext } from "../../context";
import Category from "./Category";

const CategoryList = () => {
    const { filtered_categories } = useFilterContext();

    return (
        <nav style={{ minWidth: '200px' }}>
            <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">

                {
                    filtered_categories
                        .map(category => <Category
                            category={category}
                            key={category.Category_Id} />)
                }
                {/* <button className="nav-link active" id="nav-cakes-tab" data-bs-toggle="tab" data-bs-target="#nav-cakes" type="button" role="tab" aria-selected="true">Cakes</button>
                <button className="nav-link" id="nav-pastries-tab" data-bs-toggle="tab" data-bs-target="#nav-pastries" type="button" role="tab" aria-selected="false">Pastries</button>
                <button className="nav-link" id="nav-cookies-tab" data-bs-toggle="tab" data-bs-target="#nav-cookies" type="button" role="tab" aria-selected="false">Cookies</button>
                <button className="nav-link" id="nav-kharis-tab" data-bs-toggle="tab" data-bs-target="#nav-kharis" type="button" role="tab" aria-selected="false">Kharis (Container Pack)</button>
                <button className="nav-link" id="nav-toast-tab" data-bs-toggle="tab" data-bs-target="#nav-toast" type="button" role="tab" aria-selected="false">Toast (Container Pack)</button>
                <button className="nav-link" id="nav-misc-tab" data-bs-toggle="tab" data-bs-target="#nav-misc" type="button" role="tab" aria-selected="false">Misc (Container Pack)</button>
                <button className="nav-link" id="nav-breads-tab" data-bs-toggle="tab" data-bs-target="#nav-breads" type="button" role="tab" aria-selected="false">Breads</button>
                <button className="nav-link" id="nav-special-brownies-tab" data-bs-toggle="tab" data-bs-target="#nav-special-brownies" type="button" role="tab" aria-selected="false">Special Brownies</button>
                <button className="nav-link" id="nav-regular-cake-tab" data-bs-toggle="tab" data-bs-target="#nav-regular-cake" type="button" role="tab" aria-selected="false">Regular Bar Cakes 200G</button>
                <button className="nav-link" id="nav-puffs-tab" data-bs-toggle="tab" data-bs-target="#nav-puffs" type="button" role="tab" aria-selected="false">Puffs</button>
                <button className="nav-link" id="nav-rolls-tab" data-bs-toggle="tab" data-bs-target="#nav-rolls" type="button" role="tab" aria-selected="false">Rolls</button>
                <button className="nav-link" id="nav-sandwicha-tab" data-bs-toggle="tab" data-bs-target="#nav-sandwicha" type="button" role="tab" aria-selected="false">sandwicha</button>
                <button className="nav-link" id="nav-burger-tab" data-bs-toggle="tab" data-bs-target="#nav-burger" type="button" role="tab" aria-selected="false">Burger</button> */}
            </div>
        </nav>
    )
}

export default CategoryList;