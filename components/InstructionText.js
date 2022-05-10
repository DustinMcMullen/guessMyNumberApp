import { Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

export function InstructionText ({children, customStyle=null}) {

    return (
        <Text style={[styles.instructionText, customStyle]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontFamily: 'open-sans',
        fontSize: 18,
        padding: 24,
        textAlign: 'center'
    },
})