import React, {Component} from 'react'
import {Platform, TextInput} from 'react-native'

class ChineseAdaptedTextInput extends Component {
  shouldComponentUpdate(nextProps){
    return Platform.OS !== 'ios' || this.props.value === nextProps.value
  }

  render() {
    return <TextInput {...this.props} ref={(input) => this.props.inputRef(input)} />
  }
};

export default ChineseAdaptedTextInput
