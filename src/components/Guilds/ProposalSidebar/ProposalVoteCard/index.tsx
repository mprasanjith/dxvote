import styled from 'styled-components';
import { Button } from '../../common/Button';
import { Box } from '../../common/Layout';
import SidebarCard from '../../SidebarCard';

const SidebarCardHeader = styled(Box)`
  padding: 1rem;
  font-weight: 600;
`;

const SidebarCardContent = styled(Box)`
  padding: 1rem;
`;

const Separator = styled.hr`
  margin: 1.5rem 0;
`;

const VoteButton = styled(Button)`
  margin-top: 1rem;
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ProposalVoteCard = () => {
  return (
    <SidebarCard header={<SidebarCardHeader>Cast your vote</SidebarCardHeader>}>
      <SidebarCardContent>
        <Separator />

        <Separator />

        <VoteButton>Vote</VoteButton>
      </SidebarCardContent>
    </SidebarCard>
  );
};

export default ProposalVoteCard;