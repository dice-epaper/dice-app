import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // width: '45%',
    padding: 7,
    margin: 3,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  wrapperSale: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    fontWeight: 'bold',
    color: '#0EADFF',
    marginRight: 10,
    fontSize: 15,
  },
  title2: {
    fontWeight: 'bold',
    color: '#0EADFF',
    marginRight: 10,
    fontSize: 15,
  },
  titleSale: {
    fontWeight: 'bold',
    color: 'red',
    marginRight: 10,
    fontSize: 20,
    marginTop: 5,
  },
  content: {
    color: '#333',
  },
  content2: {
    color: '#333',
  },
  textInput: {
    flex: 2,
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  text3: {
    flex: 1,
    fontSize: 16,
    marginRight: 5,
    // textAlign: 'center',
  },
  wrapper4: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});

export default styles;
