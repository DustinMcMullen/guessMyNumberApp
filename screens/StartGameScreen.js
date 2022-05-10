import { useState } from 'react'
import {TextInput, View, Text, StyleSheet, Alert} from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'
import { Colors } from '../utils/colors';
import { Title } from '../components/Title';
import { Card } from '../components/Card';
import { InstructionText } from '../components/InstructionText';

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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
            <InstructionText>Enter a number</InstructionText>
                <TextInput style={styles.input}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={handleTextChange}
                    value={numberValue}
                />
                <View style={styles.buttonContainer} >
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 60,
        padding: 24
    },
    input: {
        height: 50,
        width: 60,
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 24,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        fontWeight: 'bold',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})