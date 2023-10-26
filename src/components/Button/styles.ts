
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

// export const Title = styled.Text`
//   font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
//   color: ${({ theme }) => theme.COLORS.WHITE};
//   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
// `;
/* No caso acima eu useu 3 x o "theme", usando o helper "css" do Styled 
  posso resolver chamando apenas uma vez o "theme" 
*/
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;