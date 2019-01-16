import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  RkCard,
  RkStyleSheet,
  RkText,
  RkButton
} from 'react-native-ui-kitten';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scaleVertical, scale} from '../utils/scale';
import {ScrollView, TouchableOpacity, View} from 'react-native';

class ExamsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: '#4c69a5'}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.screen}
        scrollEnabled={false}
      >
        <ScrollView
          style={styles.root}
          contentContainerStyle={styles.container}>
          <RkCard rkType='blog' style={styles.card}>
            <View rkCardHeader style={styles.content}>
              <RkText style={styles.section}>ISA</RkText>
            </View>
            <View rkCardContent>
              <View>
                <RkText rkType='primary2 mediumLine' numberOfLines={2}>Free Dates of Exams</RkText>
                <RkButton rkType='header6' style={styles.button}><RkText rkType='primary2 mediumLine'>20.2.2019</RkText></RkButton>
                <RkButton rkType='header6' style={styles.button}><RkText rkType='primary2 mediumLine'>25.2.2019</RkText></RkButton>
                <RkButton rkType='header6' style={styles.button}><RkText rkType='primary2 mediumLine'>10.3.2019</RkText></RkButton>
              </View>
            </View>
          </RkCard>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 17,
  },
  section: {
    fontSize: scale(18)
  },
  button:{
    backgroundColor: '#ffff',
    border: 'none',
    fontColor: 'black'

  }
}));

ExamsScreen.protoTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  })
};
export default ExamsScreen;
