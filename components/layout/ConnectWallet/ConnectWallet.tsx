import React, {useEffect} from 'react';
import Button from "../../generic/Button";
import useWalletStore from "../../../tezos/useWalletStore";

const ConnectWallet = () => {
    const {connectWallet} = useWalletStore();

    useEffect(() => {
        connectWallet(false).then();
    }, []);
    return (
        <Button callback={() => connectWallet(true)}>
            Connect my wallet
        </Button>
    );
};

export default ConnectWallet;
