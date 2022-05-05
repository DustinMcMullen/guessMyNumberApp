import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export function GameScreen ({userNumber}) {

    const [lowerBound, setLowerBound] = useState(1);
    const [upperBound, setUpperBound] = useState(100)

    const compGuess = Math.floor( Math.random() * (upperBound - lowerBound) + lowerBound );

    if (compGuess === userNumber) {
        console.log("Computer Guessed your number!");
    }

    function handleLowerHint () {
        if (userNumber < compGuess){
            setUpperBound(compGuess);
        } else {
            console.log("No Cheating!");
            return
        } 
    }

    function handleHigherHint () {
        if (userNumber > compGuess){
            setLowerBound(compGuess + 1);
        }  else {
            console.log("No Cheating!");
            return
        } 
    }

    console.log("compGuess: ", compGuess);

    return(
        <View style={styles.gameContainer}>
            <Text style={styles.compGuess}>{compGuess}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Lower" onPress={handleLowerHint} />
                <Button title="Higher" onPress={handleHigherHint} />
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    gameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    compGuess: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: "row",
    }
})