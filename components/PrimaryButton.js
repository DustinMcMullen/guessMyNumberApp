import { View, Text, StyleSheet, Pressable } from "react-native"

export function PrimaryButton ({children, resetInputHandler=null, confirmInputHandler=null}) {

    function pressHandler () {
        if (children === "Reset") {
            resetInputHandler();
        } else if (children === "Confirm") {
            confirmInputHandler()
        }
    }

    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={ ({pressed})=> pressed ? [styles.buttonPressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={pressHandler} android_ripple={{color: '#640233'}}
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
        backgroundColor: '#72063c',
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