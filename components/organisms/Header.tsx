import { View, Text } from '../atoms/Themed'
import { BrandLogoLight } from '../atoms/BrandLogo'
import { StyleSheet, TouchableOpacity, } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import { ParamListBase, } from '@react-navigation/native';
import {  router } from 'expo-router';
import { useCartStore } from '../../service/cartStore';



function Header(navigation: DrawerNavigationProp<ParamListBase>) {
    const {items }= useCartStore()


    return (
        <View style={styles.header}>
            
            <BrandLogoLight />

            <View style={styles.rightContainer}>
                <TouchableOpacity>
                    <Ionicons name='ios-search-outline' size={32} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/modal')}>

                    <Ionicons name='ios-cart-outline' size={32} />

                   {items > 0 && <Text style={styles.items} >{items}</Text>}
                   
                </TouchableOpacity>

                <View style={styles.menu}>

                    <TouchableOpacity onPress={() => {
                        navigation.openDrawer()
                    }}>
                        <Ionicons name='ios-menu-outline' size={34} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center',
        alignContent: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        columnGap: 15,
    },
    menu: {
        marginLeft: 15,
    },
    items: {
        width: 21,
        height: 21,
        position: 'absolute',
        top: -10,
        right: -10,
        borderWidth: 2,
        borderColor: '#4500ff',
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default Header
