import React from 'react';
import PropTypes from 'prop-types';
import {
  RkStyleSheet,
  RkText
} from 'react-native-ui-kitten';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleVertical,scale } from '../utils/scale';
import firebase from 'firebase';
class SearchScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.screen}
        scrollEnabled={false}
      >
        <RkText>
          Hledej
        </RkText>
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
  title:{
    fontSize: scale(26)
  },
  subTitle:{
    fontSize: scale(18)
  },
  content: {
    justifyContent: 'space-between',
    alignContent: 'center'
  }
}));

SearchScreen.protoTypes ={
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  })};
export default SearchScreen;
