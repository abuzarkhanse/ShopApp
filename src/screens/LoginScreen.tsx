import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // demo only
    navigation.replace('Home');
  };

  const handleGoogleLogin = () => {
    // demo only – no real Google auth
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top logo */}
      <View style={styles.logoContainer}>
        {/* replace the require path if your image is elsewhere */}
        <Image
          source={require('../../assets/images/1_Login.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Name input (looks like "John Doe" text + underline) */}
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="default"
        />
        <View style={styles.underline} />
      </View>

      {/* Password input */}
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry
        />
        <View style={styles.underline} />
      </View>

      {/* Forgot password */}
      <View style={styles.forgotRow}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* SIGN IN button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* OR divider */}
      <View style={styles.orRow}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      {/* Google login button */}
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <View style={styles.googleContent}>
          <Text style={styles.googleIcon}>G</Text>
          <Text style={styles.googleText}>LOGIN USING GOOGLE</Text>
        </View>
      </TouchableOpacity>

      {/* Create account link */}
      <TouchableOpacity
        style={styles.createAccountWrapper}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const BLUE = '#0063CC'; // adjust if you want closer shade

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE,
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 80,
  },
  logo: {
    width: 180,
    height: 180,
  },
  fieldContainer: {
    marginBottom: 28,
  },
  input: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  underline: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginTop: 8,
  },
  forgotRow: {
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  forgotText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  signInText: {
    color: BLUE,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  orText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginHorizontal: 12,
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    justifyContent: 'center',
    marginBottom: 40,
  },
  googleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    color: '#DB4437',
    fontSize: 26,
    fontWeight: '700',
    marginRight: 12,
  },
  googleText: {
    color: '#DB4437',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  createAccountWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountText: {
    color: '#FFFFFF',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
