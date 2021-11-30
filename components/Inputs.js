import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


export default class Inputs extends Component {
          constructor(props) {
                    super(props)
          }
          state = {
                    Nom: '',
                    Prenom: '',
                    Age: '',
                    Sex: '',
                    Latitude: this.props.mapRegion.latitude,
                    Longitude: this.props.mapRegion.longitude

          }
          handleEmail = (text) => {
                    this.setState({ email: text })
          }
          handlePassword = (text) => {
                    this.setState({ password: text })
          }
          login = (email, pass) => {
                    alert('email: ' + email + ' password: ' + pass)
          }
          render() {
                    return (
                              <View style={styles.container}>
                                        <TextInput style={styles.input}
                                                  underlineColorAndroid="transparent"
                                                  placeholder="Nom"
                                                  placeholderTextColor="#9a73ef"
                                                  autoCapitalize="none"
                                                  onChangeText={this.handleNom} />

                                        <TextInput style={styles.input}
                                                  underlineColorAndroid="transparent"
                                                  placeholder="Prenom"
                                                  placeholderTextColor="#9a73ef"
                                                  autoCapitalize="none"
                                                  onChangeText={this.handlePrenom} />

                                        <TextInput style={styles.input}
                                                  underlineColorAndroid="transparent"
                                                  placeholder="Age"
                                                  placeholderTextColor="#9a73ef"
                                                  autoCapitalize="none"
                                                  onChangeText={this.handleAge} />


                                        
                                        <TextInput style={styles.input}
                                                  underlineColorAndroid="transparent"
                                                  placeholder="Latitude"
                                                  placeholderTextColor="#9a73ef"
                                                  autoCapitalize="none"
                                                  value={this.state.Latitude.toString()}
                                                  onChangeText={this.handleLatitude} />

                                        <TextInput style={styles.input}
                                                  underlineColorAndroid="transparent"
                                                  placeholder="Longitude"
                                                  placeholderTextColor="#9a73ef"
                                                  autoCapitalize="none"
                                                  value={this.state.Longitude.toString()}
                                                  onChangeText={this.handleLongitude} />


                                        <TouchableOpacity
                                                  style={styles.submitButton}
                                                  onPress={
                                                            () => this.login(this.state.email, this.state.password)
                                                  }>
                                                  <Text style={styles.submitButtonText}> Submit </Text>
                                        </TouchableOpacity>
                              </View>
                    )

          }

}

const styles = StyleSheet.create({
          container: {
                    paddingTop: 23,
                    width: '100%'
          },
          input: {
                    margin: 15,
                    paddingHorizontal: 10,
                    height: 40,
                    width: '80%',
                    borderColor: '#7a42f4',
                    borderWidth: 1
          },
          submitButton: {
                    backgroundColor: '#7a42f4',
                    padding: 10,
                    margin: 15,
                    height: 40,
          },
          submitButtonText: {
                    color: 'white'
          }
})