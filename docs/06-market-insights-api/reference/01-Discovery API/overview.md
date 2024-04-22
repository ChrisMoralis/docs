---
title: "Discovery API"
sidebar_label: "Overview"
sidebar_class_name: "sidebar-market-data-api"
sidebar_position: 0
slug: "/market-insights-api/reference/discovery-api/overview"
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

<ApiBanner
  customText="Get access to the Discovery API"
  customButtonText="Contact Sales"
  customButtonLink="https://moralis.io/api/discovery/"
/>

The Discovery API provides a comprehensive suite of endpoints designed to uncover new trends, insightful tokens, and hidden gems within the cryptocurrency market. It goes beyond standard market data by analyzing patterns, liquidity movements, buying pressures, and other critical factors that indicate a token's potential. The Discovery API from Moralis is designed to provide in-depth data about blockchain tokens, enabling developers and businesses to access detailed information about token metrics, transaction histories, and market trends. This API is crucial for applications requiring up-to-date token data and blockchain analytics. Currently, the Discovery API strategy endpoint responses are limited to 200 tokens with no pagination and data is updated every 10 minutes. The theory was, if more than 200 tokens exist, more filters could be applied to narrow the results.

## Token Insights

Token Insights is a suite of endpoints within the Discovery API that offer various perspectives on the market, each tailored to different investment strategies and research needs:

| No. | Method                      | Description                                                | API Reference                                                                             | URL                                                                                                                                                        |
| --- | --------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `getRisingLiquidityTokens`  | Identify tokens with rising liquidity                      | [Method Documentation](/market-insights-api/reference/get-tokens-with-rising-liquidity)   | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/rising-liquidity](https://deep-index.moralis.io/api/v2.2/discovery/tokens/rising-liquidity)       |
| 2   | `getTopBuyPressureTokens`   | Find tokens with the highest buying pressure               | [Method Documentation](/market-insights-api/reference/get-tokens-with-buying-pressure)    | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/buying-pressure](https://deep-index.moralis.io/api/v2.2/discovery/tokens/buying-pressure)         |
| 3   | `getExperiencedBuyerTokens` | Discover tokens popular with experienced buyers            | [Method Documentation](/market-insights-api/reference/get-tokens-with-experienced-buyers) | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/experienced-buyers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/experienced-buyers)   |
| 4   | `getSolidPerformanceTokens` | List tokens that have shown solid performance              | [Method Documentation](/market-insights-api/reference/get-tokens-with-solid-performance)  | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/solid-performers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/solid-performers)       |
| 5   | `getBlueChipTokens`         | Get tokens that are considered strong and reliable         | [Method Documentation](/market-insights-api/reference/get-tokens-with-blue-chip)          | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/blue-chip](https://deep-index.moralis.io/api/v2.2/discovery/tokens/blue-chip)                     |
| 6   | `getRiskyBetTokens`         | Identify tokens that are considered high risk, high reward | [Method Documentation](/market-insights-api/reference/get-tokens-with-risky-bets)         | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/risky-bets](https://deep-index.moralis.io/api/v2.2/discovery/tokens/risky-bets)                   |
| 7   | `getTopGainersTokens`       | Get tokens with top gainers                                | [Method Documentation](/market-insights-api/reference/get-tokens-with-top-gainers)        | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-gainers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/get-tokens-with-top-gainers) |
| 8   | `getTopLosersTokens`        | Get tokens with top losers                                 | [Method Documentation](/market-insights-api/reference/get-tokens-with-top-losers)         | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/top-losers](https://deep-index.moralis.io/api/v2.2/discovery/tokens/get-tokens-with-top-losers)   |
| 9   | `getTrendingTokens`         | Get trending tokens                                        | [Method Documentation](/market-insights-api/reference/get-trending-tokens)                | [https://deep-index.moralis.io/api/v2.2/discovery/tokens/trending](https://deep-index.moralis.io/api/v2.2/discovery/tokens/trending)                       |
| 10  | `getDiscoveryToken`         | Get token details                                          | [Method Documentation](/market-insights-api/reference/get-token-details)                  | [https://deep-index.moralis.io/api/v2.2/discovery/token](https://deep-index.moralis.io/api/v2.2/discovery/token)                                           |

## Supported Chains

import { EVMChainData } from '@site/src/components/SupportedChains';

<EVMChainData/>

## Frequently Asked Questions

### What is `rating` and what does `total_number_of_rating` mean in the `/token` endpoint?
- **Rating**: A user-generated score based on ratings users give tokens over at Moralismoney.com. It has no significance in terms of underlying market data.
- **Total Number of Ratings**: Reflects the total count of ratings that have been submitted for a token.

### How is the `on_chain_strength_index` calculated and what metrics influence it?
- **Description**: A proprietary momentum indicator that evaluates on-chain metrics like buy pressure, experienced buyers, liquidity, etc., across all timeframes.
- **Calculation**: If the data shows increased momentum across timeframes, the on-chain strength index is higher; otherwise, it's lower. Values range from -100 to +100.

### What factors contribute to the `security_score`?
- **Description**: A composite score assessing the risk associated with a token based on on-chain and social parameters.
- **Factors**: Includes smart contract parameters (sell tax, buy tax, honeypot contract, etc.), token age, and social media following.
- **Scoring**: Lower scores indicate higher risk, and higher scores indicate lower risk.

### How are `volume_change_usd` and `net_volume_change_usd` different? Can these values be negative?
- **Volume Change USD**: Represents the total volume for the specified period.
- **Net Volume Change USD**: Measures the change in net volume from the last timeframe, calculated as the difference between buy and sell volumes. Can indeed be negative.

### How are trending tokens ranked?
- **Criteria**: Tokens are classified as trending if they have a positive on-chain strength index, indicating strong market momentum based on Moralis' proprietary analytics.

### When will token categories be available in the API?
- **Future Implementation**: Categories such as Decentralized Finance, Exchange-Issued Asset Tokens, etc., will be incorporated into the API. These will follow the classification found in Moralis Money.

### Are there any rate limits for using the Discovery API?
- **Policy**: Currently, there are no rate limits for the Discovery API. However, it's recommended to cache responses and update them on a set time interval (e.g., once per minute or every 5 minutes).

### How is `total_liquidity_locked_in_percent` calculated? Is it reliable?
- **Description**: Represents the percentage of total liquidity that is locked. It measures liquidity based on external sources and is subject to third-party reliability.

### What is the cost of using the Discovery API?
- **Cost**: This is a premium endpoint with a cost per call. For trials and pricing details, contact [success@moralis.io](mailto:success@moralis.io).

### How are responses sorted in the strategy endpoints of the Discovery API?
- **Buying Pressure**: `experienced_net_buyers_change - 1 week - DESC`
- **Blue Chip**: `price_percentage_change_usd - 1 day - DESC`
- **Experienced Buyers**: `experienced_net_buyers_change - 1 week - DESC`
- **Rising Liquidity**: `liquidity_change_usd - 1 month - DESC`
- **Risky Bets**: `market_cap - DESC`
- **Solid Performers**: `net_volume_change_usd - 1 day - DESC`
- **Top Gainers**: `price_percentage_change_usd - 1 day - DESC`
- **Top Losers**: `price_percentage_change_usd - 1 day - ASC`
- **Trending Tokens**: `on_chain_strength_index - DESC`
