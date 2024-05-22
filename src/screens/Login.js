import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppColor } from '../commons/Colors';
import { LoginData } from '../Data/Data';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation()

    const handleLogin = () => {
        LoginData.map(data => {
            if (email !== "" || password !== "") {
                if (data.email === email && data.password === password) {
                    navigation.navigate("Home");
                }
                else if (data.email !== email) {
                    setError(true);
                    setErrorMessage("Email is incorrect")
                }
                else {
                    setError(true);
                    setErrorMessage("password is incorrect")
                }
            }
            else {
                navigation.navigate("Home");
                setError(true);
                setErrorMessage("Email and password cannot be Empty")
            }

        })
    }

    const handleOnFocus = () => {
        setError(false)
        setErrorMessage("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.header}>
                Welcome to Motilal Transaction App!
            </Text>

            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqO7D2x04zXa24R5nDmeu4e7zSM2FMwOtnYRTrCsKpQ&s'
                }}
                style={styles.logo}
            />

            <View style={styles.loginContainer}>
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                    onChangeText={txt => setEmail(txt)}
                    value={email}
                    onFocus={handleOnFocus}
                />

                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={txt => setPassword(txt)}
                    value={password}
                    onFocus={handleOnFocus}
                />
                {
                    error && <Text style={
                        styles.errormsg
                    }>
                        {errorMessage}
                    </Text>
                }
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.lgnText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        top: 50,
        fontSize: 16,
        fontWeight: '500',
        color: AppColor.blue
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: 150
    },
    input: {
        height: 'auto',
        borderWidth: 1,
        width: '85%',
        marginBottom: 20,
        borderRadius: 7,
        paddingHorizontal: 10
    },
    button: {
        borderWidth: 1,
        height: 35,
        borderRadius: 5,
        backgroundColor: AppColor.blue,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    lgnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColor.white,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        top: 70
    },
    errormsg: {
        fontSize: 14,
        color: 'red',
        marginBottom: 15,

    }
})


export default Login;