import { View, Text, StyleSheet, Pressable } from "react-native"
import { Colors } from "../utils/colors";

export function PrimaryButton ({ children, onPress }) {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={ ({pressed}) => pressed ? [styles.buttonPressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress} android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOutterContainer: {
        flex: 1,
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonPressed: {
        opacity: 0.5,
    }
})