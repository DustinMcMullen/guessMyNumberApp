import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Title } from "../components/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";

export function GameScreen ({userNumber, onGameOver}) {

    const [lowerBound, setLowerBound] = useState(1);
    const [upperBound, setUpperBound] = useState(100)
    const [numOfRounds, setNumOfRounds] = useState(1);

    const compGuess = Math.floor( Math.random() * (upperBound - lowerBound) + lowerBound );

    useEffect( () => {
        if (userNumber === compGuess) {
            onGameOver(numOfRounds);
        }
    }, [userNumber, compGuess, onGameOver] )

    function handleLowerHint () {
        if (userNumber < compGuess){
            setUpperBound(compGuess);
            setNumOfRounds(prevRounds => prevRounds + 1);
        } else {
            Alert.alert("No Cheating!", 'We want a fair game.', [ {text: 'oops', style: 'cancel'} ]);
            return
        } 
    }

    function handleHigherHint () {
        if (userNumber > compGuess){
            setLowerBound(compGuess + 1);
            setNumOfRounds(prevRounds => prevRounds + 1);
        }  else {
            Alert.alert("No Cheating!");
            return
        } 
    }

    return(
        <View style={styles.gameContainer}>
            <Title>Computers Guess</Title>
            <NumberContainer>{compGuess}</NumberContainer>
            <Card>
                <InstructionText>higher or lower?</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleLowerHint}>-</PrimaryButton>
                    <PrimaryButton onPress={handleHigherHint}>+</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 24,
    },
    buttonContainer: {
        flexDirection: "row",
    }
})