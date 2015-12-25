var React = require('react-native')
var {Image} = React

var btnsDefault = [ { text: 'Button' } ]
var btnsTypes = [
  { text: 'Add payment',    type: 'primary',   },
  { text: 'Send',  type: 'secondary', onPress: function(){ alert('Invoice sent') }, },
  { text: 'Trash',     type: 'delete',    }
]

var rows = [
  {
    text: "FA-IN-2015-20 | Zaraguza s.r.o | 25.12.2015",
    right: btnsTypes,
  },
]

module.exports = rows
