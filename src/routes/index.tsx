import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRouter } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();
  /*
    Aplicamos o  <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
    para Prevenindo BRANCO na troca de tela Glitch na navegação
    Semana: 2, Conjunto: Navegação, Aula: Prevenindo Glitch na navegação minuto: 0:00
  */
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </View>
  );
}