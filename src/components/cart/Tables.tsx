import { useCartContext } from "../../context"

const Tables = () => {
    const { setActiveTable, cartTables } = useCartContext();

    return (
        <>
            {
                cartTables.map(table => <li
                    onClick={() => {
                        setActiveTable(table);
                        console.log('current active table', table.cart_table_name)
                    }}
                    key={table.id}>
                    <img
                        className="w-50"
                        src="/public/img/dine-table.png"
                        alt="" />
                    {table.cart_table_name}
                </li>)
            }
        </>
    )
}

export default Tables;