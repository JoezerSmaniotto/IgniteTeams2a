
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AppError } from "@utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    try {
      // trim() remove os espaços em branco.
      if (group.trim().length === 0) {
        return Alert.alert('Nova Turma', 'Informe  o nome da turma.')
      }
      await groupCreate(group);
      //NameParams, Variavel que armaz. o nome do do para é group. 
      navigation.navigate('players', { group: group })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Turma', error.message)
      } else {
        Alert.alert('Nova Turma', 'Não foi possivel criar uma nova turma.')
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma nova turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          //onChangeText={setGroup}
          onChangeText={text => setGroup(text)}
        />
        <Button
          title="Criar Turma"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}