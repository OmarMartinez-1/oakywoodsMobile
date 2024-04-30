import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { View, Text } from "../atoms/Themed"
import { Product } from "../../constants/types"
import { Link } from "expo-router"


function ProductItem({ heightRes = 260, product }:  { heightRes?: number ,  product: Product }) {
    return (
        <View style={Styles.productItem}>

            <Link href={`/products/${product.id}`} asChild >
            <TouchableOpacity >

                <Image
                    source={product.image}
                    style={[Styles.productImage, { height: heightRes }]}
                />

                <View style={Styles.colors}>
                    <Image
                        source={require('../../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                </View>
                <Text style={Styles.productName}>{product.name}</Text>
            </TouchableOpacity>
                    </Link>
            <Text>From $ {product.price.toFixed(2)}</Text>
        
        </View>
    )
}

const Styles = StyleSheet.create({
    accessoriesCart: {
        padding: 5,
        width: '50%',
        flexShrink: 1,
    },
    productItem: {
        paddingBottom: '10%',
    },
    productImage: {
        flexShrink: 1,
        width: '100%',
        objectFit: 'contain',
        marginBottom: 10,

    },
    colors: {
        flexDirection: "row",
        columnGap: 9,

    },
    imageColors: {
        width: 10,
        height: 10,
        objectFit: 'contain',
        borderRadius: 20,
    },
    productName: {
        fontSize: 20,
        fontWeight: '800',
    },
    touchableArea:{
        flex: 1
    }

})

export default ProductItem
