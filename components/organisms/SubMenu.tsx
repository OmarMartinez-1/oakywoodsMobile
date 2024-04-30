import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text } from '../atoms/Themed'
import { StyleSheet} from 'react-native'
import { Link } from 'expo-router';




type Screen = {
    screen: string;
};

type MenuList = {
    title: string;
    screens: Screen[];
};

const inicialState: number = -1

function SubMenu({ menuList }: { menuList: MenuList[] }): React.ReactNode {


    const [subMenuIndex, setSubMenuIndex] = useState(inicialState)

    return (
        <>

            {menuList.map((item: any, index: any) => {

                return (
                    <View style={styles.subTitleContainer} key={index}>

                        <TouchableOpacity

                            onPress={() => {
                                setSubMenuIndex(subMenuIndex === index ? inicialState : index)
                            }}
                        >
                            <View style={styles.sectionsContainer}>
                                <Text style={styles.subTitle}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>

                        {subMenuIndex === index && (<View
                            style={styles.screensContainer}
                        >

                            {
                                item.screens.map((menuItem: any, index: any) => {
                                    return (
                                        <View style={styles.screen} key={index}>

                                            <TouchableOpacity>
                                            <Link href={menuItem.path??'/modal'} asChild>
                                                <Text >{menuItem.screen}</Text>
                                            </Link>

                                            </TouchableOpacity>

                                        </View>

                                    )
                                })
                            }

                        </View>
                        )}


                    </View>

                )
            })}

        </>
    )
}


const styles = StyleSheet.create({
    subTitleContainer: {
        marginBottom: 10,
        marginLeft: 10,

    },
    subTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 25,
        marginVertical: 3
    },
    screensContainer: {
        marginVertical: 5,
    },
    screen: {
        marginVertical: 10,
        marginLeft: 40,
    },
    sectionsContainer: {
        marginVertical: 5,
    }
})

export default SubMenu
