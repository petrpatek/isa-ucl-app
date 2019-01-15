import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {RkButton, RkText, RkStyleSheet} from 'react-native-ui-kitten';
import {scale} from '../utils/scale';
import StudyMaterials from '../components/StudyMaterials';


export class SubjectsScreen extends React.Component {
  constructor(props){
    super(props);
    this.item = props.navigation.getParam('item');
    console.log(this.item);

    this.getStudyMaterials = this.getStudyMaterials.bind(this);
  }
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired
    }),
    items: PropTypes.array.isRequired,
  };

  static navigationOptions({navigation}) {
    console.log(navigation.state.params);
    return {
      title: navigation.state.params.item.title
    };
  }

  getStudyMaterials(){
    return <View>
      <StudyMaterials navigation={this.props.navigation} materials={this.item.studyMaterials}/>
    </View>;
  }

  render() {
    console.log(this.props, 'props');
    return (
      <View style={styles.root}>
        <View>
          <RkText style={styles.heading}>
          Study Materials
          </RkText>
          {this.getStudyMaterials()}
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
  },
  heading: {
    fontSize: scale(20),
    paddingLeft: 16,
    paddingTop: 16
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
