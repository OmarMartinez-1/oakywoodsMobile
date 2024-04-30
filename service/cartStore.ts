import { create } from "zustand";
import { Product } from "../constants/types";



type CartStore = {
    cartProducts: Array<Product & { quantity: number }>;
    items: number;
    setQuantityProduct: (product: Product, newQuantity: number) => void;
    addProduct: (product: Product) => void;
    reduceProduct: (product: Product) => void;

}

export const useCartStore = create<CartStore>()((set) => ({
    cartProducts: [
        {
            id: 37,
            name: "MagSafe iPhone Stand ffff",
            price: 150,
            image: { uri: "https://oakywood.shop/cdn/shop/products/220812_Oakywood_D5_0067.jpg?crop=center&height=810&v=1669328101&width=1080" },
            quantity: 1,
        },
        {
            id: 38,
            name: "MagSafe iPhone Stand",
            price: 120,
            image: { uri: "https://oakywood.shop/cdn/shop/products/220812_Oakywood_D5_0067.jpg?crop=center&height=810&v=1669328101&width=1080" },
            quantity: 1,
        },
        {
            id: 34,
            name: "MagSafe iPhone Stand",
            price: 120,
            image: { uri: "https://oakywood.shop/cdn/shop/products/220812_Oakywood_D5_0067.jpg?crop=center&height=810&v=1669328101&width=1080" },
            quantity: 1,
        },
        {
            id: 32,
            name: "MagSafe iPhone Stand",
            price: 120,
            image: { uri: "https://oakywood.shop/cdn/shop/products/220812_Oakywood_D5_0067.jpg?crop=center&height=810&v=1669328101&width=1080" },
            quantity: 1,
        },
    ],
    items: 4,

    setQuantityProduct: (product, newQuantity) => set((state) => {

        return {
            cartProducts: state.cartProducts.map((p) => {

                if (p.id === product.id) {

                    console.log('storez--- ', newQuantity, typeof newQuantity)

                    if (newQuantity === 0) {
                        state.items -= p.quantity
                    } else if (p.quantity > newQuantity) {
                        state.items -= (p.quantity - newQuantity)
                    } else if (p.quantity < newQuantity) {
                        state.items += (newQuantity - p.quantity)
                    }

                    return { ...p, quantity: newQuantity }

                } else {
                    return p
                }

            }).filter((p) => p.quantity > 0)
        }


    }),

    addProduct: (product) => set((state) => {

        state.items++

        const hasProduct = state.cartProducts.find((p) => product.id === p.id)

        if (hasProduct) {

            return {

                cartProducts: state.cartProducts.map((p) => {
                    if (product.id === p.id) {
                        return { ...p, quantity: ++p.quantity }
                    } else {
                        return p
                    }
                })

            }
        } else {
            return {
                cartProducts: [...state.cartProducts, { ...product, quantity: 1 }]
            }
        }
        


    }
    ),

    reduceProduct: (product) => set((state) => {
        state.items--

        return {
            cartProducts: state.cartProducts.map((p) => {
                if (product.id === p.id) {
                    return { ...p, quantity: --p.quantity }
                } else {
                    return p
                }
            }).filter((p) => p.quantity > 0)
        }
    }),

}))