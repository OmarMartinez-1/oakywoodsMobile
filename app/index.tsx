import { StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { Text, View } from '../components/atoms/Themed'
import Button from '../components/atoms/Button'
import Footer from '../components/organisms/Footer'
import { ScrollView } from 'react-native-gesture-handler'
import { Video, ResizeMode } from 'expo-av'
import { useRef, useState } from 'react'
import ProductItem from '../components/molecules/ProductItem'
import CarruselExploreMore from '../components/molecules/CarruselExploreMore'
import { Ionicons } from '@expo/vector-icons'
import CarruselBlog from '../components/molecules/CarruselBlog'
import { mainPage } from '../constants/constants'
import { useProductsStore } from '../service/productsStore'




function Index() {


  const [checked, setChecked] = useState(false);

  const { newArrivals, suggestedUse, homeEssentials } = mainPage

  const { filterProducts } = useProductsStore()


  const newArrivalsProducts = filterProducts(newArrivals)
  const homeEssentialsProducts = filterProducts(homeEssentials)

  const refVideo = useRef<any>(null)


  return (
    <>
      <ScrollView>

        <ImageBackground
          source={{ uri: 'https://oakywood.shop/cdn/shop/files/BF-HERO1.jpg?crop=center&height=1900&v=1700145635&width=900' }}
          style={styles.mainImage}
        >


          <View style={styles.buttonAndTitle}>
            <Text style={styles.title}>Your workspace.</Text>
            <Text style={styles.title}>Reinveinted.</Text>
            <Button title='Shop now' style={styles.button} />
          </View>

        </ImageBackground>


        <View style={styles.wrapperWideGray}>
          <View style={styles.itemsWide}>
            <Text style={styles.subTitle}>Design that Works</Text>
            <Text>Modern design together with peak functionality these are the key features which make our products comfortable, ergonomic, and tailored to your individual needs.</Text>


            <View style={styles.badyet}>
              <Text>Excellent 4.7 out 5 ⭐ Trustpilot</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: 'https://oakywood.shop/cdn/shop/files/220810_Oakywood_D3_3153_25d80c4e-aeda-4e46-bf46-a38b7a0b7e65.jpg?crop=center&height=400&v=1704311114&width=673' }} style={styles.sideImage} />
            </View>

          </View>

        </View>

        <View style={styles.wrapperWideVideo}>

          <View style={styles.video}>

            <View style={styles.buttonAndTitleVideo}>
              <Text style={styles.titleVideo}>Custumize.</Text>
              <Button title='Start now' style={styles.buttonVideo} />
            </View>

            <Video
              style={styles.video}
              ref={refVideo}
              source={{ uri: 'https://cdn.shopify.com/videos/c/o/v/8326cb60569743efbb8273ae27aebf46.mp4' }}
              isLooping
              useNativeControls={false}
              resizeMode={ResizeMode.CONTAIN}
              isMuted

            shouldPlay

            />

          </View>
        </View>


        <View style={styles.wrapperWideCarrucel}>
          <Text style={styles.carrucelTitle}>
            Home office essential.
          </Text>

          <ScrollView
            horizontal
            contentContainerStyle={styles.carrucelItemsContainer}

            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            snapToInterval={346}

          >
            {
              homeEssentialsProducts.map((p, i) => <View style={styles.itemCarrucel}><ProductItem key={i} product={p} heightRes={124} /></View>)
            }
          </ScrollView>
        </View>


        <View style={styles.wrapperWideGray}>

        </View>



        <View >
          <View style={styles.textcontainer}>
            <Text style={styles.subTitle}>Core of our business</Text>
            <Text>Sustainable production using natural materials, respect for nature, supporting local community and economy – these are the fundamental principles guiding all our business endeavors.</Text>
          </View>
          <View style={styles.slider}>

            <CarruselExploreMore />
          </View>

        </View>


        <View style={styles.wrapperWideCarrucel}>
          <Text style={styles.carrucelTitle}>
            New arrivals.
          </Text>

          <ScrollView
            horizontal
            contentContainerStyle={styles.carrucelItemsContainer}

            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}

            snapToInterval={346}

          >
            {
              newArrivalsProducts.map((p, i) => <View style={styles.itemCarrucel}><ProductItem key={i} product={p} heightRes={124} /></View>)
            }
          </ScrollView>
        </View>


        <View style={styles.wrapperWideGray}>
          <View style={styles.textcontainerNewsletter}>
            <Text style={styles.subTitle}>Newsletter.</Text>
            <Text>Sign up for our newsletter and get 10% off your first order, early access to sales and product launches, as well as extra content created only for subscribers.</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="you know the drill" />
            <Button title='Sign Up' />
          </View>

          <View style={styles.rowDirection}>
            <TouchableOpacity
              style={[styles.checkboxBase, checked && styles.checkboxChecked]}
              onPress={() => setChecked(!checked)}>
              {checked && <Ionicons name="checkmark" size={15} color="white" />}

            </TouchableOpacity>

            <Text>I agree to the Terms of service and Privacy policy</Text>

          </View>
        </View>


        <View style={styles.wrapperWide}>

          <View style={styles.textcontainerNewsletter}>
            <Text style={styles.subTitle}>Core of our business</Text>
            <Text>Sustainable production using natural materials, respect for nature, supporting local community and economy – these are the fundamental principles guiding all our business endeavors.</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.carrucelItemsContainer}
            style={styles.slider}
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}

            snapToInterval={346}

          >
            {
              suggestedUse.map((item: any, i: any) => <Image key={i} style={styles.imageCarrucel} source={item.image} />)
            }
          </ScrollView>

        </View>
        <View>

          <CarruselBlog />
        </View>

        <Footer />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  mainImage: {
    objectFit: 'cover',
    height: 780,
    justifyContent: 'flex-end',
    padding: 20
  },
  sideImage: {
    objectFit: 'cover',
    width: 350,
    height: 208,

  },
  buttonAndTitle: {
    rowGap: 15,
    backgroundColor: 'transparent',
    position: 'relative',
    bottom: '24%',

  },
  buttonAndTitleVideo: {
    paddingTop: 20,
    paddingLeft: 20,
    rowGap: 12,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 1,
    top: 0,

  },
  title: {
    fontWeight: '800',
    fontSize: 38,
    color: '#FFFFFF',
  },
  button: {

    width: '30%',
    backgroundColor: '#4500FF',
    paddingVertical: 10,

  },
  titleVideo: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
  },
  buttonVideo: {
    backgroundColor: '#4500FF',
    paddingVertical: 7

  },
  wrapperWideGray: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  wrapperWide: {
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  wrapperWideVideo: {
    paddingHorizontal: 20,
    paddingTop: 40
  },
  wrapperWideCarrucel: {
    paddingLeft: 20,
    paddingVertical: 40
  },
  itemsWide: {
    backgroundColor: 'transparent',
    rowGap: 10,
  },
  textcontainer: {
    backgroundColor: 'transparent',
    rowGap: 10,
    margin: 20,
    marginBottom: 0,
  },
  textcontainerNewsletter: {
    backgroundColor: 'transparent',
    rowGap: 10,
  },
  subTitle: {
    fontWeight: '800',
    fontSize: 20,
  },

  carrucelTitle: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 20

  },
  badyet: {
    backgroundColor: 'transparent',
    marginVertical: 20
  },
  imageContainer: {
    backgroundColor: 'transparent',
    width: 350,
    height: 208,

  },
  video: {
    width: 350,
    height: 208,

  },
  slider: {
    marginTop: 20
  },
  carrucelItemsContainer: {
    columnGap: 10,
    alignItems: 'center',
  },
  itemCarrucel: {
    width: 165,
    flexShrink: 1,
  },
  rowDirection: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    height: 41,
    padding: 4,
    borderRadius: 38,
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'black',
  },
  imageCarrucel: {
    width: 326,
    height: 348,
  },



})

export default Index
