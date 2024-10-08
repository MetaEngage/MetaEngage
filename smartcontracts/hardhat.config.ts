require("dotenv").config()
import dotenv from "dotenv"
dotenv.config()
import "@nomicfoundation/hardhat-verify"
import "@nomiclabs/hardhat-truffle5"
import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"
import "solidity-coverage"

import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"

import { task } from "hardhat/config"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

// Testnet: sepolia, mumbai, bnbTest , arbGoerli , optiGoerli, baseGoerli
// Mainnet: Ethereum, Polygon,, Binance ,Arbitrum, Optimism,Base
// API_KEY & PRIVATE_KEY

// TESTNET
const MATICMUM_RPC_URL =
    "https://polygon-mumbai.g.alchemy.com/v2/o2yITnrGDAeY8UfQT3AOvsyAGUs735TJ"

// const SEPOLIA_RPC_URL = "https://base-sepolia.g.alchemy.com/v2/sVuV2fdoF_8XAOF9pFN42R2ESRuqCmow"
const SEPOLIA_RPC_URL =
    "https://eth-sepolia.g.alchemy.com/v2/WRfmzLBj8D-0bD76QLpD7DjZu5rUIAtE"

const ARBITRUM_GOERLI_RPC_URL =
    process.env.ARBITRUM_GOERLI_RPC_URL ||
    "https://arbitrum-goerli.infura.io/v3/api-key"

const OPTIMISM_GOERLI_RPC_URL =
    process.env.OPTIMISM_GOERLI_RPC_URL ||
    "https://optimism-goerli.infura.io/v3/api-key"

const BASE_TESTNET_RPC_URL =
    process.env.BASE_TESTNET_RPC_URL || "wss://base-sepolia-rpc.publicnode.com"

const SCROLL_SEPOLIA_RPC_URL =
    process.env.SCROLL_SEPOLIA_RPC_URL ||
    "https://scroll-testnet-public.unifra.io"

const POLYGON_ZKEVM_TESTNET_RPC_URL =
    process.env.POLYGON_ZKEVM_TESTNET_RPC_URL ||
    "https://rpc.public.zkevm-test.net"

// MAINNET
const ETHEREUM_RPC_URL =
    process.env.ETHEREUM_RPC_URL || "https://mainnet.infura.io/v3/api-key"
const POLYGON_RPC_URL =
    process.env.POLYGON_RPC_URL ||
    "https://polygon-mainnet.g.alchemy.com/v2/api-key"
const ARBITRUM_RPC_URL =
    process.env.ARBITRUM_RPC_URL || "https://linea-mainnet.infura.io/v3/api-key"
const OPTIMISM_RPC_URL =
    process.env.OPTIMISM_RPC_URL ||
    "https://filecoin-mainnet.chainstacklabs.com/rpc/v1"
const BASE_RPC_URL =
    process.env.BASE_RPC_URL ||
    "https://filecoin-mainnet.chainstacklabs.com/rpc/v1"
const SCROLL_RPC_URL = process.env.SCROLL_RPC_URL || "https://rpc.scroll.io"
const POLYGON_ZKEVM_RPC_URL =
    process.env.POLYGON_ZKEVM_RPC_URL || "https://zkevm-rpc.com"

const MNEMONIC =
    "nothing dose flag render moral broccoli denial want tree antique zoo buzz"
const PRIVATE_KEY =
    "ab7ed858bafa191780d8ee80ddf049721a01e7db2708d6ae8977c1cfc9271ec9"

/// EXPLORER API KEYS
const POLYGONSCAN_API_KEY =
    process.env.POLYGONSCAN_API_KEY || "lklsdkskldjklgdklkld"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Etherscan API key"
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY || "BSCscan API Key"
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY || "Arbiscan API Key"
const OPTISCAN_API_KEY = process.env.OPTISCAN_API_KEY || "Optiscan API Key"
const BASESCAN_API_KEY = process.env.BASESCAN_API_KEY || "Basescan API Key"
const SCROLLSCAN_API_KEY =
    process.env.SCROLLSCAN_API_KEY || "ScrollScan Api Key"
const POLYGON_ZKEVM_API_KEY =
    process.env.POLYGON_ZKEVM_API_KEY || "Polygon Zkevm Api Key"

// Ganache Configuration
const GANACHE_RPC_URL = "http://127.0.0.1:7545" // Default Ganache RPC URL
const GANACHE_PRIVATE_KEY =
    "0xe77f2db74cdef786e39f317a5f7b93e7a881f10af24eb0c223d0d4eb29d00b86" // Your Ganache private key

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: "0.8.24",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
        },
        // TESTNET NETWORKS
        maticmum: {
            networkId: 80001,
            url: MATICMUM_RPC_URL,
            // accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        ganache: {
            url: "http://127.0.0.1:7545", // Ensure Ganache is running on this URL
            network_id: "*", // Match any network id
            gasPrice: 20000000000, // 20 gwei (adjust as necessary)
            gas: 6721975, // Ganache default block gas limit (increase if needed)
            accounts: [
                "0xe77f2db74cdef786e39f317a5f7b93e7a881f10af24eb0c223d0d4eb29d00b86", // Replace with your Ganache account private key
            ],
        },
        sepolia: {
            networkId: 11155111,
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            // accounts: {
            //     mnemonic: MNEMONIC,
            // },
        },
        arbiGoerli: {
            networkId: 421613,
            url: ARBITRUM_GOERLI_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        optiGoerli: {
            networkId: 420,
            url: OPTIMISM_GOERLI_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        baseTestnet: {
            networkId: 84532,
            url: BASE_TESTNET_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        scrollTestnet: {
            networkId: 534351,
            url: SCROLL_SEPOLIA_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        polygonZkevmTestnet: {
            networkId: 1442,
            url: POLYGON_ZKEVM_TESTNET_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        // MAINNET NETWORKS
        ethereum: {
            networkId: 1,
            url: ETHEREUM_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        polygon: {
            networkId: 137,
            url: POLYGON_RPC_URL,
            // accounts: [`0x${ETH_PRIVATE_KEY}`],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        arbitrum: {
            networkId: 42161,
            url: ARBITRUM_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        optimism: {
            networkId: 10,
            url: OPTIMISM_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        base: {
            networkId: 8453,
            url: BASE_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        scroll: {
            networkId: 534352,
            url: SCROLL_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
        polygonZkevm: {
            networkId: 1101,
            url: POLYGON_ZKEVM_RPC_URL,
            // accounts : [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
    etherscan: {
        apiKey: {
            polygonMumbai: POLYGONSCAN_API_KEY,
            sepolia: ETHERSCAN_API_KEY,
            optimisticGoerli: OPTISCAN_API_KEY,
            arbitrumGoerli: ARBISCAN_API_KEY,
            baseSepolia: BASESCAN_API_KEY,
            scrollTestnet: SCROLLSCAN_API_KEY,
            polygonzKevmTestnet: POLYGON_ZKEVM_API_KEY,
        },
        customChains: [
            // {
            //     network: "baseTestnet",
            //     chainId: 84532,
            //     urls: {
            //         apiURL: "https://api-goerli.basescan.org/api",
            //         browserURL: "https://goerli.basescan.org",
            //     },
            // },
            {
                network: "scrollTestnet",
                chainId: 534351,
                urls: {
                    apiURL: "https://scroll.l2scan.co/api",
                    browserURL: "https://scroll.l2scan.co",
                },
            },
            {
                network: "polygonzKevmTestnet",
                chainId: 1442,
                urls: {
                    apiURL: "https://api-zkevm.polygonscan.com/api",
                    browserURL: "https://testnet-zkevm.polygonscan.com",
                },
            },
        ],
    },
    sourcify: {
        // Disabled by default
        // Doesn't need an API key
        enabled: true,
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 20000,
    },
}
