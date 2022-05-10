import { StyleSheet, Text } from "react-native";
import { Colors } from "../utils/colors";

export function Title ({children}) {
    return(
        <Text style={styles.title}>{children}</Text>
    ) 
}

const styles =StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    },
})