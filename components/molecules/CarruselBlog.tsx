import { View, Text } from '../atoms/Themed'
import { StyleSheet, Image, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { blog } from '../../constants/constants'


function CarruselBlog() {
    return (

        <>
            <Text style={styles.titleExploreMore}>Blog</Text>
            <FlatList
                data={blog}
                renderItem={({ item, i }: any) => (
                    <View key={i} style={styles.card}>
                        <Image
                            source={item.image}
                            style={styles.imageBlog}
                        />
                        <View style={styles.descriptionBlog} >

                            <Text style={styles.descriptionTitle}>{item.title}</Text>
                            <Text>{item.text}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    </View>
                )}
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
    titleExploreMore: {
        marginLeft: 20,
        marginVertical: 20,
        fontWeight: '800',
        fontSize: 22,

    },
    carrusel: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    carruselContentContainer: {
        columnGap: 20,
        alignItems: 'flex-start',
    },
    card: {
        width: 326,
        height: 518,
    },
    imageBlog: {
        width: '100%',
        height: 235,
        objectFit: 'contain',
    },
    descriptionBlog: {
        paddingVertical: 20,
        marginBottom: 50,
        rowGap: 20,
    },
    descriptionTitle: {
        fontWeight: '800',
        fontSize: 22,
    },

})

export default CarruselBlog
