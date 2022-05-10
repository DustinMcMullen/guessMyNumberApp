import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export function GuessLog ({guessRound, guess}) {

    return(
        <View style={styles.guessContainer}>
            <Text style={styles.itemText}># {guessRound}</Text>
            <Text style={styles.itemText}>computer's guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})