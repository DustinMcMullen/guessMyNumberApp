import { StyleSheet, View, Image, Text, useWindowDimensions, Dimensions } from "react-native";
import { Title } from "../components/Title";
import { InstructionText } from "../components/InstructionText";
import { PrimaryButton } from '../components/PrimaryButton';
import { Colors } from "react-native/Libraries/NewAppScreen";

export function GameOverScreen ({restartGame, userNumber, rounds}) {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }

    if (height < 480) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };
    
    function handleRestartGame () {
        restartGame(true);
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={[styles.successImage, imageStyle]} source={require('../assets/images/success.png')} />
            </View>
            <View style={styles.textContainer}>
                <InstructionText customStyle={{padding: 0, color: Colors.primary800}}>Computer guessed your number  </InstructionText>
                <InstructionText customStyle={{padding: 0, color: Colors.primary800}}><Text style={{fontFamily: 'open-sans-bold', fontSize: 24,}}>{userNumber}</Text></InstructionText>
                <InstructionText customStyle={{padding: 0, color: Colors.primary800}}> In <Text style={{fontFamily: 'open-sans-bold'}}>{rounds}</Text> rounds!</InstructionText>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleRestartGame}>Restart Game</PrimaryButton>
                </View>
            {/* </View> */}
        </View>
    )
}

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    imageContainer: {
        alignItems: 'center',
    },
    successImage: {
        borderWidth: 3,
        marginTop: 24,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 32,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 12,
        paddingHorizontal: 10
    }
})