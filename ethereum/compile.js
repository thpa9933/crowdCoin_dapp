const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// The purpose of this compile script is to recompile and overwrite
// the existing contracts when a contract change has taken place
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// Get compiled contract object (contains 2 contracts)
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

// Create files in build folder for each individual contract 
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
