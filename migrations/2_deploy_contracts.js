var Adoption = artifacts.require("Adoption");

module.exports = function(deployer, network) {
  if (network === 'development') {
    deployer.deploy(Adoption);
  } else if (network == 'env') {
    console.log('Not implemented!')
  } else {
    console.log('Unknown network: ' + network)
  }
};
