import react,{useState,useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function DetailDoa() {
    const [data , setData] = useState([])

  useEffect(() => {
    fetcData()
  },[])
  
  const fetcData = async () => { 
    const res = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api')
    const data = await res.json()
    setData(data)
  }
  return (
    
    <View>
        {
        data?.map((data,index)=>{
        
            return(
            <ScrollView key={index}>
               <Text style={{color: 'black', fontWeight: 'bold'}}>
                {data.ayat}
               </Text>
               <Text>
                {data.artinya}
               </Text>
            </ScrollView>    
            )
            
            
        })
        }
      
    </View>
  )
}