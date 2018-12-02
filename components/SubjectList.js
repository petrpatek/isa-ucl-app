import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  RkButton, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import {Icon} from 'expo';

const paddingValue = 8;

export class SubjectList extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired
    }),
    items: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    const screenWidth = Dimensions.get('window').width;
    this.itemSize = {
      width: (screenWidth - (paddingValue * 9)) / 3,
      height: (screenWidth - (paddingValue * 9)) / 3,
    };
  }

  onItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  renderItems = () => this.props.items.map(item => (
    <RkButton
      rkType='square shadow'
      style={{ ...this.itemSize }}
      key={item.id}
      onPress={() => this.onItemPressed(item)}>
      <Icon.Ionicons
        name={item.icon}
        style={Object.assign({}, styles.icon, {color: item.color})}
        size={44}
      >
      </Icon.Ionicons>
      <RkText>{item.title}</RkText>
    </RkButton>
  ));

  render = () => (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.rootContainer}>
      {this.renderItems()}
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginBottom: 16,
  },
}));

export default SubjectList;
