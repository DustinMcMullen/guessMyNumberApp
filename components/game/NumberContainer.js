import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export function NumberContainer ({children}) {
    return (
        <View style={styles.compGuessContainer}>
            <Text style={styles.compGuess}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    compGuessContainer: {
        borderWidth: 4,
        borderRadius: 8,
        borderColor: Colors.accent500,
        color: Colors.accent500,
        padding: 24,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    compGuess: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    },
})