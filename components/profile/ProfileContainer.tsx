import React, {useEffect} from 'react';
import Link from "next/link";
import useWalletStore from "../../tezos/useWalletStore";
import NftCard from "../generic/NFTCard";
import ListCard from "../generic/ListCard";

const ProfileContainer = () => {
    const {isConnected, balance, nftsMinted, getTokenBalances} = useWalletStore();
    useEffect(() => {
        if (isConnected)
            getTokenBalances()
    }, [isConnected])
    return (
        <div>
            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
            {!isConnected && (
                <h1>You must be logged.</h1>
            )}
            {isConnected && (
                <div>
                    <h1>My profile</h1>
                    <ul>
                        <li>Balance: <b>{balance / 1000000}Tez</b></li>
                        <li>NFTs: <>
                            {!nftsMinted?.length && <i>No NFT.</i>}
                            {nftsMinted?.length && (
                                <ListCard>
                                    {nftsMinted.map(nft => <NftCard key={nft.id}
                                                                    imgSrc={nft?.token?.metadata?.thumbnailUri}
                                                                    name={nft?.token?.metadata?.name}
                                                                    description={nft?.token?.metadata?.description}/>)}
                                </ListCard>
                            )}
                        </></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileContainer;
