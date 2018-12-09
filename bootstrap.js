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
  RkTheme.setType('RkCard', 'blog', {
    header: {
      paddingHorizontal: 16,
      paddingVertical: 0,
      paddingTop: 16,
    },
    content: {
      padding: 0,
      paddingVertical: 0,
      paddingTop: 12,
    },
    footer: {
      paddingHorizontal: 16,
      paddingTop: 15,
      paddingBottom: 16,
      alignItems: 'center',
    },
  });
};
export default bootstrap;
