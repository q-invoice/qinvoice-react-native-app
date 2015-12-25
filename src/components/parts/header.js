var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  TouchableOpacity
} = React;

var Button = React.createClass({
  contextTypes: {
    menuActions: React.PropTypes.object.isRequired
  },
  handlePress(e) {
    this.context.menuActions.toggle();
  },
  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
});

module.exports = React.createClass({
  headerIcon: function() {
    if(this.props.backIcon)
      return (
        <TouchableHighlight
          onPress={this.handleBack}>
          <Image
            style={styles.backIcon}
            source={require('../../images/return.png')} />
        </TouchableHighlight>
      );
    else
      return (
        <Button style={styles.button}>
          <Image
            style={styles.burger}
            source={require('../../images/burger.png')} />
        </Button>
      );
  },
  handleBack: function() {
    this.props.navigator.pop();
  },
  render: function() {
    return (

      <View style={styles.header}>
      {this.headerIcon()}

        <Text style={styles.heading}>{this.props.heading}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: '#ac2258'
  },
  button: {
    borderRadius: 20,
    marginLeft:10,
    marginTop:8
  },
  backIcon: {
    marginTop:8,
    marginLeft:5
  },
  heading: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    top:5,
    color: 'white',
    fontWeight: 'bold'

  }
});
