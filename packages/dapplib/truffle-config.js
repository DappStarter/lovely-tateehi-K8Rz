require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name riot magic million grace drive equal gesture'; 
let testAccounts = [
"0x1219531254ccfe66580dd480a13df6ac30bf964370438b9b1906fbd92f704497",
"0x53fedf93c30fe112cf34b0fb3a40e605f26fdd17f804258417fba7778131c022",
"0xccc0beaad54c45968c7f73a1a33b5c66d74ebd99b1987c3be9f9715d49c0b00f",
"0x04d7946380f659eb5bc98261ea271366da2d623f727e29f57a056aef17db1c9c",
"0x33a5a889c6b90f5a75622ec84b70e596e47833d6263fb82fac54e5a2b90bd786",
"0xa7e41036d9decf3200c4a81f9ce99d82083ed9d0c50affca151d48d2b482b144",
"0xc533430334a9aba85770e063f31e2d69c582c1b683094399385ad5ade99ffd5f",
"0x6ec75148caf803deedc3276e459be6041bac7ddf96d8901b6bc7a21fe94d7b54",
"0xd0c67a391752d23ff8047982c0075cef1c99e8bbd607002e57bc525fdd3c9350",
"0xcbcb78b681b9d4213a869a5279b7197e84b7c01b903b934e8b524fb654ad8397"
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
            version: '^0.8.0'
        }
    }
};

