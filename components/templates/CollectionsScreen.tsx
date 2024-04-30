import { Image, StyleSheet } from "react-native"
import { View, Text } from "../atoms/Themed"
import { Ionicons } from "@expo/vector-icons"
import ProductItem from "../molecules/ProductItem"
import Button from "../atoms/Button"
import { heightCardAccessories } from "../../constants/constants"
import CardsAndSamplesKit from "../molecules/CardsAndSamplesKit"
import { usePathname } from "expo-router/src/hooks"
import { useProductsStore } from "../../service/productsStore"


function CollectionsScreen({ dataScreens }: any) {
    
    const {
        topImage,
        title,
        titleDescription,
        textDescription,
        productsIds,
        accessories,
        titleAboutProducts,
        textAboutProducts,
        
    } = dataScreens
    
    const onPath = usePathname() === "/collections/woodenDesks"
    const AccessoriesShowed = accessories.length

    const {filterProducts }= useProductsStore()

    const productsFiltered = filterProducts(productsIds)

    

    const accessoriesFiltered = filterProducts(accessories)


    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    source={topImage}
                    style={styles.image}
                />
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.titleDescription}>
                    {titleDescription}
                </Text>
                <Text>{textDescription}</Text>
            </View>

            <View style={styles.breadcrumbs}>
                <Text>
                    Products <Ionicons name="arrow-forward-outline" /> {title}
                </Text>
            </View>


            <View style={styles.wrapperWide}>

                {onPath && <CardsAndSamplesKit productsFiltered={productsFiltered} />}

                <View style={styles.accessories}>

                    {
                        accessoriesFiltered.map((accessorie: any, index: any) => (
                            <View key={index} style={styles.accessoriesCart}>
                                <ProductItem heightRes={heightCardAccessories} product={accessorie} />
                            </View>
                        ))
                    }

                </View>
                <Text style={styles.showing} >Showing {AccessoriesShowed} of {AccessoriesShowed}</Text>



                <View style={styles.descriptionText} >

                    <Text style={styles.titleDescription}>{titleAboutProducts}</Text>
                    <Text>{textAboutProducts}</Text>
                </View>

                <Button title='Read More' style={styles.buttonBuyKit} />

            </View>


        </>
    )
}

const styles = StyleSheet.create({
    showCase: {
        backgroundColor: 'blue'

    },
    imageContainer: {
        alignContent: 'center',
        marginHorizontal: 20,
        rowGap: 20,

    },
    title: {
        fontWeight: '800',
        fontSize: 32,
    },
    image: {
        width: '100%',
        height: 260,
        objectFit: 'contain',
    },
    description: {
        backgroundColor: '#e5e5e5',
        textAlign: 'center',
        padding: 25,
        rowGap: 10,
    },
    titleDescription: {
        fontWeight: '800',
        fontSize: 22,
    },
    breadcrumbs: {
        paddingHorizontal: 25,
        paddingTop: 20,
    },
    wrapperWide: {
        paddingHorizontal: 20,
    },
    buttonBuyKit: {
        alignSelf: 'center',
        borderRadius: 38,
        paddingVertical: 8,
    },

    accessoriesCart: {
        padding: 5,
        width: '50%',
        flexShrink: 1,
    },
    accessories: {

        rowGap: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    showing: {
        textAlign: 'center',
        marginBottom: 25,
    },
    descriptionText: {
        paddingVertical: 20,
        marginBottom: 40,
        rowGap: 20,
    }
})

export default CollectionsScreen
