import React from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  RkCard, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import Photo from '../assets/images/intro.jpg';
import {scale} from '../utils/scale';
const moment = require('moment');

export default class StudyMaterials extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired
    }),
    materials: PropTypes.array.isRequired

  };

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    this.props.navigation.navigate('Article', { id: item.id });
  };
  renderImage(photo) {
    return  <Image rkCardImg source={Photo} />;
  }
  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
    >
      <RkCard rkType='blog' style={styles.card}>
        {this.renderImage(item.photo)}
        <View rkCardHeader style={styles.content}>
          <RkText style={styles.section}>{item.title}</RkText>
        </View>
        <View rkCardContent>
          <View>
            <RkText rkType='primary3 mediumLine' numberOfLines={2}>{item.description}</RkText>
          </View>
        </View>
        <View rkCardFooter>
          <View style={styles.userInfo}>
            {/*<Avatar style={styles.avatar} rkType='circle small' img={item.user.photo} />*/}
            <RkText rkType='header6'>{`${item.author.name}`}</RkText>
          </View>
          <RkText rkType='secondary2 hintColor'>{moment().add(new Date(), 'seconds').fromNow()}</RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.props.materials}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={styles.container}
    />
  );
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
  }
}));
