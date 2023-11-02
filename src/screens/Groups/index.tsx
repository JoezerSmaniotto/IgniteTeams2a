import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation();

  function handleNewGroups() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);

    } catch (error) {
      console.log("fetchGroups_error: ", error);
    }

  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  //useFocusEffect é usado para executar um efeito quando a tela está em foco
  // SEMPRE USAR useCallback para evitar renderizações desnecessárias.
  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={(
          <ListEmpty
            message="Que tal cadastrar a primeira turma?"
          />
        )}
      />
      <Button title='Criar nova turma'
        onPress={handleNewGroups}
      />
    </Container>
  );
}
