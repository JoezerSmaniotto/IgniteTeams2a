import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

// Colocamos  styled(SafeAreaView) entre () pq estamos
// Estilizando um elemento que não é default, dentro do
// styled-components que estamos usando, note que o elementos
// SafeAreaView vem de react-native-safe-area-context
export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

