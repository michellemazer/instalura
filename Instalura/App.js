/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';

import {Cabecalho} from "./src/Components/Cabecalho";
import {Foto} from './src/Components/Foto';

const informacoes = [
  {id: 1, usuario: "Michelle" }, 
  {id: 2, usuario: "Flavio" },
  {id: 3, usuario: "Ricardo" },
  {id: 4, usuario: "Gabriel" },
  {id: 5, usuario: "Leonardo" }
];

const App = () => {
  return (
    <ScrollView>
      <FlatList 
        data={informacoes}
        keyExtractor = {(item) =>item.id.toString()}
        renderItem={({item}) => 
          
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario}  />
            <Foto/>
          </Fragment>
        
        }
      />
      
    </ScrollView>
  );
};

export default App;
