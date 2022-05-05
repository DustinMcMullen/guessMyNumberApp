import { useState } from 'react'
import {TextInput, View, StyleSheet, Alert} from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'

export function StartGameScreen ({chosenNumberHandler}) {

    const [numberValue, setNumberValue] = useState('');

    function handleTextChange (number) {
        setNumberValue(number)
    }

    function resetInputHandler () {
        setNumberValue('')
    }

    function confirmInputHandler () {
        const chosenNumber = parseInt(numberValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert("Invalid Number", "Number must be a number between 1 & 99.", [{text: "okay", style: "destructive", onPress: resetInputHandler}] )
            return
        }
        console.log("valid chosenNumber: ", chosenNumber);
        chosenNumberHandler(chosenNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect='none'
                onChangeText={handleTextChange}
                value={numberValue}
            />
            <View style={styles.buttonContainer} >
                <PrimaryButton resetInputHandler={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton confirmInputHandler={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    input: {
        height: 50,
        width: 60,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})