import React from 'react';
import {
  FlatList,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard,
  InteractionManager,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import _ from 'lodash';
import { FontAwesome } from '@expo/vector-icons';
import { data } from '../data';
import {scale, scaleVertical} from '../utils/scale';

import PropTypes from "prop-types";

const functionTypes = {
  goBack: PropTypes.func,
  navigate: PropTypes.func,
};

const shape = (propShape) => PropTypes.shape(propShape);

const NavigationType = shape({
  goBack: functionTypes.goBack.isRequired,
  navigate: functionTypes.navigate.isRequired,
});

const moment = require('moment');

export class ChatScreen extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = ({ navigation }) => {
    const userId = navigation.state.params ? navigation.state.params.userId : undefined;
    const user = data.getUser(userId);
    return ({
      headerTitle: ChatScreen.renderNavigationTitle(navigation, user),
      // headerRight: ChatScreen.renderNavigationAvatar(navigation, user),
    });
  };

  constructor(props) {
    super(props);
    const userId = this.props.navigation.getParam('userId', undefined);
    this.state = {
      data: data.getConversation(userId),
    };
  }

  setListRef = (ref) => {
    this.listRef = ref;
  };

  extractItemKey = (item) => `${item.id}`;

  scrollToEnd = () => {
    if (Platform.OS === 'ios') {
      this.listRef.scrollToEnd();
    } else {
      _.delay(this.listRef.scrollToEnd, 100);
    }
  };

  onInputChanged = (text) => {
    this.setState({ message: text });
  };

  onSendButtonPressed = () => {
    if (!this.state.message) {
      return;
    }
    this.state.data.messages.push({
      id: this.state.data.messages.length, time: 0, type: 'out', text: this.state.message,
    });
    this.setState({ message: '' });
    this.scrollToEnd(true);
  };

  static onNavigationTitlePressed = (navigation, user) => {
    navigation.navigate('ProfileV1', { id: user.id });
  };

  static renderNavigationTitle = (navigation, user) => (
    <TouchableOpacity onPress={() => ChatScreen.onNavigationTitlePressed(navigation, user)}>
      <View style={styles.header}>
        <RkText rkType='header5'>{`${user.firstName} ${user.lastName}`}</RkText>
        <RkText rkType='secondary3 secondaryColor'>Online</RkText>
      </View>
    </TouchableOpacity>
  );

  renderDate = (date) => (
    <RkText style={styles.time} rkType='secondary7 hintColor'>
      {moment().add(date, 'seconds').format('LT')}
    </RkText>
  );

  renderItem = ({ item }) => {
    const isIncoming = item.type === 'in';
    const backgroundColor = isIncoming
      ? '#28305a'
      : '#2f396b';
    const itemStyle = isIncoming ? styles.itemIn : styles.itemOut;

    return (
      <View style={[styles.item, itemStyle]}>
        {!isIncoming && this.renderDate(item.time)}
        <View style={[styles.balloon, { backgroundColor }]}>
          <RkText rkType='primary2 mediumLine chat' style={{ paddingTop: 5, color: 'white' }}>{item.text}</RkText>
        </View>
        {isIncoming && this.renderDate(item.time)}
      </View>
    );
  };

  render = () => (
    <RkAvoidKeyboard
      style={styles.container}
      onResponderRelease={Keyboard.dismiss}>
      <FlatList
        ref={this.setListRef}
        extraData={this.state}
        style={styles.list}
        data={this.state.data.messages}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
      />
      <View style={styles.footer}>
        <RkButton onPress={this.onSendButtonPressed} style={styles.send} rkType='circle highlight'>
          <Image source={require('../assets/icons/sendIcon.png')} />
        </RkButton>
        <View>
          <RkTextInput style={{ width: 180, height: scaleVertical(20)}}
            onFocus={this.scrollToEnd}
            onBlur={this.scrollToEnd}
            onChangeText={this.onInputChanged}
            value={this.state.message}
            rkType='row sticker'
            placeholder="Add a comment..."
          />
        </View>
      </View>
    </RkAvoidKeyboard>

  )
}

const styles = RkStyleSheet.create(theme => ({
  header: {
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    minHeight: 60,
    padding: 10,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
  },
  itemIn: {
    color: 'white'
  },
  itemOut: {
    alignSelf: 'flex-end',
    color: 'white'
  },
  balloon: {
    maxWidth: scale(250),
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
  },
  plus: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 7,
  },
  send: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
}));
