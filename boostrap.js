import * as Font from 'expo-font';

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
    });
  } catch (e) {
    console.log(e);
  }
}
