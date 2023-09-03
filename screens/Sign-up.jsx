import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react';
import moon from "../assets/moon.png"

const SignUp = () => {
  return (
    <View style={styles.main__container}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.signUpcontainer}>
            <Text style={styles.signUpText}>Sign up </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInContainer}>
            <Text style={styles.signInText}>Sign in </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.form__container}>
            <View style={styles.header__container}>
                <Text style={styles.header__text}>Sign Up</Text>
            </View>
            <View style={styles.subheading__container}>
                <Text style={styles.subheader__text}>Join us on your path to the moon</Text>
            </View>
            <View style={styles.name__container}>
                <Text style={styles.input__text}>Your name</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.email__container}>
                <Text style={styles.input__text}>Email</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.password__container}>
                <Text style={styles.input__text}>Password</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <TouchableOpacity style={styles.submit}>
                <Text style={styles.submit__text}>Sign up </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.moon__container}>
            <Image source={moon} style={styles.moon}/>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    main__container : {
        backgroundColor: '#C4FAEA',
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        
    },
    signUpcontainer: {
        backgroundColor: '#D1DBFC',
        borderRadius: 80,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 50,
    },
    signUpText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    signInContainer: {
        backgroundColor: '#C4FAEA',
        borderRadius: 80,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 80,
        marginTop: 50,
        borderColor: 'black',
        borderWidth: 1,
    },
    signInText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    form__container : {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header__container: {
        flex: 1,
    },
    header__text: {
        fontSize: 56,
        fontWeight: '800',
        color: 'black',
    },
    subheading__container: {
        flex: 1,
        position: 'absolute',
        top: 80,
    }, 
    subheader__text: {
        fontSize: 20,
        color: 'black',
    },
    name__container : {
        flex: 1,
        position: 'absolute',
        top: 130,
        left: 55,
        
    },
    email__container : {
        flex: 1,
        position: 'absolute',
        top: 250,
        left: 55,
    },
    password__container : {
        flex: 1,
        position: 'absolute',
        top: 370,
        left: 55,
    },
    input__text : {
        fontSize: 24, 
        fontWeight: '600',
        color: 'black'
    },
    input : {
        width: 100,
        borderWidth: 5,
        borderColor: 'black',
        height: 50,
        width: 300,
        marginTop: 14,
        marginLeft: -20,
        borderRadius: 80
    },
    submit: {
        backgroundColor: '#C4FAEA',
        borderWidth: 5,
        borderRadius: 80,
        paddingVertical: 7,
        paddingHorizontal: 27,
        bottom: 160,
        left: 60
    },
    submit__text: {
        color: 'black',
        fontSize: 28,
        fontWeight: '600'
    },
    moon__container : {
        position: 'absolute',
        bottom: -50,
        left: -50
    }, 
    moon : {
        height: 250,
        width: 250
    }
})