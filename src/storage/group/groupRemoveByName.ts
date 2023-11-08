import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter(group => group !== groupDeleted);

    // Salva o group sem o o grupo deleteado(Aqui uso setItem, pq quero manter os outros grupos cadastrados)
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    // Iremos apagar os jogadores(Uso o removeItem, pq quero remover todos os players)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);

  } catch (error) {
    throw error;
  }
}