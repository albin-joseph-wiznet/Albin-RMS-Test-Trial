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

//import LandingScreen from './screens/LandingScreen';
//import NotificationsScreen from "./screens/NotificationsScreen";
//import MyJobsScreen from "./screens/MyJobsScreen";
//import MyProfileScreen from './screens/MyProfileScreen';
//import DuruLogoScreen from './src/screens/DuruScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassScreen from './screens/ForgotPassScreen';
import TermsScreen from './screens/TermsScreen';
import PrivacyScreen from './screens/PrivacyScreen';

navigator = createStackNavigator(
    {
      Home: HomeScreen,
      Components: ComponentsScreen,
      List: ListScreen,
      Image: ImageScreen,
      //Landing: LandingScreen,
      SignIn: SignInScreen,
      Home: HomeScreen,
      //NotifyScreen: NotificationsScreen,
      //MyJobs: MyJobsScreen,
      //MyProfile: MyProfileScreen,
      ForgotPass: ForgotPassScreen,
      SignUp: SignUpScreen,
      TermsService: TermsScreen,
      PrivacyPolicy: PrivacyScreen,
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        title: "RMS App"
      }
    }
  );
  
   export default createAppContainer(navigator);