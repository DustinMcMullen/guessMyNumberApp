import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { PrimaryButton } from '../components/PrimaryButton';
import { NumberContainer } from "../components/game/NumberContainer";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function GameOverScreen ({restartGame, userNumber, rounds}) {
    
    function handleRestartGame () {
        restartGame(true);
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.successImage} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <InstructionText customStyle={{paddingTop: 24, padding: 0, color: Colors.primary800}}>Computer guessed your number:</InstructionText>
                <InstructionText customStyle={{padding: 0, color: Colors.primary800}}><Text style={{fontFamily: 'open-sans-bold', fontSize: 24,}}>'{userNumber}'</Text></InstructionText>
                <InstructionText customStyle={{padding: 0, paddingBottom: 32, color: Colors.primary800}}>In <Text style={{fontFamily: 'open-sans-bold'}}>{rounds}</Text> rounds!</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleRestartGame}>Restart Game</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
    },
    imageContainer: {
        alignItems: 'center',
    },
    successImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        marginTop: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 12,
        paddingHorizontal: 100
    }
})