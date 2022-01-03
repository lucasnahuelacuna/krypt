//https://eth-ropsten.alchemyapi.io/v2/Qoa09UdfbyvEOAWFDhH7-TwgTlzbVj0F

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Qoa09UdfbyvEOAWFDhH7-TwgTlzbVj0F',
      accounts: [ 'cdf0df7a6dc3b476576b17d374e05eaa37b313e7fbe18536bf56b5291e5ef8f9' ]
    }
  }
};
