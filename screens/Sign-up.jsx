import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react';
import moon from "../assets/moon.png"


const SignUp = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}  style={styles.main__container}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.signUpcontainer}>
                <Text style={styles.signUpText}>Sign up </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInContainer}>
                <Text style={styles.signInText}>Sign in </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.form__container}>
            <Text style={styles.header__text}>Sign Up</Text>
            <Text style={styles.subheader__text}>Join us on your path to the moon</Text>
            <View style={styles.input__container}>
                <Text style={styles.input__text}>Your name</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.input__container}>
                <Text style={styles.input__text}>Email</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.input__container}>
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
        </ScrollView>
    </KeyboardAvoidingView>
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
        flex: 0,
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
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',   
        alignItems: 'center'
    },
    header__text: {
        fontSize: 56,
        fontWeight: '800',
        color: 'black',
    },
    subheader__text: {
        fontSize: 20,
        color: 'black',
    },
    input__container : {
        paddingTop: 20
    },
    input__text : {
        fontSize: 24, 
        fontWeight: '600',
        color: 'black'
    },
    input : {
        borderWidth: 5,
        borderColor: 'black',
        height: 50,
        width: 300,
        marginTop: 14,
        marginLeft: -20,
        borderRadius: 80,
        fontSize: 25,
        paddingHorizontal: 20
    },
    submit: {
        backgroundColor: '#C4FAEA',
        borderWidth: 5,
        borderRadius: 80,
        paddingVertical: 7,
        paddingHorizontal: 27,
        marginTop: 20,
        marginLeft: 110,
    },
    submit__text: {
        color: 'black',
        fontSize: 28,
        fontWeight: '600'
    },
    moon__container : {
        alignItems: 'flex-start',
        overflow: 'hidden', 
        marginBottom: -50, 
        marginLeft: -50,
        width: 250,
      
    }, 
    moon : {
        height: 250,
        width: 250
    }
})