/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var Signin = require('./authentication/signin');
var Signup = require('./authentication/signup');
var Homepage = require('./homepage.js');
var Invoices = require('./documents/invoices');
var Parse = require('parse/react-native');
var Menu = require('./parts/menu');
var SideMenu = require('react-native-side-menu');
var {
  StyleSheet,
  Navigator
} = React;

var ROUTES = {
  signin: Signin,
  signup: Signup,
  homepage: Homepage,
  invoices: Invoices
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    var backIcon = false;
    if(route.name == 'invoices')
      backIcon=true

    return (
      <SideMenu
        menu={<Menu navigator={navigator}/>}
        isOpen={false}>
          <Component route={route} navigator={navigator} backIcon={backIcon}/>

      </SideMenu>
    );
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'homepage'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
