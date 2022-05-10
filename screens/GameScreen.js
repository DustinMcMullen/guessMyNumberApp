import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Title } from "../components/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Card } from "../components/Card";
import { InstructionText } from "../components/InstructionText";
import { GuessLog } from "../components/game/GuessLog";
import { Ionicons } from "@expo/vector-icons";

export function GameScreen ({userNumber, onGameOver}) {

    const [lowerBound, setLowerBound] = useState(1);
    const [upperBound, setUpperBound] = useState(100)
    const [numOfRounds, setNumOfRounds] = useState(1);
    const [guessRound, setGuessRound] = useState([]);

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
            setGuessRound( prevGuesRoud => [...prevGuesRoud, compGuess]);
        } else {
            Alert.alert("No Cheating!", 'We want a fair game.', [ {text: 'oops', style: 'cancel'} ]);
            return
        } 
    }

    function handleHigherHint () {
        if (userNumber > compGuess){
            setLowerBound(compGuess + 1);
            setNumOfRounds(prevRounds => prevRounds + 1);
            setGuessRound( prevGuesRoud => [compGuess, ...prevGuesRoud]);
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
                    <PrimaryButton onPress={handleLowerHint}><Ionicons name="md-remove" size="24" /></PrimaryButton>
                    <PrimaryButton onPress={handleHigherHint}><Ionicons name="md-add" size="24" /></PrimaryButton>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList data={guessRound} renderItem={(itemData) => <GuessLog guessRound={numOfRounds - itemData.index -1} guess={itemData.item} />} keyExtractor={guess => guess} ></FlatList>
            </View>
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
    },
    listContainer: {
        flex:1,
        padding: 16
    }
})