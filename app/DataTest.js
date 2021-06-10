/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 class App extends React.Component {
   constructor() {
     super()
     this.state = {
       
       info: {
         id: '201740214',
         name: '박웅서'
       }
     }
   }
   render() {
     return(
       <BookDisplay
 
         info={ this.state.info }
         topics={['1', '2', '3', '4', '5']} />
     )
   }
 }
 const BookDisplay = (props) => {
 
   let { topics } = props
   const { info } = props
   topics = topics.map((topic, i) => {
     return <Text>{ topic }</Text>
   })
  
   return (
     <View>
       <Text>학번: { info.id }</Text>
       <Text>이름: { info.name }</Text>
       { topics }
     </View>
   )
 }
 
 export default App;
    