import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(NewGroup: string) {
  const groups = await AsyncStorage.getItem("groups");
  try {
    // Pega todos os groups
    const storedGroup = await groupsGetAll();
    // Verifica se o nome group já existe, para impedir de cadastrar grupos com o mesmo nome.
    const groupAlreadyExists = storedGroup.includes(NewGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome");
    }

    // Convert merge de todos os groups com o novo group(NewGroup)
    const storage = JSON.stringify([...storedGroup, NewGroup]);
    //O setItem recebe 2 params:  Chave, dados, neste caso
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    throw error;
  }

}