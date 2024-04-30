import { Text } from './Themed'
import { StyleSheet, TouchableOpacity } from 'react-native'

function Button({ title, onPress, style }: { title: String, onPress?: ()=>void, style?: any }) {
    const With = title.length * 10
    return (
        <TouchableOpacity onPress={onPress} style={[Styles.button, { width: With }, style]}>
            <Text style={Styles.title} >{title}</Text>
        </TouchableOpacity >
    )
}
const Styles = StyleSheet.create({
    button: {
        backgroundColor: '#1A1A1A',
        borderRadius: 38,
        paddingVertical: 3,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        color: '#fafafa',
    },

})

export default Button
