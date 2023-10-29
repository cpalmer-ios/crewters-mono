import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  appleBtn: { height: 44, width: 200 },
  keyboardView: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 'auto',
    width: 350,
    alignSelf:'center',
    marginBottom: -80
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '33%',
  },
  logo: {
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 200,
  },
  textInput: {
    backgroundColor: '#3a3a3a',
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    paddingRight: 6,
    marginBottom: 20,
  },
  login: {
    backgroundColor: '#FFF',
    width: '84%',
    color: '#000',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 225,
    marginBottom: 10 
  },
  loginText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  text: {
    flexDirection: 'row',
  },
  help: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  seperator: {
    borderBottomColor: '#3a3a3a',
    borderBottomWidth: 0.6,
    width: '37%',
    marginLeft: 5,
    marginRight: 5,
  },
  seperatorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  faceText: {
    color: '#329CFA',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  bottom: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  line: {
    borderBottomColor: '#3a3a3a',
    borderBottomWidth: 0.6,
    width: '100%',
    marginTop: 10,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    height: '10%',
    marginTop: '20%'
  },
});
