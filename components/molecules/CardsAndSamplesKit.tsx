import { Image, StyleSheet } from "react-native"
import { Text, View } from "../atoms/Themed"
import ProductItem from "./ProductItem"
import Button from "../atoms/Button"
import { Products } from "../../constants/constants"


function CardsAndSamplesKit({ productsFiltered }: any) {

   

    return (
        <>

            {
                productsFiltered?.map((product: any, index: any) => <ProductItem key={index} product={product} />)
            }






            <View style={styles.textBlock} >

                <Text style={styles.titleDescription}>Still not sure?</Text>
                <Text>
                    That’s OK! We embrace conscious shopping. Order Samples Kit, familiarize yourself with our high-quality materials, and then make a responsible purchasing decision.
                </Text>

                <Button title='Buy Samples Kit' />

                <Image
                    source={require('../../assets/images/samplesKit.webp')}
                    style={styles.textBlocksImage}
                />

            </View>


            <Text style={styles.titleDescription}>Accessories</Text>


        </>
    )
}

const styles = StyleSheet.create({
    textBlock: {
        backgroundColor: '#e5e5e5',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 40,
        rowGap: 20,
    },
    titleDescription: {
        fontWeight: '800',
        fontSize: 22,
    },
    textBlocksImage: {
        width: '100%',
        height: 250,
        objectFit: 'contain',
    },
})

export default CardsAndSamplesKit
