/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Sentry,SentrySeverity } from 'react-native-sentry';
import {askAppLocation} from './AppLocationAsk'
Sentry.config('https://013a6a2ff2374fe497fa72b897fa2049@sentry.io/1455742',{
  deactivateStacktraceMerging: false,
}).install();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  errorClick=()=>{

    askAppLocation()
   

  
    // Sentry.captureBreadcrumb({
    //   message: 'Item added to shopping cart',
    //   category: 'action',
    //   data: {
    //      isbn: '978-1617290541',
    //      cartSize: '3'
    //   }
    // });

    // Sentry.setUserContext({
    //   email: "john@apple.com",
    //   userID: "12341",
    //   username: "username",
    //   extra: {
    //     "is_admin": false
    //   }
    // });


    // Sentry.setTagsContext({
    //   "environment": "staging",
    //   "react": true
    // });

    // Sentry.setExtraContext({
    //   "a_thing": 3,
    //   "some_things": {"green": "red"},
    //   "foobar": ["a", "b", "c"],
    //   "react": true,
    //   "float": 2.43
    // });

    // Sentry.setEventSentSuccessfully((event) => {
    //   alert(alert)
    // });
    //   Sentry.captureMessage("TEST message", {
    //   level: SentrySeverity.Info
    // });
  //  nothing
  }


  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.errorClick}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
