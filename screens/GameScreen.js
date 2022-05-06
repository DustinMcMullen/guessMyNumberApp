import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Title } from "../components/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";

export function GameScreen ({userNumber, onGameOver}) {

    const [lowerBound, setLowerBound] = useState(1);
    const [upperBound, setUpperBound] = useState(100)

    const compGuess = Math.floor( Math.random() * (upperBound - lowerBound) + lowerBound );

    useEffect( () => {
        if (userNumber === compGuess) {
            onGameOver();
        }
    }, [userNumber, compGuess, onGameOver] )

    if (compGuess === userNumber) {
        console.log("Computer Guessed your number!");
    }

    function handleLowerHint () {
        if (userNumber < compGuess){
            setUpperBound(compGuess);
        } else {
            Alert.alert("No Cheating!", 'We want a fair game.', [ {text: 'oops', style: 'cancel'} ]);
            return
        } 
    }

    function handleHigherHint () {
        if (userNumber > compGuess){
            setLowerBound(compGuess + 1);
        }  else {
            Alert.alert("No Cheating!");
            return
        } 
    }

    console.log("compGuess: ", compGuess);

    return(
        <View style={styles.gameContainer}>
            <Title>Computers Guess</Title>
            <NumberContainer>{compGuess}</NumberContainer>
            <View style={styles.hintContainer}>
                <Text>higher or lower?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleLowerHint}>-</PrimaryButton>
                    <PrimaryButton onPress={handleHigherHint}>+</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 24,
    },
    hintContainer: {
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
    }
})