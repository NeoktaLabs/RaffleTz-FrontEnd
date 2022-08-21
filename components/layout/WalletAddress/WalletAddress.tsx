import React, {useEffect, useState} from 'react';
import useWalletStore from "../../../tezos/useWalletStore";

const WalletAddress = ({callback}) => {
    const [address, setAddress] = useState<string>();
    const {accountPkh} = useWalletStore();
    useEffect(() => {
        if (accountPkh) {
            setAddress(`${accountPkh.substring(0, 2)}...${accountPkh.substring(-1, 4)}`);
        }
    }, [accountPkh]);
    return (
        <div className={'border rounded p-2'} style={{cursor: 'pointer'}} onClick={callback || (() => null)}>
            <span className={'d-flex justify-content-between align-items-center'}>
                {!address && 'Loading...'}
                {address && (
                    <>
                        <span>{address}</span>
                        <span className={'mx-1 fas fa-user'}/>
                    </>
                )}
        </span>
        </div>
    );
};

export default WalletAddress;
