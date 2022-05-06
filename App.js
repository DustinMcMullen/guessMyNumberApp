import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

export default function App() {

  let screenSource = <StartGameScreen chosenNumberHandler={chosenNumberHandler} />

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  function chosenNumberHandler (chosenNumber) {
    setUserNumber(chosenNumber);
  }

  function gameOverHandler () {
    setGameIsOver(true);
  }

  if (userNumber) {
    screenSource = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver) {
    screenSource = <GameOverScreen />
  }


  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/backgroundImage.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {/* {!userNumber ? <StartGameScreen chosenNumberHandler={chosenNumberHandler} /> : <GameScreen userNumber={userNumber} />} */}
          {screenSource}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
