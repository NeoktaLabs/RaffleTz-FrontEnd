import React from 'react';
import useWalletStore from "../../../tezos/useWalletStore";

const Logout = () => {
    const {disconnectAccount} = useWalletStore();
    return (
        <div className={'align-items-center d-flex'} style={{cursor: 'pointer'}}
             onClick={() => {
                 disconnectAccount();
                 window.location.reload();
             }}>
            <span className={'fa fa-door-open mx-2'}/>
        </div>
    );
};

export default Logout;
