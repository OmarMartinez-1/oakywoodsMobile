import { Ionicons } from "@expo/vector-icons"
import { View, Text } from "../atoms/Themed"
import { TouchableOpacity, StyleSheet, FlatList, } from "react-native"
import { Link, router } from "expo-router"
import Button from "../atoms/Button"
import CartProduct from "../molecules/CartProduct"
import { useCartStore } from "../../service/cartStore"
import {  useRef } from "react"

function ModalCart() {

    const { cartProducts, } = useCartStore()


    const flatListRef = useRef<null | any>(null)

    function onFocusInput(indexItem: number) {
        if (flatListRef) {
            flatListRef.current.scrollToIndex({ index: indexItem , animated: false})
        }
    }

    let billProducts: number = cartProducts.length > 0 ? cartProducts.reduce((acumulator, currentValue) => acumulator + (currentValue.price * currentValue.quantity), 0) : 0

    


    return (
        <View style={styles.modal}>

            <View style={styles.directionRow}>
                <Text style={styles.title}>Your cart</Text>
                <TouchableOpacity onPress={router.back}><Ionicons name="ios-close-outline" size={32} /></TouchableOpacity>
            </View>

            <FlatList
                contentContainerStyle={styles.main}
                ref={flatListRef}
                data={cartProducts}
                renderItem={({ item, index }) => <CartProduct index={index} onFocusInput={onFocusInput} key={item.id} product={item} />}
                ListEmptyComponent={<Text style={styles.cartEmpty}>Your cart is currently empty. Continue browsing</Text>}
                showsVerticalScrollIndicator={false}
            />



            <View style={styles.toCheckout}>
                <View style={styles.directionRow}>
                    <Text style={styles.label}>Subtotal</Text>
                    <Text style={styles.total}>$ {billProducts.toFixed(2)}</Text>
                </View>
                <View style={styles.directionRow}>
                    <Text style={styles.label}>Shipping</Text>
                    <Text style={styles.total}>Shipping & taxes calculated at checkout</Text>
                </View>
                <Link href='/checkouts/cn' asChild>

                <Button title='Checkout' style={styles.button} />
                </Link>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',

    },
    directionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',

    },
    cartEmpty: {
        paddingTop: 14,
    },
    toCheckout: {
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
    },
    label: {
        color: '#999999',
        fontWeight: '700',
        fontSize: 16
    },
    total: {
        fontWeight: '800',
        fontSize: 16
    },
    button: {
        width: '100%',
        paddingVertical: 8,
        marginTop: 30,
    },
    main: {
        paddingBottom: 400,
    }
})


export default ModalCart
