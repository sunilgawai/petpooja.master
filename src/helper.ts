export const storeCart = (product_id: number, product_price: number, name: string) => {
    // const _activeTable: ITable = structuredClone(activeTable);
    // // If Table is empty.
    // if (!_activeTable?.Cart) {
    //     _activeTable.Cart = {
    //         Cart_items: [
    //             {
    //                 name: name,
    //                 itemmaster_id: product_id,
    //                 quantity: 1
    //             }
    //         ],
    //         total_price: product_price
    //     }
    // }

    // if (_activeTable?.Cart) {
    //     // Check product in items_list.
    //     const index = _activeTable?.Cart?.Cart_items.findIndex((item: ICartItem) => item.itemmaster_id === product_id);
    //     if (index !== -1) {
    //         _activeTable.Cart.Cart_items[index].quantity += 1;
    //         _activeTable.Cart.total_price += product_price;
    //     } else {
    //         _activeTable.Cart.Cart_items.push({
    //             name: name,
    //             itemmaster_id: product_id,
    //             quantity: 1
    //         });
    //         _activeTable.Cart.total_price += product_price;
    //     }
    // }
    // console.log("_actove", _activeTable)
    // setActiveTable(_activeTable);

    // setCartTables((prev_tables) => {
    //     return prev_tables.map((table: ITable) => {
    //         let updatedCartItems: ICartItem[] = [];
    //         if (table.id === activeTable?.id) {
    //             // console.log("storing to in table", activeTable?.id)
    //             let isItemUpdated = false;
    //             if (table.Cart?.Cart_items) {
    //                 updatedCartItems = table.Cart?.Cart_items?.map((item) => {
    //                     if (item.itemmaster_id === product_id) {
    //                         isItemUpdated = true;
    //                         return {
    //                             ...item,
    //                             quantity: item.quantity + 1,
    //                         };
    //                     }
    //                     return item;
    //                 });
    //             }

    //             if (!isItemUpdated) {
    //                 updatedCartItems.push({
    //                     itemmaster_id: product_id,
    //                     quantity: 1,
    //                     name: name,
    //                     product_price: product_price
    //                 });
    //             }

    //             return {
    //                 ...table,
    //                 Cart: {
    //                     ...table.Cart,
    //                     Cart_items: updatedCartItems,
    //                     total_price: product_price
    //                 },
    //             };
    //         }
    //         return table;
    //     });
    // });

}