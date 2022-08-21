import React from 'react';
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import WalletAddress from "./WalletAddress/WalletAddress";
import Logout from "./Logout/Logout";
import useWalletStore from "../../tezos/useWalletStore";
import Link from "next/link";

const Header = () => {
    const {isConnected} = useWalletStore();
    return (
        <header>
            <div className={'align-items-center d-flex justify-content-between px-5 py-2 bg-black text-white'}>
                <Link href={"/"}><h1 style={{cursor: 'pointer'}}>RaffleTz</h1></Link>
                <div>Create Raffle</div>
                {!isConnected && <ConnectWallet/>}
                {isConnected && (
                    <div className={'d-flex justify-content-center'}>
                        <WalletAddress callback={() => alert('GO TO PROFILE (TODO)')}/>
                        <Logout/>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
