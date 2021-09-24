import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { styles } from './SignUpScreen.styles';
import ic_user from '../../../assets/images/ic_user.svg';

export function SignUpScreen() {
  return (
    <View>
      <Text style={styles.title}>FanSoap</Text>
      <View>
        <SvgXml xml={ic_user} />
        <TextInput
          style={styles.inputText}
          placeholder="Name"
        >
        </TextInput>
      </View>
      <TextInput
        style={styles.inputText}
        placeholder="Email Address"
      >
      </TextInput>
      <TextInput
        style={styles.inputText}
        placeholder="Password"
      >
      </TextInput>
      <TextInput
        style={styles.inputText}
        placeholder="Confirm Password"
      >
      </TextInput>

      <Button
        title="SIGNUP"
      >
      </Button>

      <Text>OR</Text>

      <Text>Continue with Google</Text>

      <Text>Already have an account?</Text>

      <Text>Sign In</Text>

    </View >
  )
}