import React from 'react'
import { Text, SafeAreaView, Image, View } from "react-native"
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions';
import SafeViewAndroid from '../components/SafeViewAndroid';
function HomeScreen() {
    
    return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={tw`p-5`}>
                {/* <Image
                     source={require('../assets/logo.png')}

                    style={{
                        width: 45,
                        height: 65,
                        resizeMode: 'contain'
                    }}
                  
                /> */}
                <NavOptions/>
            </View> 
      </SafeAreaView>
    
  )
}


export default HomeScreen

