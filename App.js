import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';
import { useFonts } from "expo-font";
import AppLoading, { apploading } from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [rounds, setRounds] = useState();

  const [fontsLoading, ] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoading) {
    return <AppLoading />;
  }


  let screenSource = <StartGameScreen chosenNumberHandler={chosenNumberHandler} />

  function chosenNumberHandler (chosenNumber) {
    setUserNumber(chosenNumber);
  }

  function gameOverHandler (numOfRounds) {
    setGameIsOver(true);
    setRounds(numOfRounds);
  }

  function restartGameHandler () {
    setUserNumber();
    setGameIsOver(false);
  }

  if (userNumber) {
    screenSource = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screenSource = <GameOverScreen restartGame={restartGameHandler} userNumber={userNumber} rounds={rounds} />
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
