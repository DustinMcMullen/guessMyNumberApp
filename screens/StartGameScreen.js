import { useState } from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'

export function StartGameScreen () {

    const [numberValue, setNumberValue] = useState();

    function handleTextChange (number) {
        setNumberValue(number)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect='none'
                onChangeText={handleTextChange}
            />
            <View style={styles.buttonContainer} >
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
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