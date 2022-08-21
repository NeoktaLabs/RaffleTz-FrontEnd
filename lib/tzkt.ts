import axios from "axios"
import {apiUrl} from "../tezos/config"

// get the list of tezmint nfts owned by an address
export const getFa2Owned = async (tokenAddress: string, accountPkh: string): Promise<any> => {
    try {
        const _res = await axios.get(`${apiUrl}/tokens/balances?account=${accountPkh}&?standard=fa2`);
        return _res.data.filter((item: any) => item.token.contract.address === tokenAddress);
    } catch (err) {
        throw err
    }
}
