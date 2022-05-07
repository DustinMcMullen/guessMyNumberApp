import { View, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

export function Card ({children}) {

    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})