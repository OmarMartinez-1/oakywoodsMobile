import { Ionicons } from "@expo/vector-icons";
import { BrandLogoDark } from "../atoms/BrandLogo"
import Button from "../atoms/Button"
import { Text, View } from "../atoms/Themed"
import { StyleSheet, TextInput, } from "react-native"

const sections = [
    { title: "About" },
    { title: "Blog" },
    { title: "FAQs" },
    { title: "Shipping & Returns" },
    { title: "Terms of service" },
    { title: "Privacy policy" },
    { title: "Oakywood for Business" },
    { title: "Corporate Gifts" },
    { title: "Resellers" },
    { title: "Custom Project" },
    { title: "Press Info" }
];

function Footer() {
    return (
        <View style={styles.footer}>
            

            <View style={styles.brand}>
                <BrandLogoDark />
                <Text style={styles.brandName}>Oakywood.{'\n'}Your workspace. Reinvented.</Text>

            </View>

            <View style={styles.main}>
                <Text style={styles.touch}>Let's Keep in Touch</Text>
                <Text>Sign up and get 10% discount on your first purchase</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" />
                    <Button title='Sign Up' />
                </View>
            </View>

            <View style={styles.termsOfService} >

                {sections.map((s, i) => <Text key={i } style={styles.sections}>{s.title}</Text>)}

            </View>
            <View style={styles.hotLine}>
                <Text style={styles.text}>Helpline</Text>
                <Button title='+48 797 217 197' />
                <Text>Mon - Fr 8:00 - 16:00 CET</Text>
                <Text>Contact Form</Text>
                <Text style={styles.text} >WhatsApp</Text>



                <Ionicons name="md-card-outline" size={36} />


                <Text>© 2023 Oakywood. All rights reserved.</Text>
            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#e5e5e5',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    brand: {
        backgroundColor: '#e5e5e5',
        flexDirection: 'row',
        gap: 20,
        rowGap: 20,
        alignItems: 'center',
        marginBottom: 40,
    },
    brandName: {
        fontSize: 22,
        fontWeight: '700',
    },
    main: {
        backgroundColor: '#e5e5e5',

    },
    touch: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
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
    termsOfService: {
        width: '100%',
        height: 190,
        backgroundColor: '#e5e5e5',
        flexWrap: 'wrap',
        padding: 8,
    },
    sections: {
        width: '50%',
        marginBottom: 12,
    },
    hotLine: {
        backgroundColor: '#e5e5e5',
        rowGap: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
    }


})

export default Footer
