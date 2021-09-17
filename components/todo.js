import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const Todo=(props)=> {
    
  return (
    <View style={[{padding:8,margin:6},styles.item]}>
      <Text>{props.item}</Text>
    <Button
        title={'delete'}
        color={'red'}
        onPress={()=>{props.delete(props.item)}}
    />
       
    </View>
  )
}
const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#f5f5f5'


    }
})
export default Todo