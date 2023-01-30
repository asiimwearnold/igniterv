// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Platform, StatusBar,SafeAreaView} from 'react-native';
import {Provider} from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                
              }}
            />
          </Stack.Navigator>
         {/* <HomeScreen /> */}
      </SafeAreaProvider>
      </NavigationContainer>
      
     
      
    </Provider>
     
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
   AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS==="android"? StatusBar.currentHeight:0
    }
});
