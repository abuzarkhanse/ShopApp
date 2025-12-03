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

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const BLUE = '#0063CC';

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Demo only – no real backend
    // You can change this to navigation.replace('Login') if you prefer
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/1_Login.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Full name */}
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full Name"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <View style={styles.underline} />
      </View>

      {/* Email */}
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.5)"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.underline} />
      </View>

      {/* Birth Date with dropdown arrow */}
      <View style={styles.fieldContainer}>
        <View style={styles.rowField}>
          <TextInput
            style={[styles.input, styles.flexInput]}
            value={birthDate}
            onChangeText={setBirthDate}
            placeholder="Birth Date"
            placeholderTextColor="rgba(255,255,255,0.5)"
          />
          <Text style={styles.dropdownIcon}>⌄</Text>
        </View>
        <View style={styles.underline} />
      </View>

      {/* Password */}
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

      {/* Confirm Password */}
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(255,255,255,0.5)"
          secureTextEntry
        />
        <View style={styles.underline} />
      </View>

      {/* SIGN UP button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Bottom text link */}
      <View style={styles.bottomWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Text style={styles.bottomTextUnderline}>Login Here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE,
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 60,
  },
  logo: {
    width: 180,
    height: 180,
  },
  fieldContainer: {
    marginBottom: 26,
  },
  input: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  underline: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginTop: 8,
  },
  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexInput: {
    flex: 1,
  },
  dropdownIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 8,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  signUpText: {
    color: BLUE,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  bottomWrapper: {
    alignItems: 'center',
  },
  bottomText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  bottomTextUnderline: {
    textDecorationLine: 'underline',
  },
});
