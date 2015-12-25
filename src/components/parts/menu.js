var React = require('react-native');
var Dimensions = require('Dimensions');
var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Component,
  TouchableHighlight,
  Navigator
} = React;

var window = Dimensions.get('window');

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#d1d1d1',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 200,
    flex: 1,
    marginTop: -10
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 5,
    borderBottomWidth: 10,
    borderBottomColor: 'black'
  },
});

module.exports = React.createClass({
  contextTypes: {
    menuActions: React.PropTypes.object.isRequired
  },
  handleClick() {
    //this.context.menuActions.close();
    this.props.navigator.push({name: 'invoices'});
  },
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('../../images/logo.png') }/>
        </View>
        <TouchableHighlight onPress={this.handleClick}>
          <Text style={styles.item}>Invoices</Text>
        </TouchableHighlight>

        <Text style={styles.item}>Qoutes</Text>
        <Text style={styles.item}>Purchase orders</Text>
        <Text style={styles.item}></Text>
        <Text style={styles.item}>Products</Text>
        <Text style={styles.item}>Relations</Text>
        <Text style={styles.item}>Settings</Text>
      </ScrollView>
    );
  }
});
