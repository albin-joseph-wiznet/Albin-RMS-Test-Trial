import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import ComponentsScreen from "./screens/ComponentsScreen";
import ListScreen from "./screens/ListScreen";
import ImageScreen from './screens/ImageScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import ColorScreen from './src/screens/ColorScreen';
// import SquareScreen from './src/screens/SquareScreen';
// import TextScreen from './src/screens/TextScreen';
// import BoxScreen from './src/screens/BoxScreen';
import SignUpScreen from './screens/SignUpScreen';


navigator = createStackNavigator(
    {
      Home: HomeScreen,
      Components: ComponentsScreen,
      List: ListScreen,
      Image: ImageScreen,
      SignUp:SignUpScreen,
      // Counter: CounterScreen,
      // Color: ColorScreen,
      // Square: SquareScreen,
      // Text: TextScreen,
      // Box: BoxScreen,
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        title: "RMS App"
      }
    }
  );
  
   export default createAppContainer(navigator);