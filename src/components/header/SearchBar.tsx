import { useFilterContext } from "../../context";

const SearchBar = () => {
    const { filters, setFilter } = useFilterContext();
    const { code, name } = filters;

    return (
        <div className="search-topbar">
            <form onSuspend={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="col-lg-6 mt-1 mb-1">
                        <div className="col-auto search-icon">
                            <input type="text"
                                name="name"
                                value={name}
                                onChange={setFilter}
                                className="form-control"
                                placeholder="search Item" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-1 mb-1">
                        <div className="col-auto">
                            <input type="text"
                                name="code"
                                value={code}
                                onChange={setFilter}
                                className="form-control"
                                placeholder="Short Code" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;