import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '@expo/vector-icons';
import { scaleVertical,scale } from '../utils/scale';
class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  renderImage() {
    return  <Image style={styles.image} source={require('../assets/images/ucl-logo.png')}/>;
  }
  signIn(){
    this.props.navigation.navigate('Home');
  }
  render(){
    return(
      <View style={styles.screen}>
        <View style={styles.header}>
          {this.renderImage()}
          <RkText rkType='light' style={styles.title}>Školní informační systém</RkText>
          <RkText style={styles.subTitle}>Unicorn College</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Email' />
            <RkTextInput rkType='rounded' placeholder='Heslo' secureTextEntry />
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
      </View>
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
}));

LoginScreen.protoTypes ={
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  })};
export default LoginScreen;
