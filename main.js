import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        originalBill: 0,
        count: '$0.00',
    }

    tip10 = () => {
        this.setState({ 
            count: '$'+(this.state.originalBill * 1.10).toFixed(2),
        })
    }
    tip15 = () => {
        this.setState({ 
            count: '$'+(this.state.originalBill * 1.15).toFixed(2),
        })
    }
    tip20 = () => {
        this.setState({
            count: '$'+(this.state.originalBill * 1.20).toFixed(2),
        })
    }
    tip25 = () => {
        this.setState({ 
            count: '$'+(this.state.originalBill * 1.25).toFixed(2),
        })
    }
    tip30 = () => {
        this.setState({ 
            count: '$'+(this.state.originalBill * 1.30).toFixed(2),
        })
    }
    tip35 = () => {
        this.setState({ 
            count: '$'+(this.state.originalBill * 1.35).toFixed(2),
        })
    }

    render() {
        return (
            <View style={styles.tContainer}>
                
                <Text style={styles.title}>
                    Tip Calculator
                </Text>
                
                <Text style={styles.tipText}>
                    Original Cost:
                </Text>
                
                <TextInput style={styles.textInput}
                    clearTextOnFocus = {true}
                    onChangeText={(originalBill) => this.setState({originalBill})}
                    value={this.state.originalBill}
                />
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                    onPress= {this.tip10}
                    >
                        <Text style={styles.buttonText}>
                            10%
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                    onPress= {this.tip15}
                    >
                        <Text style={styles.buttonText}>
                            15%
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                    onPress= {this.tip20}
                    >
                        <Text style={styles.buttonText}>
                            20%
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                    onPress= {this.tip25}
                    >
                        <Text style={styles.buttonText}>
                            25%
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                    onPress= {this.tip30}
                    >
                        <Text style={styles.buttonText}>
                            30%
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                    onPress= {this.tip35}
                    >
                        <Text style={styles.buttonText}>
                            35%
                        </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.tipText}>
                    Total Cost After Tip:
                </Text>
                <Text style={styles.tipText}>
                    {this.state.count}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    tContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkgoldenrod',
    },
    textInput: {
        height: 40,
        width: 150,
        borderWidth: 1,
        color: 'white',
        fontSize: 25,
        alignText: 'center',
    },
    tipText: {
        color: 'gold',
        fontSize: 25,
        alignText: 'center',
    },
    title: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        height: 60,
        width: 95,
        backgroundColor: 'black',
        borderColor: 'gold',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'gold',
        fontSize: 20,
        textAlign: 'center',
    },
});
