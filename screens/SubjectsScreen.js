import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {RkButton, RkStyleSheet} from 'react-native-ui-kitten';
import SubjectList from '../components/SubjectList';


export class SubjectsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired
    }),
    items: PropTypes.array.isRequired,
  };
  static navigationOptions = {
    title: 'My Subjects'.toUpperCase(),
  };

  render() {
    return (
      <View style={styles.root}>
        <View>
          <SubjectList items={this.props.items} navigation={this.props.navigation}/>
        </View>
        <View style={styles.buttonWrapper}>
          <RkButton rkType="primary">
            Show all Subjects
          </RkButton>
        </View>
      </View>
    );

  }
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.scroll,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },

}));
const mapStateToProps = ({subjects}) => {
  return {
    items: subjects.items
  };
};


export default connect(mapStateToProps)(SubjectsScreen);
