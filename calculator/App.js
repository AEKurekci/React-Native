/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component{

  constructor(){
    super()
    this.state = {
      resultText:""
    }
    
  }

operate(operation){
  switch(operation){
    case 'Del':
      let text = this.state.resultText.split('')
      text.pop()
      this.setState({
        resultText : text.join('')
      })
  }
}

  calculateResult(){
    const text = this.state.resultText
  }

  buttonPressed(text){

  if(text == '='){
    return this.calculateResult();
  }

    this.setState({
      resultText:this.state.resultText + text
    })
  }

  render(){
    let rows = []
    let nums = [[9,8,7],[6,5,4],[3,2,1],['.',0,'=']]
    for(let i=0;i<nums.length;i++){
      let col = []
      for(let j= 0;j < 3; j++){
        col.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View style={styles.row}>{col}</View>)
    }

    let operation = ['Del','+', '-', 'x','/']
    let ops = []
    for(let i = 0; i<operation.length;i++){
      ops.push(
        <TouchableOpacity style={styles.btn} onPress={() => this.operate(operation[i])}>
            <Text style={styles.btnText}>{operation[i]}</Text>
          </TouchableOpacity>
      )
    }

    return(
      <View style={styles.container}>
        <View style={styles.entry}>
          <Text style={styles.entryText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>1232</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
              {ops}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  btnText:{
    fontSize:30,
    color:'white'
  },
  entry:{
    flex:2,
    backgroundColor:'#6878a0',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  result:{
    flex:1,
    backgroundColor:'#bfb7c7',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  entryText:{
    fontSize:30,
    color:'white'
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  resultText:{
    fontSize:24,
    color:'white'
  },
  buttons:{
    flex:6,
    flexDirection:'row',
  },
  numbers:{
    flex:4,
    backgroundColor:'gray',
  },
  operations:{
    flex:1,
    backgroundColor:'#b6b8f1',
    justifyContent:'space-around',
    alignItems:'center',
  },
  row:{
    flex:1,
    justifyContent:'space-around',
    flexDirection:'row',
    color:'white',
    fontSize:18,
    alignItems:'center',
  }
})

