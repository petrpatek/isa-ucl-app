import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {RkButton, RkText, RkStyleSheet} from 'react-native-ui-kitten';
import SubjectList from '../components/SubjectList';
import {scale} from '../utils/scale';


export class SubjectsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAll: false
    };
    this._toggleAll = this._toggleAll.bind(this);
  }
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

  _getAll(){
    return <View>
      <View style={styles.all}>
        <RkText style={styles.allHeading}>
        All Subjects
        </RkText>
      </View>
      <SubjectList items={[{title: 'mie', id: 'test'}]} route={'Subject'}/>
    </View>;
  }

  _toggleAll(){
    this.setState(prevState=>({showAll: !prevState.showAll}));
  }

  render() {
    return (
      <View style={styles.root}>
        <View>
          <SubjectList items={this.props.items} navigation={this.props.navigation} route={'Subject'}/>
        </View>
        {this.state.showAll && this._getAll()}
        <View style={styles.buttonWrapper}>
          <View>
            <RkButton rkType="primary" onPress={this._toggleAll}>
              {this.state.showAll ?'Show less':  'Show all' }
            </RkButton>
          </View>
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
    justifyContent: 'space-between',
  },
  all: {
    alignItems: 'center'
  },
  allHeading: {
    fontSize: scale(20)
  },
  buttonWrapper: {
    flexGrow: 1,
    alignItems: 'center'
  },

}));
const mapStateToProps = ({subjects}) => {
  return {
    items: subjects.items
  };
};


export default connect(mapStateToProps)(SubjectsScreen);
