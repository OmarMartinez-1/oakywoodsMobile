import { StyleSheet } from "react-native"
import Card from "./Card"
import { FlatList } from "react-native-gesture-handler"
import { carruselExplorMoreData } from "../../constants/constants"


function CarruselExploreMore() {
    return (
        <>

            <FlatList
                data={carruselExplorMoreData}
                renderItem={({ item, i }: any) => <Card key={i} item={item} />}
                style={styles.carrusel}
                contentContainerStyle={styles.carruselContentContainer}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={346}

            />




        </>
    )
}

const styles = StyleSheet.create({

    carrusel: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    carruselContentContainer: {
        columnGap: 20,
        alignItems: 'flex-start',
    },
})

export default CarruselExploreMore
