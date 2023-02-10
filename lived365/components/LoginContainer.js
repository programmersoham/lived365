 import { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import LoginScreen from 'react-native-login-screen';
import Signup from './SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as EmailValidator from 'email-validator';

const Stack = createStackNavigator();
 
  const LoginContainer = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);
  const handleLoginPress = (email) => {
    setEmail(email);
          setValid(EmailValidator.validate(email));
        
    if (valid) {
      // proceed with loggin in
      alert('Loggin in ')

    }
  else{
   
    // Show an error message to the user
    alert('Please enter a valid email address');
  } 
    
  };

const handleSignupPress = () => {
      navigation.navigate('SignupPage');
      };

  return (
    <View style={styles.container}>
      <LoginScreen disableSocialButtons="true"
        
        logoImageSource={require('../assets/snack-icon.png')}
        onEmailChange={() => {}}
        onSignupPress={handleSignupPress}
        onLoginPress={handleLoginPress}
        onPasswordChange={(password) => {}}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginContainer">
          <Stack.Screen
            name="LoginContainer"
            component={LoginContainer}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="SignupPage"
            component={Signup}
            options={{ title: 'Sign Up' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;