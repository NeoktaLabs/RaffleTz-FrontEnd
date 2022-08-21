import {NetworkType} from "@airgap/beacon-sdk";

export const apiUrl = process.env.NEXT_PUBLIC_TZKT_API_URL;
export const SFT_CONTRACT = "KT1BkSid4kxYd3Lmht6jv8Z1RdpSkkjEJ8Gq"; // Semi fungible Token Contract Address
export const NFT_CONTRACT = "KT1Qsy19tB9VpLWW1thEoREFujaQe9FEYhi7"; // Non Fungible Token Contract Address

type ConfigType = {
    dappName: string
    network: NetworkType
    rpcUrl: string
}

export const tezosConfig: ConfigType = {
    dappName: process.env.NEXT_PUBLIC_APP_NAME,
    network: process.env.NEXT_PUBLIC_RPC_NETWORK_NAME as any,
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL
}
