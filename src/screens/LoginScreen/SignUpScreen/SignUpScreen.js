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
            textContentType='name'
            autoCapitalize='words'
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
            textContentType='emailAddress'
            autoCapitalize='none'
            keyboardType='email-address'
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
            textContentType='password'
            secureTextEntry={true}
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
            textContentType='password'
            secureTextEntry={true}
          >
          </TextInput>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signUpButton}
      >
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.orDesignView}>
        <View style={styles.lineForDesign}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.lineForDesign}></View>
      </View>

      <Text>Continue with Google</Text>

      <Text>Already have an account?</Text>

      <Text>Sign In</Text>

    </View >
  )
}