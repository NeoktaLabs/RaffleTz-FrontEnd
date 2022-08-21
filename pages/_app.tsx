import type {AppProps} from 'next/app'
import {TezosToolkit} from "@taquito/taquito";
import {createContext, useEffect, useState} from "react";
import {BeaconWallet} from "@taquito/beacon-wallet";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';

export const TezosContext = createContext<TezosToolkit | null>(null);
export const WalletContext = createContext<BeaconWallet | null>(null);

function MyApp({Component, pageProps}: AppProps) {
    const [currentTezos, setCurrentTezos] = useState<TezosToolkit>();
    const [currentWallet, setCurrentWallet] = useState<BeaconWallet>();
    useEffect(() => {
        const Tezos: TezosToolkit = new TezosToolkit(process.env.NEXT_PUBLIC_RPC_URL);
        const options: any = {
            name: process.env.NEXT_PUBLIC_APP_NAME,
            iconUrl: 'https://tezostaquito.io/img/favicon.svg',
            preferredNetwork: process.env.NEXT_PUBLIC_RPC_NETWORK_NAME,
        };
        const Wallet = new BeaconWallet(options);
        Tezos.setWalletProvider(Wallet);
        setCurrentTezos(Tezos);
        setCurrentWallet(Wallet);
    }, []);
    return (
        <TezosContext.Provider value={currentTezos}>
            <WalletContext.Provider value={currentWallet}>
                <Component {...pageProps} />
            </WalletContext.Provider>
        </TezosContext.Provider>
    );
}

export default MyApp
