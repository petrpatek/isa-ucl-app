import { RkTheme } from 'react-native-ui-kitten';


const bootstrap = () => {
  RkTheme.setType('RkButton', 'square', {
    borderRadius: 3,
    backgroundColor: '#ffffff',
    container: {
      flexDirection: 'column',
      margin: 8,
    },
  });
};
export default bootstrap;
