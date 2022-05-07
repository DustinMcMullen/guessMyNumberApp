import { useState } from 'react'
import {TextInput, View, StyleSheet, Alert} from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'
import { Colors } from '../utils/colors';

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
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
        backgroundColor: Colors.primary800,
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
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})