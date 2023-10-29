import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const { Navigator, Screen } = createNativeStackNavigator();


export function AppRouter() {
  {/*
    1.Usamos o navigator para criar um contexto de navegação, e salva neste contexto as rotas disponiveis. 
    2.O screenOptions={{ headerShown: false } para não aparecer header.
  */ }
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="groups"
        component={Groups}
      />
      <Screen
        name="new"
        component={NewGroup}
      />
      <Screen
        name="players"
        component={Players}
      />
    </Navigator>
  )
}