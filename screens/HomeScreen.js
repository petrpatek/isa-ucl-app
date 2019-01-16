import React from 'react';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {
    RkText, RkStyleSheet,
} from 'react-native-ui-kitten';
import { Avatar } from '../components/avatar/avatar';
import PropTypes from 'prop-types';
import formatNumber from '../utils/textUtils';
import Photo from '../assets/images/user-photo.jpg';
import data from './notifications';


import { WebBrowser } from 'expo';
import {scale, scaleVertical} from "../utils/scale";

const shape = (propShape) => PropTypes.shape(propShape);

const functionTypes = {
    goBack: PropTypes.func,
    navigate: PropTypes.func,
};

const NavigationType = shape({
    goBack: functionTypes.goBack.isRequired,
    navigate: functionTypes.navigate.isRequired,
});


export default class HomeScreen extends React.Component {

    static propTypes = {
        //navigation: NavigationType.isRequired,
    };
    static navigationOptions = {
        title: 'Student Index'.toUpperCase(),
    };


    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Subject', 'Evaluation'],
            tableData: [
                ['Data security', '34'],
                ['ICT infrastructure', '60'],
                ['Business English B2', '32'],
                ['Business and ICT', '32'],
                ['Information systems infrasctructure introduction', '16'],
            ],
            data: data,
        }
    }


    renderAttachment = (item) => {
        const hasAttachment = item.attach !== undefined;
        return hasAttachment ? <View /> : <Image style={styles.attachment} source={item.attach} />;
    };

    renderItem = ({ item }) => (
        <View style={styles.notContainer}>
            {item.user && item.user.photo && <Avatar
                img={item.user.photo}
                rkType='circle'
                style={styles.avatar}
                badge={item.type}
            />}
            <View style={styles.notContent}>
                <View style={styles.notMainContent}>
                    <View style={styles.text}>
                        <RkText>
                            {item.user && item.user.firstName && item.user.lastName && <RkText rkType='header6'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>}
                            <RkText rkType='primary2'> {item.description}</RkText>
                        </RkText>
                    </View>
                    <RkText
                        rkType='secondary5 hintColor'>{item.time + ' seconds ago'}
                    </RkText>
                </View>
                {this.renderAttachment(item)}
            </View>
        </View>
    );

  render() {
    return (

        <ScrollView style={styles.root}>
            <View style={[styles.header, styles.bordered]}>
                <Avatar img={Photo} rkType='big' />
                <RkText rkType='header1'>{"Jan Bárta"}</RkText>
            </View>
            <View style={[styles.userInfo, styles.bordered]}>
                <View style={styles.section}>
                    <RkText rkType='header3' style={styles.space}>{69}</RkText>
                    <RkText rkType='secondary1 hintColor'>Credits</RkText>
                </View>
                <View style={styles.section}>
                    <RkText rkType='header3' style={styles.space}>{formatNumber(18)}</RkText>
                    <RkText rkType='secondary1 hintColor'>Passed subjects</RkText>
                </View>
                <View style={styles.section}>
                    <RkText rkType='header3' style={styles.space}>{"3th"}</RkText>
                    <RkText rkType='secondary1 hintColor'>Year of study</RkText>
                </View>
            </View>
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 1.5, borderColor: '#c8e1ff'}}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.state.tableData} textStyle={styles.text}/>
                </Table>
            </View>
            <FlatList
                style={styles.root}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={this.extractItemKey}
            />
        </ScrollView>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base,
    },
    header: {
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 17,
    },
    avatar: {
            width: scale(50),
            height: scaleVertical(50)
    },
    userInfo: {
        flexDirection: 'row',
        paddingVertical: 18,
    },
    bordered: {
        borderBottomWidth: 1,
        borderColor: "#c8e1ff",
    },
    section: {
        flex: 1,
        alignItems: 'center',
    },
    space: {
        marginBottom: 3,
        fontWeight: "bold"
    },
    separator: {
        backgroundColor: theme.colors.border.base,
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 0,
        width: 1,
        height: 42,
    },
    buttons: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    button: {
        flex: 1,
        alignSelf: 'center',
    },
    container: { flex: 1, paddingBottom: 8, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: {
        marginBottom: 8,
        marginLeft: 8,
        marginTop: 8,
        textAlign: "center"
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
    },
    mainContent: {
        marginRight: 60,
    },
    img: {
        height: 50,
        width: 50,
        margin: 0,
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50,
    },
    notContainer: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        borderColor: "#c8e1ff",
        alignItems: 'flex-start',
    },
    notContent: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
    },
    notMainContent: {
        marginRight: 60,
    },
}));
