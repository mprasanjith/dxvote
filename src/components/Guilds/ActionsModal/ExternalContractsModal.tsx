import styled from 'styled-components';
import { Flex } from '../common/Layout';
import { ContainerText } from '../common/Layout/Text';
import { Button } from '../common/Button';
import {
  ActionsModalView,
  useActionsBuilder,
} from 'contexts/Guilds/ActionsBuilder';

const RepWrapper = styled(Flex)`
  margin: 16px auto;
`;
const WrapperText = styled(ContainerText).attrs(() => ({
  variant: 'bold',
}))`
  justify-content: left;
  flex-direction: row;
  width: 85%;
  margin: 8px auto;
  color: ${({ theme }) => theme.colors.proposal.grey};
`;

const ExternalWrapper = styled(Flex)`
  width: 100%;
  margin: 8px auto;
`;

const ButtonText = styled(ContainerText).attrs(() => ({
  variant: 'medium',
}))`
  justify-content: space-between;
  flex-direction: row;
`;

const ActionsButton = styled(Button)`
  width: 90%;
  margin: 6px 0;
  flex-direction: column;
  justify-content: left;
  border-radius: 10px;
  &:active,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.text};
  }
`;

interface ExternalContractsProps {
  noOfActions: number;
  functionDescription: string;
  functionName: string;
}

const ExternalContractsModal: React.FC<ExternalContractsProps> = ({
  noOfActions,
  functionDescription,
  functionName,
}) => {
  const { setModalView } = useActionsBuilder();

  return (
    <RepWrapper>
      <ExternalWrapper>
        <WrapperText>6 Actions</WrapperText>
        <ActionsButton
          variant="secondary"
          onClick={() =>
            setModalView(content => [...content, ActionsModalView.MintRep])
          }
        >
          {functionDescription}
          <ButtonText>{functionName}</ButtonText>
        </ActionsButton>
      </ExternalWrapper>
    </RepWrapper>
  );
};

export default ExternalContractsModal;
