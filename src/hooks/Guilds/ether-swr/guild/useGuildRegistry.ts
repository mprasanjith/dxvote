import useEtherSWR from '../useEtherSWR';
import GuildRegistry from 'contracts/GuildsRegistry.json';

export const useGuildRegistry = (contractAddress: string) => {
  const { data, error } = useEtherSWR(
    contractAddress
      ? [contractAddress, 'getGuildsAddresses'] // get all the guilds addresses
      : [],
    {
      ABIs: new Map([[contractAddress, GuildRegistry.abi]]),
      refreshInterval: 0,
    }
  );

  return {
    data,
    error,
  };
};
