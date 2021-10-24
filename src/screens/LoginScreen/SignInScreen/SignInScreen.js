import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { styles } from './SignInScreen.styles';
import { images, icons } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

export function SignUpScreen() {
  return (
    <LinearGradient colors={['#042131', '#111A1F']}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={[styles.title, { color: '#FFFFFF' }]}>FanSoap</Text>
          <View style={styles.inputArea}>
            
            <View style={styles.focusView}>
              <TouchableOpacity style={styles.placeholderIcon}>
                <SvgXml xml={images.email} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bar}>
                <SvgXml xml={images.lineBar} />
              </TouchableOpacity>
              <TextInput
                style={styles.inputText}
                placeholder="Email Address"
                textContentType="emailAddress"
                placeholderTextColor="#B5B5B5"
                autoCapitalize="none"
                keyboardType="email-address"></TextInput>
            </View>

            <View style={styles.focusView}>
              <TouchableOpacity style={styles.placeholderIcon}>
                <SvgXml xml={images.password} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bar}>
                <SvgXml xml={images.lineBar} />
              </TouchableOpacity>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                textContentType="password"
                placeholderTextColor="#B5B5B5"
                secureTextEntry={true}></TextInput>
              <TouchableOpacity style={styles.passwordEye}>
                <SvgXml xml={images.eye} />
              </TouchableOpacity>
            </View>

            
          </View>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.orDesignView}>
            <View style={styles.lineForDesign}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={styles.lineForDesign}></View>
          </View>

          <View style={styles.content}>
            <Text style={styles.element}>Continue with Google</Text>

            <TouchableOpacity style={styles.element}>
              <Image
                source={icons.googleIcon}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.element}>Already have an account?</Text>

            <Text style={styles.signin}>Sign Up</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
