/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  web3apiSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api",
    },
  ],
  streamsSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api",
    },
  ],
  authenticationSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api",
    },
  ],
  exampledappsSidebar: [
    {
      type: "autogenerated",
      dirName: "04-example-dapps",
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "reference/introduction",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "reference/introduction",
        },
      ],
    },
    {
      type: "category",
      label: "Web3 Data API",
      className: "web3-data-api",
      items: [
        {
          type: "category",
          label: "EVM API",
          className: "evm-api",
          items: [
            {
              type: "category",
              label: "NFT API",
              className: "nft-api",
              items: [
                {
                  type: "category",
                  label: "Get NFTs",
                  className: "get-nfts",
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "reference/web3-data-api/evm-api/nft-api/get-nfts",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Get Transfers",
                  className: "get-transfers",
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "reference/web3-data-api/evm-api/nft-api/get-transfers",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Get Collections",
                  className: "get-collections",
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "reference/web3-data-api/evm-api/nft-api/get-collections",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Get Owners",
                  className: "get-owners",
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "reference/web3-data-api/evm-api/nft-api/get-owners",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Get Market Data",
                  className: "get-market-data",
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "reference/web3-data-api/evm-api/nft-api/get-market-data",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Get Metadata",
                  className: "get-metadata",
                  items: [
                    {
                      type: "autogenerated",
                      dirName:
                        "reference/web3-data-api/evm-api/nft-api/get-metadata",
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Token API",
              className: "sidebar-token-api",
              items: [
                {
                  type: "category",
                  label: "Get Market Data",
                  className: "get-market-data",
                  items: ["reference/get-nfts-by-wallet"],
                },
                {
                  type: "category",
                  label: "Get Balance",
                  className: "sidebar-token-api",
                  items: ["reference/get-nfts-by-wallet"],
                },
                {
                  type: "category",
                  label: "Get Transactions",
                  className: "sidebar-token-api",
                  items: ["reference/get-nfts-by-wallet"],
                },
                {
                  type: "category",
                  label: "Get Metadata",
                  className: "sidebar-token-api",
                  items: ["reference/get-nfts-by-wallet"],
                },
              ],
            },
            {
              type: "category",
              label: "Balance API",
              className: "sidebar-balance-api",
              items: [
                {
                  type: "autogenerated",
                  dirName: "reference/web3-data-api/evm-api/balance-api",
                },
              ],
            },
            {
              type: "category",
              label: "Transaction API",
              className: "sidebar-transaction-api",
              items: [
                {
                  type: "category",
                  label: "Get Transaction",
                  className: "sidebar-token-api",
                  items: ["reference/get-nfts-by-wallet"],
                },
              ],
            },
            {
              type: "category",
              label: "Events API",
              className: "sidebar-events-api",
              items: ["reference/get-nfts-by-wallet"],
            },
            {
              type: "category",
              label: "Block API",
              className: "sidebar-block-api",
              items: [
                {
                  type: "autogenerated",
                  dirName: "reference/web3-data-api/evm-api/block-api",
                },
              ],
            },
            {
              type: "category",
              label: "Utils",
              className: "sidebar-utils-api",
              items: ["reference/get-nfts-by-wallet"],
            },
            {
              type: "category",
              label: "Resolve API",
              className: "sidebar-resolve-api",
              items: ["reference/get-nfts-by-wallet"],
            },
            {
              type: "category",
              label: "EVM DeFi API",
              className: "sidebar-defi-api",
              items: ["reference/get-nfts-by-wallet"],
            },
            {
              type: "category",
              label: "EVM IPFS API",
              className: "sidebar-ipfs-api",
              items: ["reference/get-nfts-by-wallet"],
            },
          ],
        },
        {
          type: "category",
          label: "Solana API",
          className: "sidebar-solana-api",
          items: ["reference/get-nfts-by-wallet"],
        },
      ],
    },
    {
      type: "category",
      label: "Streams API",
      className: "sidebar-streams-api",
      items: ["reference/get-nfts-by-wallet"],
    },
    {
      type: "category",
      label: "Authentication API",
      className: "sidebar-authentication-api",
      items: ["reference/get-nfts-by-wallet"],
    },
  ],
};

module.exports = sidebars;
