import React from 'react';
import { Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { styles } from './SignUpScreen.styles';
import ic_user from '../../../assets/images/ic_user.svg';
import ic_email from '../../../assets/images/ic_email.svg';
import ic_password from '../../../assets/images/ic_password.svg';
import ic_key from '../../../assets/images/ic_key.svg';
import ic_eye from '../../../assets/images/ic_eye.svg';
import ic_eye_crossed from '../../../assets/images/ic_eye_crossed.svg';

export function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FanSoap</Text>
      <View style={styles.inputArea}>
        <View style={styles.focusView} >
          <TouchableOpacity
            style={styles.placeholderIcon}>
            <SvgXml xml={ic_user} />
          </TouchableOpacity>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
          >
          </TextInput>
        </View>
        <View style={styles.focusView} >
          <TouchableOpacity
            style={styles.placeholderIcon}>
            <SvgXml xml={ic_email} />
          </TouchableOpacity>
          <TextInput
            style={styles.inputText}
            placeholder="Email Address"
          >
          </TextInput>
        </View>
        
        <View style={styles.focusView} >
          <TouchableOpacity
            style={styles.placeholderIcon}>
            <SvgXml xml={ic_password} />
          </TouchableOpacity>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
          >
          </TextInput>
          <TouchableOpacity
            style={styles.passwordEye}>
            <SvgXml xml={ic_eye} />
          </TouchableOpacity>
        </View>

        <View style={styles.focusView} >
          <TouchableOpacity
            style={styles.placeholderIcon}>
            <SvgXml xml={ic_key} />
          </TouchableOpacity>
          <TextInput
            style={styles.inputText}
            placeholder="Confirm Password"
          >
          </TextInput>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signUpButton}
      >
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text>OR</Text>

      <Text>Continue with Google</Text>

      <Text>Already have an account?</Text>

      <Text>Sign In</Text>

    </View >
  )
}