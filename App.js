import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/GameScreen';

export default function App() {

const [userNumber, setUserNumber] = useState();

function chosenNumberHandler (chosenNumber) {
  setUserNumber(chosenNumber);
}



  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundImage.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {!userNumber ? <StartGameScreen chosenNumberHandler={chosenNumberHandler} /> : <GameScreen userNumber={userNumber} />}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ddb52f',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.15
  }
});
