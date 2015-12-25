/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TabBarIOS,
} = React;

//  include react-native-swipeout
var Header = require('../parts/header');
var DocumentList = require('./documentList');

var rows = require('./data/data_overview.js');
var rows_recurring = require('./data/data_recurring.js');
var rows_inbound = require('./data/data_inbound.js');
var rows_proforma = require('./data/data_proforma.js');

//  example swipout app
module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'Overview',
      heading: 'Invoices Overview'
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
      <Header heading={'Invoices'} backIcon={this.props.backIcon} navigator={this.props.navigator}/>
      <View style={styles.body}>

      <TabBarIOS style={styles.container}>

        <TabBarIOS.Item
                title="Overview"
                selected={this.state.selectedTab == 'Overview'}
                icon={require('../../images/layers.png')}
                onPress={()=> this.setState({selectedTab: 'Overview'})}>
                <View>
                  <Text style={styles.heading}>Invoices overview</Text>
                  <DocumentList rows={rows} />
                </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
                title="Recurring"
                selected={this.state.selectedTab == 'Recurring'}
                icon={require('../../images/timer.png')}
                onPress={()=> this.setState({selectedTab: 'Recurring'})}>
                <View>
                  <Text style={styles.heading}>Recurring invoices</Text>
                  <DocumentList rows={rows_recurring} />
                </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
                title="Inbound"
                selected={this.state.selectedTab == 'Inbound'}
                icon={require('../../images/inbox.png')}
                onPress={()=> this.setState({selectedTab: 'Inbound'})}>
                <View>
                  <Text style={styles.heading}>Inbound invoices</Text>
                  <DocumentList rows={rows_inbound} />
                </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
                title="Proforma"
                selected={this.state.selectedTab == 'Proforma'}
                icon={require('../../images/bill.png')}
                onPress={()=> this.setState({selectedTab: 'Proforma'})}>
                <View>
                  <Text style={styles.heading}>Proforma invoices</Text>
                  <DocumentList rows={rows_proforma} />
                </View>
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    paddingTop:25,
  },
  body: {
    flex:15,
  },
  heading: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#ac2258',
    padding: 10
  }
});
