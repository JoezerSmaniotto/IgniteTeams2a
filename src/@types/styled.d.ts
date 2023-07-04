import 'styled-components/native'; // Adicionei esse native,pq igual as aulas estava dando erro

import theme from '../theme';

declare module 'styled-components/native' {// Adicionei esse native,pq igual as aulas estava dando erro
  //Criei uma tipagem(ThemeType) =  baseado no conteúdo do meu tema(theme)
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType { }
                                /*Extendo do theme padrão do StyledComponents
                                 dizendo qual é o tipo do tema que estou usando
                                 qual é conteúdo do meu thema*/

}