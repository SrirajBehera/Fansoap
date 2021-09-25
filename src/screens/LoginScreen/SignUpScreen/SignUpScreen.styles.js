import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  inputArea: {
    marginVertical: 40,
  },
  inputText: {
    width: '80%',
    paddingHorizontal: 10,
    // borderWidth: 2,
    marginHorizontal: 30,
    fontSize: 16,
  },
  focusView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#1C6E9D',
    borderWidth: 2,
    borderRadius: 7,
    margin: 10,
  },
  placeholderIcon: {
    top: 12.5,
    left: 15,
  },
  passwordEye: {
    right: 60,
    top: 12.5,
  },
  signUpButton: {
    width: '50%',
    // marginHorizontal: 50,
    alignSelf: 'center',
    borderWidth: 2,
  },
  signUpText: {
    textAlign: 'center',
  },
})