import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
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
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#1C7FB8',
    borderRadius: 3,
  },
  signUpText: {
    textAlign: 'center',
    color: 'white',
    padding: 9,
  },
  orDesignView: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 24,
  },
  lineForDesign: {
    height: 2,
    width: '45%',
    backgroundColor: '#1C6E9D',
    alignSelf: 'center',
  },
  orText: {
    marginHorizontal: 20,
  },
})