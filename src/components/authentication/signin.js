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
  getInitialState: function() {
    return {
      login: '',
      password: '',
      error: ''
    };
  },
  componentWillMount: function() {
    Parse.initialize("3y3XzVTcACSK8ZloYMTdUVq0JIOOpOPGdLPUd45l", "Pe38Vu8zosHIf5dFm8BGHWbsYrw45MRSZcJ927QN");
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Login:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {this.setState({login:text})}}
            value={this.state.login}
        />

      <Text>Password:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {this.setState({password:text})}}
            secureTextEntry={true}
            value={this.state.password}
        />

      <TouchableHighlight style={styles.button} onPress={this.handleLogin}>
        <Text>Log in</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button} onPress={this.handleSignup}>
        <Text>Sign up</Text>
      </TouchableHighlight>

      <Text>{this.state.error}</Text>

      </View>
    );
  },
  handleLogin: function() {
    Parse.User.logIn(this.state.login, this.state.password, {
      success: (data) => this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]),
      error: (data, error) => { this.setState({ error: error.message }); }
    });
  },
  handleSignup: function() {
    this.props.navigator.push({name: 'signup'});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
