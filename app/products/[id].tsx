import { useLocalSearchParams } from "expo-router"
import { View, Text } from "../../components/atoms/Themed"
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { useProductsStore } from "../../service/productsStore"
import { Svg, Path, G, Polygon } from "react-native-svg"
import Button from "../../components/atoms/Button"
import Footer from "../../components/organisms/Footer"
import { useCartStore } from "../../service/cartStore"
import { mainPage } from "../../constants/constants"
import ProductItem from "../../components/molecules/ProductItem"

function ProductView() {

  const {suggestedUse, newArrivals} = mainPage
  const { filterProducts } = useProductsStore()
  const { addProduct } = useCartStore()

  const { id } = useLocalSearchParams<{ id: string }>()
  const [product] = filterProducts([+id])




  const newArrivalsProducts = filterProducts(newArrivals)

  const WorldSvg = <Svg width="16" height="16" viewBox="0 0 20 20" ><Path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm-2.29-2.333A17.9 17.9 0 0 1 6.027 11H2.062a8.008 8.008 0 0 0 5.648 6.667ZM8.03 11c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 11.97 11H8.03Zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 17.938 11ZM2.062 9h3.965A17.9 17.9 0 0 1 7.71 2.333 8.008 8.008 0 0 0 2.062 9Zm5.969 0h3.938A15.905 15.905 0 0 0 10 2.248 15.905 15.905 0 0 0 8.03 9h.001Zm4.259-6.667A17.9 17.9 0 0 1 13.973 9h3.965a8.008 8.008 0 0 0-5.648-6.667Z" fill="#1A1A1A" fill-rule="nonzero"></Path></Svg>
  const TreeSvg = <Svg width="18" height="22" viewBox="0 0 18 22"><G stroke="#1A1A1A" stroke-width="2" fill="none" fill-rule="evenodd"><Path d="M9 17c4.694 0 7.5-2.806 7.5-7.5S13.694 1 9 1 1.5 4.806 1.5 9.5 4.306 17 9 17ZM9 7v14M9 14l4-3M9 12 6 9"></Path></G></Svg>

  const LeafSvg = <Svg width="16" height="16" viewBox="0 0 18 19" ><Path d="M18 0v2c0 9.627-5.373 14-12 14H2.243A17.056 17.056 0 0 0 2 19H0c0-1.363.116-2.6.346-3.732C.116 13.974 0 12.218 0 10 0 4.477 4.477 0 10 0c2 0 4 1 8 0Zm-8 2a8 8 0 0 0-8 8c0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C5.641 9.5 3.747 11.354 2.776 14H6c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C10.627 2.027 10.401 2 10 2Z" fill="#1A1A1A" fill-rule="nonzero"></Path></Svg>
  const InfoSvg = <Svg width="18" height="18" viewBox="0 0 20 20" ><Path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9 5h2v2H9V5Zm0 4h2v6H9V9Z" fill="#1A1A1A" fill-rule="nonzero"></Path></Svg>
  const RowDownSvg = <Svg width="16" height="16" viewBox="0 0 16 16" ><G transform="translate(-4 -4)" fill="none" fill-rule="evenodd"><Path fill="#000" fill-rule="nonzero" d="m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2z"></Path></G></Svg>
  const ShipSvg = <Svg width="24px" height="24px" viewBox="0 0 24 24"  >
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <Polygon points="0 0 24 0 24 24 0 24"></Polygon>
      <Path d="M8.965,18 C8.71922516,19.7248291 7.24225163,21.0062642 5.5,21.0062642 C3.75774837,21.0062642 2.28077484,19.7248291 2.035,18 L1,18 L1,6 C1,5.44771525 1.44771525,5 2,5 L16,5 C16.5522847,5 17,5.44771525 17,6 L17,8 L20,8 L23,12.056 L23,18 L20.965,18 C20.7192252,19.7248291 19.2422516,21.0062642 17.5,21.0062642 C15.7577484,21.0062642 14.2807748,19.7248291 14.035,18 L8.965,18 Z M15,7 L3,7 L3,15.05 C3.80081512,14.2324554 4.95073365,13.8580558 6.07937702,14.0473921 C7.20802039,14.2367283 8.17281161,14.9658823 8.663,16 L14.337,16 C14.505,15.647 14.73,15.326 15,15.05 L15,7 Z M17,13 L21,13 L21,12.715 L18.992,10 L17,10 L17,13 Z M17.5,19 C18.3287033,19 19.0005,18.3282033 19.0005,17.4995 C19.0005,16.6707967 18.3287033,15.999 17.5,15.999 C16.6712967,15.999 15.9995,16.6707967 15.9995,17.4995 C15.9995,18.3282033 16.6712967,19 17.5,19 Z M7,17.5 C7,16.9641016 6.71410163,16.4689111 6.25000001,16.2009619 C5.78589839,15.9330127 5.21410161,15.9330127 4.74999999,16.2009619 C4.28589837,16.4689111 4,16.9641016 4,17.5 C4,18.3284271 4.67157288,19 5.5,19 C6.32842712,19 7,18.3284271 7,17.5 L7,17.5 Z" fill="#1A1A1A" fill-rule="nonzero"></Path>
    </G>
  </Svg>
  const ViewARSvg = <Svg width="16" height="16" viewBox="0 0 26 26" ><G fill="#000" fill-rule="nonzero" stroke="#000" stroke-width=".6"><Path d="M1.75 18v6.25h6.249V25H1v-7h.75ZM25 18v7h-7.001v-.75h6.251V18H25ZM7.999 1v.75l-6.249.001V8H1V1.001L7.999 1ZM25 1.001V8h-.75V1.751l-6.251-.001V1L25 1.001ZM19.584 17.038V9.844a.33.33 0 0 0-.206-.303l-6.042-2.535V4.6h-.672v2.406L6.622 9.541a.33.33 0 0 0-.206.303v7.194l-1.816.787.273.6 1.881-.816 6.113 2.565a.35.35 0 0 0 .266 0l6.113-2.565 1.881.815.273-.599-1.816-.787Zm-6.92-9.318v.813h.672V7.72l5.062 2.124L13 12.109 7.602 9.844l5.062-2.124Zm-4.253 8.453-1.323.574v-6.405l5.576 2.34v6.693L7.59 17.246l1.094-.474-.273-.6Zm4.925 3.202v-6.693l5.576-2.34v6.405l-1.323-.574-.273.599 1.094.474-5.074 2.129Z"></Path></G></Svg>

  return (
    <ScrollView
    >
      <View>

        <View style={styles.container}>
          <Image source={product.image} style={styles.image} />

          <View style={styles.nameAndPrices}>
            <Text style={styles.name}>{product.name}</Text>

            <View>
              <View style={styles.rowDirection}>

                <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>

                <TouchableOpacity style={styles.rowDirection}>
                  <View style={styles.dot}></View>
                  <View style={styles.dot}></View>
                  <View style={styles.dot}></View>
                  <View style={styles.dot}></View>
                  <View style={styles.dot}></View>
                  <Text>  24 Reviews</Text>

                </TouchableOpacity>
              </View>

            </View>



          </View>


        </View>

        <View style={styles.viewMargin}>



          <View style={styles.container}>
            <View style={styles.features}>
              <View>
                {WorldSvg}
              </View>
              <Text>Shipping worldwide</Text>
            </View>

            <View style={styles.features}>
              <View>
                {TreeSvg}
              </View>
              <Text>1 product = 1 tree</Text>
            </View>

            <View style={styles.features}>
              <View>
                {LeafSvg}
              </View>
              <Text>Eco-friendly</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.rowDirection}>

              <View style={styles.features}>
                <Text style={styles.textStrong}>Color: oak</Text>

                <View>
                  {InfoSvg}
                </View>
              </View>


              <View>

                <TouchableOpacity style={styles.features}>

                  <Image style={styles.typesOfWood} source={require('../../assets/images/cropCenter.webp')} />
                  {RowDownSvg}
                </TouchableOpacity>
              </View >

            </View>

            <View style={styles.rowDirection}>

              <View style={styles.options}>
                <TouchableOpacity style={styles.optionsItems}>
                  <Text style={styles.textStrong}>size: 120x60</Text>
                  {RowDownSvg}
                </TouchableOpacity>
              </View>

              <View style={styles.options}>
                <TouchableOpacity style={styles.optionsItems}>
                  <Text style={styles.textStrong}>Legs: Black</Text>
                  {RowDownSvg}
                </TouchableOpacity>
              </View>
            </View>

            <Button onPress={() => { addProduct(product) }} title='Add to cart' style={styles.addToCart} />

          </View>

          {/*

          posible delete
          
          
          <TouchableOpacity style={styles.viewAR}>
            <View style={styles.rowDirectionAndGap} >
              {ViewARSvg}
              <Text style={styles.textStrong}>View in AR</Text>
            </View>
          </TouchableOpacity>

          <Button title='Customize this product' style={styles.customProduct} /> */}

          <View style={styles.ships}>
            {ShipSvg}
            <Text>Ships in 3-4 weeks</Text>
          </View>


        </View>

        <View style={styles.greyContainer}>
          <View style={styles.textContainer}>

            

            
            <Text style={styles.name}>Ergonomic comfort</Text>
            <Text >Made from solid wood, the Classic Wooden Desk is a timeless and durable office staple. Its rounded edges make it sturdy and resistant to damage while its optimal height and smooth surface help you comfortably get through your workday.</Text>
          </View>

          <View style={styles.textContainer}>
            <Image source={{uri: "https://oakywood.shop/cdn/shop/files/Kopia_Kopia_220810_Oakywood_D3_2624.jpg?crop=center&height=405&v=1666539332&width=540"}} 
            style={styles.imageProductsFeatures}
            />
            <Text  style={styles.subTitle}>Sturdy tabletop</Text>
            <Text>42 mm thick, the wooden tabletop is a reliable and lasting option resistant to strain and damage.</Text>            
            </View>

          <View style={styles.textContainer}>
            <Image source={{uri: "https://oakywood.shop/cdn/shop/files/220808_Oakywood_D1_1176_1.jpg?crop=center&height=405&v=1666859280&width=540"}} 
            style={styles.imageProductsFeatures}
            />
            <Text  style={styles.subTitle}>Classic design</Text>
            <Text>Timeless design and simple form allow the desk to respond to a range of user needs while making it stylishly blend in with different interior design styles.</Text>
            </View>

          <View style={styles.textContainer}>
            <Image source={{uri: "https://oakywood.shop/cdn/shop/files/Kopia_Kopia_220808_Oakywood_D1_0832.jpg?crop=center&height=405&v=1666539363&width=540"}} 
            style={styles.imageProductsFeatures}
            />
            <Text style={styles.subTitle}>Optimal dimensions</Text>
            <Text>Choose between 3 options to fit the desk size to your individual needs or create an entirely custom product.</Text>
            </View>

        </View>

        <View style={styles.slider}>
        <ScrollView
            horizontal
            contentContainerStyle={styles.carrucelItemsContainer}
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            snapToInterval={318}

          >
            {
              suggestedUse.map((item: any, i: any) => <Image key={i} style={styles.imageCarrucel} source={item.image} />)
            }
          </ScrollView>


        </View>

        <View style={styles.wrapperWideCarrucel}>
          <Text style={styles.subTitle}>Related Products</Text>

          <ScrollView
            horizontal
            contentContainerStyle={styles.carrucelItemsContainer}

            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            snapToInterval={175}
            decelerationRate="fast"
            

          >

            {
              newArrivalsProducts.map((p, i) => <View style={styles.itemCarrucel}><ProductItem key={i} product={p} heightRes={124} /></View>)
            }
          </ScrollView>

        </View>




      </View><Footer /></ScrollView>
  )
}

const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: 292,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    backgroundColor: 'transparent'
  },
  price: {
    fontSize: 19,
    fontWeight: '800',
  },
  textStrong: {
    fontSize: 16,
    fontWeight: '800',
  },
  viewMargin: {
    marginHorizontal: 20
  },
  container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',

  },
  nameAndPrices: {
    marginHorizontal: 20,
    marginVertical: 20,
    rowGap: 20
  },
  dot: {
    backgroundColor: '#1a1a1a',
    borderRadius: 50,
    width: 7,
    height: 7,
    marginRight: 4
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowDirectionAndGap: {
    columnGap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
    marginBottom: 15,

  },
  typesOfWood: {
    borderRadius: 50,
    width: 28,
    height: 28,
    marginRight: 8,

  },
  options: {
    marginBottom: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 8,
    width: '45%',
  },
  optionsItems: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addToCart: {
    paddingVertical: 9,
    backgroundColor: '#4500FF',
    width: '100%',
    marginBottom: 20
  },
  viewAR: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#FAFAFA',
    paddingVertical: 9,
    width: '100%',
    marginBottom: 20,
    tintColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',

  },
  customProduct: {
    paddingVertical: 9,
    width: '100%',
    marginBottom: 20
  },
  ships: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    columnGap: 10,
  },
  greyContainer: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  subTitle: {
    fontWeight: '800',
    fontSize: 20,
  },
  textContainer: {
    rowGap: 7,
    marginBottom: 20,
    backgroundColor: 'transparent',

  },
  imageProductsFeatures:{
    height: 262,
    width: '100%'
  },
  carrucelItemsContainer:{
    columnGap: 10
  },
  itemCarrucel:{
      width: 165,
      flexShrink: 1,
   
  },
  imageCarrucel: {
    width: 308,
    height: 221,
  },
  slider:{
    marginLeft: 20,
    marginTop: 20
  },
  wrapperWideCarrucel: {
    paddingLeft: 20,
    paddingVertical: 20,
    rowGap: 20
  },



})

export default ProductView