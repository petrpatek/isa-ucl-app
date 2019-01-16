import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import { FontAwesome } from '@expo/vector-icons';

import { authUser } from '../actions/AppActions';
import { scaleVertical, scale } from '../utils/scale';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.signIn = this.signIn.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.getAuthFeedback = this.getAuthFeedback.bind(this);
  }

  componentDidMount(){
    // console.log(this.props.currentUser, 'USER');
    if(this.props.currentUser){
      this._goHome();
    }
  }

  renderImage() {
    return  <Image style={styles.image} source={require('../assets/images/ucl-logo.png')}/>;
  }

  signIn(){
    const {email,password} = this.state;
    this.props.authUser(email, password, this.props.db)
      .then(this._goHome);

  }

  onChangeText(text,type){
    const state = {};
    state[type] = text;
    this.setState(state);
  }

  getAuthFeedback(){
    return this.props.isLoggingIn ?
      <ActivityIndicator size="large" color="#002882" /> :
      <RkText style={styles.error}>{this.props.error}</RkText>;
  }
  _goHome(){
    this.props.navigation.navigate('Home');
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
    flex: 1,
    borderRadius: 16,
    height: scaleVertical(35),
  },
  footer: {},
  error: {
    fontSize: scaleVertical(14),
    color: 'red',
    minHeight: scaleVertical(40)
  },
}));

const mapDispatchToProps = (dispatch) => ({
  authUser: (email, password, db) => dispatch(authUser(email, password, db)),
});

const mapStateToProps = ({app}) => {
  return{
    isLoggingIn: app.isLoggingIn,
    error: app.error,
    db: app.db,
    currentUser: app.currentUser
  };};

LoginScreen.propTypes ={
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }),
  authUser: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  db: PropTypes.object.isRequired,
  currentUser: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
