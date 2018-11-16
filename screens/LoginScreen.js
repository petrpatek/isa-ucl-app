import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';
import { scaleVertical,scale } from '../utils/scale';
class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      isAuthInProgress: false
    };
    this.signIn = this.signIn.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.getAuthFeedback = this.getAuthFeedback.bind(this);
  }
  renderImage() {
    return  <Image style={styles.image} source={require('../assets/images/ucl-logo.png')}/>;
  }

  signIn(){
    const {email,password} = this.state;
    console.log(email,password, 'testum');
    this.setState({isAuthInProgress: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message}))
      .finally(()=> this.setState({isAuthInProgress: false}));
  }

  onChangeText(text,type){
    const state = {};
    state[type] = text;
    this.setState(state);
  }

  getAuthFeedback(){
    return this.state.isAuthInProgress ?
      <ActivityIndicator size="large" color="#002882" /> :
      <RkText style={styles.error}>{this.state.errorMessage}</RkText>;

  }

  render(){
    return(
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.screen}
        scrollEnabled={false}
      >
        <View style={styles.header}>
          {this.renderImage()}
          <RkText rkType='light' style={styles.title}>Školní informační systém</RkText>
          <RkText style={styles.subTitle}>Unicorn College</RkText>
          {this.getAuthFeedback()}
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput
              rkType='rounded'
              placeholder='Email'
              onChangeText={(text)=>this.onChangeText(text, 'email')}
              autoCapitalize="none"
            />
            <RkTextInput
              rkType='rounded'
              placeholder='Heslo'
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(text)=>this.onChangeText(text, 'password')}
            />
          </View>
          <View style={styles.signIn}>
            <RkButton rkType='primary' style={styles.button} onPress={this.signIn} >Přihlásit se</RkButton>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear' onPress={this.onSignUpButtonPressed}>
                <RkText rkType='header6'>Sign up now</RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    height: scaleVertical(180),
    resizeMode: 'contain',
  },
  header: {
    paddingBottom: scaleVertical(1),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title:{
    fontSize: scale(26)
  },
  subTitle:{
    fontSize: scale(18)
  },
  content: {
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  save: {
    marginVertical: 20,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signIn: {
    flexDirection: 'row',
    marginTop: scale(30),
    marginBottom: scale(30)
  },
  button: {
    flex: 1
  },
  footer: {},
  error: {
    fontSize: scaleVertical(14),
    color: 'red'
  },
}));

LoginScreen.protoTypes ={
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  })};
export default LoginScreen;
