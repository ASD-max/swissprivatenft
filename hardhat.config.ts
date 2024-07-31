import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'
import '@nomicfoundation/hardhat-ethers'
import '@openzeppelin/hardhat-upgrades'

dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: 'swisstronik',
  solidity: '0.8.20',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/',
      accounts: [`0x043cffeadb4d0326e24c76845cbc1bfd5ded742727a10b16180aa906a503dbe4`], //your privatekey
    },
  },
  etherscan: {
    apiKey: `ANY_STRING_WILL_DO`,
    customChains: [
      {
        network: 'swisstronik',
        chainId: 1291,
        urls: {
          apiURL: 'https://explorer-evm.testnet.swisstronik.com/api',
          browserURL: 'https://explorer-evm.testnet.swisstronik.com',
        },
      },
    ],
  },
}

export default config