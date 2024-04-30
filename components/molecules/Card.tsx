import Button from "../atoms/Button"
import { View, Text } from "../atoms/Themed"
import { StyleSheet, Image } from 'react-native'


function Card({ item }: any) {

    return (
        <View style={Styles.card}>
            <View style={Styles.imageContainer}>
            <Image
                source={item.image}
                style={Styles.image}
            />

            </View>
            <View style={Styles.description} >
                <View style={Styles.titleAndText}>
                    <Text style={Styles.descriptionTitle}>{item.title}</Text>
                    <Text>{item.text}</Text>
                </View>

               

                <Button title={item.buttonTitle} />

            </View>

        </ View>
    )
}

const Styles = StyleSheet.create({
    card: {
        backgroundColor: '#e5e5e5',
        width: 326,
        height: 518,
    },
    imageContainer:{
        height: '45%',
        width: '100%'

    },
    image: {
        flex: 1,
    },
    description: {
        height: '55%',

        padding: 20,
        rowGap: 20,
        backgroundColor: '#e5e5e5',
        justifyContent: 'space-between'
    },
    titleAndText:{
        backgroundColor: '#e5e5e5',
        rowGap: 20,
    },
    descriptionTitle: {
        fontWeight: '800',
        fontSize: 22,
    },
})


export default Card
