import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Tempo from './components/tempo';
import Api from './components/api';



export default function App() {
    const [clima, setClima] = useState(0);
    const [clima2, setClima2] = useState(0);
    const [inputCity, setInputCity] = useState(0);
    const [uf, setUf] = useState('SP');
    const [listUf, setListUf] = useState([]);
    useEffect(() => {
      loadUf();
    },[]);
   async function loadUf() {
      let url = 'https://servicodados.ibge.gov.br/';
      url = url + 'api/v1/localidades/estados';
      
     await fetch(url)
        .then(response => response.json())
        .then(data => {
          data.sort((a,b) => a.nome.localeCompare(b.nome));
          setListUf([...data]);
         });
  }


    async function carregaCity(){
        const response = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,description,date&key=da251ba8&city_name='+inputCity+','+uf);
        setClima(response.data.forecast[0]);
        setClima2(response.data);

    };
  return (
    <View style={styles.container}>
       <View style={styles.bloco}>
      <Text style={styles.textheader}>Digite Sua Cidade</Text>
      <TextInput 
          placeholder='Sua cidade ...'
          style={styles.input}
          onChangeText={(value)=>setInputCity(value)}
        />

  <Picker style={styles.picker}
    selectedValue={uf}
    onValueChange={(itemValue, itemIndex) =>
      setUf(itemValue)
    }>
      {listUf.map((a, b) => ( 
            <Picker.Item value={a.sigla} label={a.nome} />
        ))}
    </Picker>

      <TouchableOpacity style={styles.btn} onPress={carregaCity}>
       <Text style={styles.btnText}>Buscar</Text>
   </TouchableOpacity>
   </View>
   <Tempo data={clima} data2={clima2}/>
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    color:'#fff',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textheader:{
    fontSize:40
  },
  input:{
    color:'#000',
    fontSize:20,
    marginBottom: '1%'
  },
  btn:{
    alignItems: 'center',
    backgroundColor: '#45FFBB',
    width:300,
    borderRadius: 8,
  },
  btnText:{
    fontSize: 30,
    color: '#000',
  },
  picker:{
    fontSize:20,

  }
});