module.exports = function(embark) {

  embark.registerClientWeb3Provider(function(opts) {
    return "window.a = " + opts.rpcPort + ";";
  });

  embark.registerContractsGeneration(function(opts) {
    var result = "";

    for(var className in opts.contracts) {
      var contract = opts.contracts[className];
      result += "\n" + className + " = " + contract.deployedAddress + ";";
    }

    return result;
  });

};
