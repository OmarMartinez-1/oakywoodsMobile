import { useState } from 'react'
import { View, Text, } from '../atoms/Themed'
import { Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { Product } from '../../constants/types'
import { useCartStore } from '../../service/cartStore'

function CartProduct({ product, onFocusInput, index }: { product: Product & { quantity: number }, onFocusInput: any , index: any}) {
    
    const { addProduct, reduceProduct, setQuantityProduct } = useCartStore()
    
    const [lastValue, setLastValue] = useState("")
    const [valueText, setValueText] = useState<string>(product.quantity.toString())








    return (
        <View style={styles.cartProduct}>
            <View style={ styles.top}>
                <Image
                    style={styles.image}
                    source={product.image}
                />

                <View style={styles.gap}>
                    <View style={styles.namePrice}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Text style={styles.price}>$ {(product.price * product.quantity).toFixed(2)}</Text>
                    </View>

                    {/* <Text >Size: 120x60</Text>
                    <Text >Legs: Black</Text>
                    <Text >Shape: Sharp steep</Text>
                    <Text >Length: 129</Text>
                    <Text >Width: 66</Text>
                    <Text >Foot design: Standard</Text> */}

                </View>


            </View>


            <View style={[styles.directionRow, styles.bottom]}>

                <View style={styles.counter}>
                    <TouchableOpacity style={styles.icons} onPress={() => { reduceProduct(product), setValueText(product.quantity.toString()) }}>
                        <Entypo name='minus' size={20} />
                    </TouchableOpacity>

                    <TextInput style={styles.input}
                        maxLength={2}
                        inputMode='numeric'
                        selectTextOnFocus={true}

                        value={valueText}

                        onFocus={() => {
                            onFocusInput(index)
                            setLastValue(valueText)
                        }}

                        onChange={(e) => {
                            setValueText(e.nativeEvent.text)
                        }}
                        onEndEditing={(e) => {
                            if (e.nativeEvent.text === "") {
                                setValueText(lastValue)
                                setQuantityProduct(product, +lastValue)
                            } else if (+e.nativeEvent.text >= 0) {
                                setValueText(valueText)
                                setQuantityProduct(product, +valueText)
                            }
                        }}

                    />

                    <TouchableOpacity style={styles.icons} onPress={() => { addProduct(product), setValueText(product.quantity.toString()) }}>
                        <Entypo name='plus' size={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() =>{setQuantityProduct(product, 0)}} style={[styles.directionRow, styles.remove]}>
                    <Text style={styles.textRemove}>Remove</Text>
                    <Ionicons name='ios-trash-bin-outline' size={15} style={styles.textRemove} />
                </TouchableOpacity>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        paddingBottom: 16,
        marginBottom: 16,
    },
    directionRow: {
        flexDirection: 'row',
    },
    top: {
        flexDirection: 'row',
        columnGap: 20,
    },
    image: {
        objectFit: 'contain',
        width: 100,
        height: 75,
    },
    gap: {
        flex: 1,
        rowGap: 5,
        
    },
    namePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: '800',
        fontSize: 16,
        width: '70%',
    },
    price: {
        fontWeight: '800',
        fontSize: 16,
        color: '#4500ff'
    },
    bottom: {
        width: '100%',
        height: 31,
        justifyContent: 'space-between',
        marginTop: 15,
    },
    input: {
        textAlign: 'center',
        height: 22,
        flex: 1
    },
    counter: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 10,
        width: 110,
        height: 32,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    remove: {
        alignItems: 'center',
        columnGap: 5,

    },
    icons: {
        height: 20,
    },
    textRemove: {
        fontWeight: '700',
        opacity: 0.5,
    }

})

export default CartProduct
