import styled from 'styled-components';
import { Box } from '../common/Layout';
import { Menu, MenuItem } from '../common/Menu';
import { UserActions } from './UserActions';
import dxIcon from '../../../assets/images/dxdao-icon.svg';
import { Heading } from '../common/Typography';

const SidebarWrapper = styled(Box)`
  @media only screen and (min-width: 768px) {
    margin-right: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.radii.curved};
  }
`;

const DaoInfoPanel = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  cursor: pointer;
`;

const DaoInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
const DaoBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
const DaoIcon = styled.img`
  height: 3rem;
  width: 3rem;
`;

const DaoTitle = styled(Heading)`
  margin-left: 4px;
  line-height: 1;
`;

const DaoMemberCount = styled(Box)`
  margin-bottom: 0.5rem;
`;

const SidebarMenu = styled(Menu)`
  margin: 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

const SidebarMenuItem = styled(MenuItem)`
  padding: 0.8rem 1rem;

  @media only screen and (min-width: 768px) {
    border-left: 2px solid transparent;
  }

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.muted};

    @media only screen and (min-width: 768px) {
      border-left: 2px solid ${({ theme }) => theme.colors.muted};
      border-bottom: initial;
    }
  }

  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.muted};

    @media only screen and (min-width: 768px) {
      border-left: 2px solid ${({ theme }) => theme.colors.muted};
      border-bottom: initial;
    }
  }
`;

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <DaoInfoPanel>
        <DaoInfo>
          <DaoBrand>
            <DaoIcon src={dxIcon} alt={'DXdao Logo'} />
            <DaoTitle size={2} as="h1">
              DXdao
            </DaoTitle>
          </DaoBrand>
          <DaoMemberCount>464 Members</DaoMemberCount>
        </DaoInfo>
        <UserActions />
      </DaoInfoPanel>
      <SidebarMenu>
        <SidebarMenuItem href="#">Proposals</SidebarMenuItem>
        <SidebarMenuItem href="#">Members</SidebarMenuItem>
        {/*<SidebarMenuItem href="#">Portfolio</SidebarMenuItem>*/}
        <SidebarMenuItem href="#">Settings</SidebarMenuItem>
      </SidebarMenu>
    </SidebarWrapper>
  );
};