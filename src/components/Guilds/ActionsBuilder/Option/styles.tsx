import styled from 'styled-components';
import { Box } from 'components/Guilds/common/Layout';

export const ActionCountLabel = styled.span`
  color: ${({ theme }) => theme.gray};
`;

export const OptionWrapper = styled(Box)`
  padding: 1rem;
`;

export const DetailWrapper = styled(Box)`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
