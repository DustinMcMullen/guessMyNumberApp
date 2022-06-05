import { StyleSheet, View, Image, Text, useWindowDimensions, Dimensions } from "react-native";
import { Title } from "../components/Title";
import { InstructionText } from "../components/InstructionText";
import { PrimaryButton } from '../components/PrimaryButton';
import { Colors } from "react-native/Libraries/NewAppScreen";

export function GameOverScreen ({restartGame, userNumber, rounds}) {

    const {height} = useWindowDimensions();
    
    function handleRestartGame () {
        restartGame(true);
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.successImage} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <InstructionText customStyle={{paddingTop: 24, padding: 0, color: Colors.primary800}}>Computer guessed your number:</InstructionText>
                <InstructionText customStyle={{padding: 0, color: Colors.primary800}}><Text style={{fontFamily: 'open-sans-bold', fontSize: 24,}}>'{userNumber}'</Text></InstructionText>
                <InstructionText customStyle={{padding: 0, paddingBottom: 32, color: Colors.primary800}}>In <Text style={{fontFamily: 'open-sans-bold'}}>{rounds}</Text> rounds!</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleRestartGame}>Restart Game</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

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
        width: deviceWidth < 388 ? 150 : 200,
        height: deviceWidth < 388 ? 150 : 200,
        borderRadius: deviceWidth < 388 ? 75 : 100,
        borderWidth: 3,
        marginTop: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 12,
        paddingHorizontal: 10
    }
})