import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {

    // Pega todos os jogadores do grupo
    const storedPlayers = await playersGetByGroup(group);
    // Filtra os jogadores para verificar se já exist jogador com o mesmo nome
    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);
    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já esta adicionada em um time.');
    }
    // Dados com o novo jogador
    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    /*
      Lógica abaixo so setItem
      @ignite-teams:player-amigos: [Array com o novo jogador]
      @ignite-teams:player-pumas: [Array com o novo jogador]
    */
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch (error) {
    throw (error);
  }

}
