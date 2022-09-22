import React, { Component } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

export default  class Splash extends Component {
  
    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.title}>{'Hello'}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor:'#fff',
        justifyContent:'center'
        
    }, 
    title: {
        fontWeight: 'bold',
        fontSize:20
        

    }
    
  
});

 