import React from 'react'
import { Text, View, FlatList, Touchable, TouchableOpacity, Image} from "react-native"
import { Icon } from 'react-native-elements';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../screens/MapScreen';
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: require('../assets/Carlist-preview.png'),
    screen: 'MapScreen' 
  },
  {
    id: "123",
    title: "Hire Car",
    image: "",
    screen: "CarListingScreen"
  },
   {
    id: "123",
    title: "Driving School",
    image: "",
    screen: "RegistrationScreen"
  }
];



const NavOptions = () => {
const navigation = useNavigation<any>()
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) =>item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
             style={{width:94, height:74, resizeMode: 'contain'}}
              source={(item.image)}
            /> 
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white" 
              type="antdesign"
            />
          </View> 
          
        </TouchableOpacity>
      )}
    />
   )
    
 }
 
 export default NavOptions