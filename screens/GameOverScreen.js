import { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";

export function GameOverScreen ({restartGame, rounds}) {
    
    function handleRestartGame () {
        restartGame(true);
    }

    return(
        <View>
            <Text>Game is over!</Text>
            <Text>Computer guessed your number in {rounds} rounds!</Text>
            <Button title="Restart Game" onPress={handleRestartGame} />
        </View>
    )
}