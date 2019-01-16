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
import {ScrollView, TouchableHighlight, View, Modal} from 'react-native';

class ExamsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this._toggleModal = this._toggleModal.bind(this);
  }

  static navigationOptions = {
    title: 'Exams'.toUpperCase(),
  };

  _toggleModal() {
    this.setState(prev => ({modal: !prev.modal}));
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: 'white'}}
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
                <RkButton rkType='header6' style={styles.button} onPress={this._toggleModal}>
                  <RkText rkType='primary2 mediumLine'>20.2.2019</RkText>
                </RkButton>
                <RkButton rkType='header6' style={styles.button} onPress={this._toggleModal}>
                  <RkText rkType='primary2 mediumLine'>25.2.2019</RkText>
                </RkButton>
                <RkButton rkType='header6' style={styles.button} onPress={this._toggleModal}>
                  <RkText rkType='primary2 mediumLine'>10.3.2019</RkText>
                </RkButton>
              </View>
            </View>
          </RkCard>
          <Modal
            animationType="none"
            transparent={false}
            visible={this.state.modal}
          >
            <View style={styles.modal}>
              <RkText rkType="heading1" style={{fontSize: scaleVertical(20)}}>Are you sure you want to be assigned to
                this exam ?</RkText>
              <RkText>Subject: ISA</RkText>
              <RkText>Date: 20.2.2019</RkText>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between', flex: 1, marginBottom: 48}}>
                <RkButton rkType="success" onPress={this._toggleModal}>Yes</RkButton>
                <RkButton rkType="danger" onPress={this._toggleModal}>No</RkButton>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  root: {
    backgroundColor: 'white',
  },
  modal: {
    marginTop: 46,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
  button: {
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
