var React = require('react-native');
var Header = require('./parts/header');
var {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} = React;


module.exports = React.createClass({
  render: function() {
    return (
        <View style={styles.container}>
          <Header heading={'Homepage'}/>
          <View style={styles.body}>
            <Text>Homepage</Text>
          </View>
        </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    borderWidth:1,
    borderColor: 'red',
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: 'gray'
  },
  body: {
    flex:15,
  },
  button: {
    borderRadius: 20,
    marginLeft:10,
    marginTop: 6
  },
  burger: {
  }
});
