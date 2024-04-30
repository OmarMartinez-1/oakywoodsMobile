import { Slot } from 'expo-router'
import { ScrollView, StyleSheet, Image } from 'react-native'
import Footer from '../../components/organisms/Footer'
import { View , Text} from '../../components/atoms/Themed'
import CarruselBlog from '../../components/molecules/CarruselBlog'
import CarruselExploreMore from '../../components/molecules/CarruselExploreMore'


function _layout() {


  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.page}>
        <Slot />


        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/showCase.webp')}
            style={styles.image}
          />
        </View>
        <Text style={styles.titleExploreMore}>Explore more possibilities.</Text>
        <CarruselExploreMore  />
        <CarruselBlog />

      </View>

      <Footer />
    </ScrollView >
  )

}

const styles = StyleSheet.create({
  page: {
    rowGap: 20,

  },
  imageContainer: {
    alignContent: 'center',
    marginHorizontal: 20,
    rowGap: 20,

  },
  image: {
    width: '100%',
    height: 260,
    objectFit: 'contain',
  },
  titleExploreMore: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: '800',
    fontSize: 22,
},
})

export default _layout
