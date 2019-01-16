import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, TouchableHighlight, Modal} from 'react-native';
import {RkButton, RkText, RkStyleSheet, RkPicker} from 'react-native-ui-kitten';
import {scale} from '../utils/scale';
import StudyMaterials from '../components/StudyMaterials';


export class SubjectsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.navigation.getParam('item');
    this.state = {
      modalVisible: false
    };
    this.getStudyMaterials = this.getStudyMaterials.bind(this);
    this._toggleModal = this._toggleModal.bind(this);
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

  getStudyMaterials() {
    return <View>
      <StudyMaterials navigation={this.props.navigation} materials={this.item.studyMaterials}/>
    </View>;
  }

  _toggleModal() {
    this.setState((prevState) => ({modalVisible: !prevState.modalVisible}));
  }

  render() {
    console.log(this.props, 'props');
    return (
      <View style={styles.root}>
        <RkButton onPress={this._toggleModal}>
          Zapsat se na zkoušku
        </RkButton>
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{marginTop: 46, marginLeft: 16}}>
            <View>
              <RkText>Hello World!</RkText>

              <RkPicker
                title='Set Date'
                data={[
                  [{key: 1, value: 'Jun'},
                    {key: 2, value: 'Feb'},
                    {key: 3, value: 'Mar'},
                    {key: 4, value: 'Apr'}]
                ]}
                visible={this.state.pikerVisible}
                onConfirm={(data) => {
                }}
                onCancel={() => this.setState({pikerVisible: false})}/>
              <TouchableHighlight
                onPress={this._toggleModal}
              >
                <RkText>Hide Modal</RkText>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
