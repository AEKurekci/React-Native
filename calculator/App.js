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
      calculationText:"",
      resultText : ""
    }
    this.operations = ['DEL','+', '-', '*','/'];
  }
  calculateResult(){
    const text = this.state.calculationText
    this.setState({
      resultText : eval(text)
    })
  }
  operate(operation){
    switch(operation){
      case 'DEL':
        let text = this.state.calculationText.split('');
        text.pop();
        this.setState({
          calculationText : text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.calculationText.split('').pop();
        if(this.operations.indexOf(lastChar) > 0) return//art arda operatör girdisini önler
        if(this.state.calculationText == "") return//calculation text boş olduğunda operatöre basılmasını önler
        this.setState({
          calculationText : this.state.calculationText + operation
        })
    }
  }

  validate(){
    const text = this.state.calculationText;
    console.log(text.slice(-1));
    
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  buttonPressed(text){

    if(text == '='){
      return this.validate() && this.calculateResult();
    }
    this.setState({
        calculationText: this.state.calculationText + text
      })
    
  }

  render(){
    let rows = []
    let nums = [[9,8,7],[6,5,4],[3,2,1],['.',0,'=']]
    for(let i=0;i<nums.length;i++){
      let col = []
      for(let j= 0;j < 3; j++){
        col.push(
          <TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View key={i} style={styles.row}>{col}</View>)
    }

   
    let ops = []
    for(let i = 0; i<this.operations.length;i++){
      ops.push(
        <TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
            <Text style={styles.btnText}>{this.operations[i]}</Text>
          </TouchableOpacity>
      )
    }

    return(
      <View style={styles.container}>
        <View style={styles.entry}>
          <Text style={styles.entryText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
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

