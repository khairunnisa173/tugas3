import react,{useState,useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, Scroll, FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home = () => { 
  const Tab = createBottomTabNavigator();
  const [data , setData] = useState([])

  useEffect(() => {
    fetcData()
  },[])
  
  const fetcData = async () => { 
    const res = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api')
    const data = await res.json()
    setData(data)
  }

  return(
    <ScrollView style = {{backgroundColor: '#ffced9'}}>
      <View>
      <Text
      style={{
        marginTop: 20, 
        marginHorizontal: 35, 
        fontWeight: 500,
        fontSize: 17,}}> 
        Kumpulan Doa 
      </Text>
      
      <Text 
      style={{
        marginHorizontal: 15,
        fontSize: 20,
        marginBottom:15,
        fontWeight: 700, 
        color: 'black'}}>
        Ayo, mulai berdoa!
      </Text>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          {
            data?.map((data,index)=>{
              return(
                <TouchableOpacity key={index} 
                style={{
                  backgroundColor: '#c2d3fd',
                  paddingVertical: 15,
                  borderRadius: 5,
                  justifyContent: 'center',
                  margin: 5
                }}>
                  <View style={{
                    position: 'absolute',
                    right: 10,
                  }}>
                  <MaterialCommunityIcons name="home" size={25}/>
                  </View>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                   {data.doa}
                  </Text>
      
                </TouchableOpacity>
              )
            })
          }
          

        </View>
      </View>
    </ScrollView>

  );
};
export default Home;