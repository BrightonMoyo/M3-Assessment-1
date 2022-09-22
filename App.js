
import  { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/Homepage'
 
const Stack = createNativeStackNavigator();
 
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
       
      
      <Stack.Screen name="Login Screen" component={Login} options={{headerShown:true}} />
      <Stack.Screen name="Homepage" component={Homepage}  />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});