import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  signupScreen:{
  backgroundColor:"#042131"
  },
  container: {
    margin: 40,
  },
  content:{
   display:'flex',
   flexDirection: 'column',
  },
  element:{
    paddingVertical:10,
    alignSelf:'center',
    color:'#B5B5B5',
    fontSize: 17,
    lineHeight:15,
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
    marginHorizontal: 10,
    fontSize: 16,
    lineHeight: 19,
    color: "#B5B5B5",
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
    top: 11,
    left: 15,
  },
  bar: {
    top: 13.5,
    left: 15,
  },
  passwordEye: {
    right: 40,
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
    color:"#8E8E8E",
  },
  icon:{
    width:'35px',
    height:'35px',
  },
  signin: {
    paddingVertical:10,
    alignSelf:'center',
    color:'#38A4E1',
    fontSize: 17,
    lineHeight:15,
  }
})