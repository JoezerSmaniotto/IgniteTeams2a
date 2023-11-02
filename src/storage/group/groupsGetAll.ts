import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    // Busca as informações no celular para ver se já tem turmas
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    // Se tiver retorna o caso convertido, não tiver, retorna um array vazio,
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;

  } catch (error) {
    throw error;
  }

};