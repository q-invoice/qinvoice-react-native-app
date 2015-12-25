var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

var Parse = require('parse/react-native');

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("3y3XzVTcACSK8ZloYMTdUVq0JIOOpOPGdLPUd45l", "Pe38Vu8zosHIf5dFm8BGHWbsYrw45MRSZcJ927QN");
  },
  onSigninPress: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Signup:</Text>

        <TouchableHighlight style={styles.button} onPress={this.onSigninPress}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  input: {
    padding:5,
    margin:10,
    width:200,
    height:35,
    borderWidth:1,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    width:200,
    height:35,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
