import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

export function InstructionText ({children}) {

    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 18,
        padding: 24,
        textAlign: 'center'
    },
})