import { create } from "zustand";
import { Product } from "../constants/types";
import { Products } from "../constants/constants";

type ProductStore = {
    storeProducts: Product[];
    filterProducts: (filteredProducts:number[]) => Product[];
}



export const useProductsStore = create<ProductStore>()((set, get) => ({
    storeProducts: Products,
    filterProducts: (filteredProducts) =>  {
        return get().storeProducts.filter((item) => {
            if (filteredProducts?.includes(item.id)) {
                return item
            }
        })
    },

}))