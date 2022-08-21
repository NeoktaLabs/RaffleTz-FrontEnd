import React from 'react';
import Link from "next/link";
import useWalletStore from "../../tezos/useWalletStore";

const HomeContainer = () => {
    const {isConnected} = useWalletStore();
    return (
        <div>
            {isConnected && (<p>
                <Link href="/profile">
                    <a>Profile</a>
                </Link>
            </p>)}
            <h1>Hello Next.js Prod 👋</h1>
        </div>
    );
};

export default HomeContainer;
