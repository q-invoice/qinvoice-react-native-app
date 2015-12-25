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
} = React;

//  include react-native-swipeout
var Swipeout = require('react-native-swipeout');

//  example swipout app
module.exports = React.createClass({
  getInitialState: function() {
    //  datasource rerendered when change is made (used to set swipeout to active)
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true})

    return {
      dataSource: ds.cloneWithRows(this.props.rows),
      scrollEnabled: true,
    }
  }

//  set scrolling to true/false
, allowScroll: function(scrollEnabled) {
    this.setState({ scrollEnabled: scrollEnabled })
  }

//  set active swipeout item
, handleSwipeout: function(sectionID, rowID) {
    for (var i = 0; i < this.props.rows.length; i++) {
      if (i != rowID) this.props.rows[i].active = false
      else this.props.rows[i].active = true
    }
    this.updateDataSource(this.props.rows)
  }

, updateDataSource: function(data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

, renderRow: function (rowData: string, sectionID: number, rowID: number) {
    return <Swipeout
            left={rowData.left}
            right={rowData.right}
            rowID={rowID}
            sectionID={sectionID}
            autoClose={rowData.autoClose}
            backgroundColor={rowData.backgroundColor}
            close={!rowData.active}
            onOpen={(sectionID, rowID) => this.handleSwipeout(sectionID, rowID)}
            scroll={event => this.allowScroll(event)}>
              <View style={styles.li}>
                <Text style={styles.liText}>{rowData.text}</Text>
              </View>
            </Swipeout>
  }

, render: function() {
    return (
      <ListView
        scrollEnabled={this.state.scrollEnabled}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listview}/>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    paddingTop:25,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
});
