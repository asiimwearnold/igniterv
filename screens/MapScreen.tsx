import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
// import MapboxGL from "@react-native-mapbox-gl/maps";
//  MapboxGL.setAccessToken("")

const MapScreen = () => {
 
  return (
    <View style={styles.page}>
        <View style={styles.container}>
        {/* <MapboxGL.MapView style={styles.map} /> */}
      </View>
    </View>
  )

  
}


export default MapScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
  height: 300,
    width: 300,
    backgroundColor: 'blue',
  },
  map: {
    flex: 1
  }
});