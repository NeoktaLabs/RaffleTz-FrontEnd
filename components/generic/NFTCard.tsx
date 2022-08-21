import React from 'react';
import {ipfsToGatewayLink} from "../../lib/utils";

const NftCard = ({imgSrc, name, description}: any) => {
    return (
        <div className={'col-3 overflow-hidden'}>
            <div className={'border rounded overflow-hidden h-100 d-flex flex-column p-2'}>
                <div className={'overflow-hidden'}>
                    <img className={'h-auto w-100'} src={ipfsToGatewayLink(imgSrc)} alt={name}/>
                </div>
                <div>
                    <p><b>{name}</b></p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default NftCard;
