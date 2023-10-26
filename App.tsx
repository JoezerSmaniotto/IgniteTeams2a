import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme'

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  /*Na linha acima neste possição do array tenho um propriedade que me dirá
  se foi carregado as fonts ou não, neste caso, NESTE CASO defino o nome 
  fontsLoaded, para saber se foi carregado, caso não tenha sido, 
  irá acionar o component de load do react-native o ActivityIndicator
  retornando esta variavél TRUE se carrega ou false caso contrário*/

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content" // Cor dos ícones da barra de status
        backgroundColor="transparent" // Quando aplico barStyle, ele aplica um backgorund preto, então por isso coloco aqui o background transparent
        translucent // Com o transluci minha interface que começa baixo da barra de status, a partir de começa no TOPO da tela
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}

