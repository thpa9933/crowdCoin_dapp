import Web3 from "web3";

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // We are in the browser and metamask is running
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    // We are on the server or metamask is not running
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/031895c679ef484f9e8ff2b6b2961023'
    );
    web3 = new Web3(provider);
}

export default web3;