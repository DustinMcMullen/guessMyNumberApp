import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { PrimaryButton } from '../components/PrimaryButton';
import { NumberContainer } from "../components/game/NumberContainer";

export function GameOverScreen ({restartGame, userNumber, rounds}) {
    
    function handleRestartGame () {
        restartGame(true);
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <Card>
                <InstructionText>Computer guessed your number:</InstructionText>
                <NumberContainer>{userNumber}</NumberContainer>
                <InstructionText>In {rounds} rounds!</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleRestartGame}>Restart Game</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
    },
    buttonContainer: {
        flexDirection: "row",
        paddingHorizontal: 36,
        paddingBottom: 12
    }
})