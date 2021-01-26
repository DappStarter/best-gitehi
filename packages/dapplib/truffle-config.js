require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food isolate riot noble artwork coral light army gentle'; 
let testAccounts = [
"0x1bff89a05057c47b5970b0ca6852e3bf4237ecd68f9cdebb93b080f34984f6df",
"0xf322b744f3d14700fe25184afc8fcbb31dba7ba837fb2c4ae054b4f5170374db",
"0x55482c67fae32f87981aaa0a8292aeaa5479472c72336ab8ee785d023ce31149",
"0x3464b344826faf5571a9f2a8efbdc7b2eb645351d11bddb866d851f46658fa2a",
"0x73baafcd84c45921d9aec77370821bbb73a6f02b6c6bf54386ac2ef7200232c0",
"0x37a42f7c4691c041c9b346b7236bb8cc543811d9aac99edc2b6e55480ec1817d",
"0x75ef726f7ab81e04f87c7e2ab3eef5b35115187b23746a4ad3e41d6a5dcc9a62",
"0x89deacbf9d7948dba5bdf9cef8ce7dd6435d373ef82027972ce0f637a4eaa85d",
"0xdac03a4f4bc577c43a0004e730a1e9d0c0a8fdba32ddc1e774f3766fdc7bf959",
"0xa7069420ca2af4c7948eb129e50e2ab144708cd95020696876789a837d503341"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
