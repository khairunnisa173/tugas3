import react,{useState,useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Profile = () => { 
  const Tab = createBottomTabNavigator();

  return(
    <View style={{flex: 1}}>
      <ImageBackground source={require('../Images/kumpulan.jpg')}
      style={{flex: 0.8}}
      resizeMode={'cover'}
      >
      <View style={{flex: 0.8,}}></View>
      </ImageBackground>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../Images/profile.jpg')}
        style={{
          width: 100, 
          height: 100, 
          borderRadius: 100 / 2,
          borderWidth: 3,
          borderColor: 'white',
          position: 'absolute',
          zIndex: 2
        }}/>
      </View>

      <View style={{marginTop: 60}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'black' }}> Khairun Nisa </Text>
        <Text style={{ 
          textAlign: 'center' 
          }}>
          Prayer is the key that opens the day and locks up the night.
          </Text>
          <View style={{marginLeft: 80}}>
          <View 
        style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: 20
          }}>
          <View style={{
          justifyContent: 'center', 
          alignItems: 'center', 
          width: 30, 
          height: 30
          }}>
          <MaterialCommunityIcons name="cellphone-basic" size={25}/> 
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>+6282-3208-6477</Text>
          </View> 
        </View>
        <View 
        style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: 10
          }}>
          <View style={{
          justifyContent: 'center', 
          alignItems: 'center', 
          width: 30, 
          height: 30
          }}>
          <MaterialCommunityIcons name="instagram" size={25}/>
          </View> 
          <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>@caiic.u</Text>
          </View> 
        </View>
        <View 
        style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginTop: 10
          }}>
          <View style={{
          justifyContent: 'center', 
          alignItems: 'center', 
          width: 30, 
          height: 30
          }}>
          <MaterialCommunityIcons name="email" size={25}/> 
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>khaiirnniisa@gmail.com</Text>
          </View> 
        </View>
          </View>
      </View>
    </View>

  );
};
export default Profile;