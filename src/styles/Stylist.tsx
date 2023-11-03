import { StyleSheet } from 'react-native';
import colors from './colors'

const Stylist = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.white
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.black,
  },
  tabBarIcon: { 
    marginTop: 5, 
    backgroundColor: 'transparent' 
  },
});

export default Stylist;