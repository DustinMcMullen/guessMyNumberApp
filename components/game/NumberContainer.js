import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils/colors";

export function NumberContainer ({children}) {

    return (
        <View style={styles.compGuessContainer}>
            <Text style={styles.compGuess}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    compGuessContainer: {
        borderWidth: 4,
        borderRadius: 8,
        borderColor: Colors.accent500,
        color: Colors.accent500,
        padding: deviceWidth < 380 ? 12: 24,
        margin: deviceWidth < 380 ? 12 : 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    compGuess: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
    },
})