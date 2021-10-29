import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0a679ACB6B46e8020b8572DAabfE50247fF91447'
);

export default instance;