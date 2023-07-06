import { useCartContext } from "../../context"

const Tables = () => {
    const { setActiveTable, cartTables } = useCartContext();

    return (
        <>
            {
                cartTables.map(table => <li
                    onClick={() => {
                        setActiveTable(table);
                        console.log('current active table', table?.Cart)
                    }}
                    key={table.id}>
                    <img
                        className="w-50"
                        src="assets/dine-table.png"
                        alt="" />
                    {table.id   }
                </li>)
            }
        </>
    )
}

export default Tables;