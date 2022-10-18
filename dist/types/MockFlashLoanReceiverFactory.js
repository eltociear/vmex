"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFlashLoanReceiverFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MockFlashLoanReceiverFactory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(provider, overrides) {
        return super.deploy(provider, overrides || {});
    }
    getDeployTransaction(provider, overrides) {
        return super.getDeployTransaction(provider, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockFlashLoanReceiverFactory = MockFlashLoanReceiverFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ILendingPoolAddressesProvider",
                name: "provider",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "_assets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_premiums",
                type: "uint256[]",
            },
        ],
        name: "ExecutedWithFail",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "_assets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_premiums",
                type: "uint256[]",
            },
        ],
        name: "ExecutedWithSuccess",
        type: "event",
    },
    {
        inputs: [],
        name: "ADDRESSES_PROVIDER",
        outputs: [
            {
                internalType: "contract ILendingPoolAddressesProvider",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "LENDING_POOL",
        outputs: [
            {
                internalType: "contract ILendingPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "amountToApprove",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "assets",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "premiums",
                type: "uint256[]",
            },
            {
                internalType: "address",
                name: "initiator",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "params",
                type: "bytes",
            },
        ],
        name: "executeOperation",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountToApprove",
                type: "uint256",
            },
        ],
        name: "setAmountToApprove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "fail",
                type: "bool",
            },
        ],
        name: "setFailExecutionTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "flag",
                type: "bool",
            },
        ],
        name: "setSimulateEOA",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "simulateEOA",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b50604051610b62380380610b6283398101604081905261002f916100d6565b80806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561008657600080fd5b505afa15801561009a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100be91906100d6565b60601b6001600160601b03191660a052506101119050565b6000602082840312156100e7578081fd5b81516100f2816100f9565b9392505050565b6001600160a01b038116811461010e57600080fd5b50565b60805160601c60a05160601c610a1f6101436000396000818161045201526105420152600061012d0152610a1f6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b4dcfc771161005b578063b4dcfc77146100e8578063bb271c4d146100f0578063bf443f8514610105578063e9a6a25b1461011857610088565b80630542975c1461008d578063388f70f1146100ab5780634444f331146100c0578063920f5c84146100d5575b600080fd5b61009561012b565b6040516100a29190610840565b60405180910390f35b6100be6100b936600461079e565b61014f565b005b6100c861016d565b6040516100a291906108e2565b6100c86100e3366004610688565b610176565b610095610540565b6100f8610564565b6040516100a29190610922565b6100be6101133660046107d6565b61056a565b6100be61012636600461079e565b61056f565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008054911515600160a01b0260ff60a01b19909216919091179055565b60025460ff1690565b60008054600160a01b900460ff16156101d1577f9972b212e52913783072b960dd41527ae8b6e609d017b64039758dda0ce412788686866040516101bc9392919061086d565b60405180910390a15060025460ff1615610537565b60005b86518110156104f75760008782815181106101ff57634e487b7160e01b600052603260045260246000fd5b6020026020010151905087828151811061022957634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161025c9190610840565b60206040518083038186803b15801561027457600080fd5b505afa158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac91906107ee565b8783815181106102cc57634e487b7160e01b600052603260045260246000fd5b602002602001015111156102fb5760405162461bcd60e51b81526004016102f2906108ed565b60405180910390fd5b60006001546000141561036e5761036987848151811061032b57634e487b7160e01b600052603260045260246000fd5b602002602001015189858151811061035357634e487b7160e01b600052603260045260246000fd5b602002602001015161058290919063ffffffff16565b610372565b6001545b9050816001600160a01b031663a0712d688885815181106103a357634e487b7160e01b600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016103c79190610922565b602060405180830381600087803b1580156103e157600080fd5b505af11580156103f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041991906107ba565b5088838151811061043a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b815260040161048f929190610854565b602060405180830381600087803b1580156104a957600080fd5b505af11580156104bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e191906107ba565b50505080806104ef90610991565b9150506101d4565b507fbd6b6bfac59612765a81cc4fdee74ab4859671fa14a562056f9eea438735a78a86868660405161052b9392919061086d565b60405180910390a15060015b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015490565b600155565b6002805460ff1916911515919091179055565b600061058e8284610979565b9392505050565b80356001600160a01b03811681146105ac57600080fd5b919050565b600082601f8301126105c1578081fd5b813560206105d66105d183610955565b61092b565b82815281810190858301838502870184018810156105f2578586fd5b855b85811015610610578135845292840192908401906001016105f4565b5090979650505050505050565b600082601f83011261062d578081fd5b813567ffffffffffffffff811115610647576106476109c2565b61065a601f8201601f191660200161092b565b81815284602083860101111561066e578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a0868803121561069f578081fd5b853567ffffffffffffffff808211156106b6578283fd5b818801915088601f8301126106c9578283fd5b813560206106d96105d183610955565b82815281810190858301838502870184018e10156106f5578788fd5b8796505b8487101561071e5761070a81610595565b8352600196909601959183019183016106f9565b5099505089013592505080821115610734578283fd5b61074089838a016105b1565b95506040880135915080821115610755578283fd5b61076189838a016105b1565b945061076f60608901610595565b93506080880135915080821115610784578283fd5b506107918882890161061d565b9150509295509295909350565b6000602082840312156107af578081fd5b813561058e816109d8565b6000602082840312156107cb578081fd5b815161058e816109d8565b6000602082840312156107e7578081fd5b5035919050565b6000602082840312156107ff578081fd5b5051919050565b6000815180845260208085019450808401835b8381101561083557815187529582019590820190600101610819565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b606080825284519082018190526000906020906080840190828801845b828110156108af5781516001600160a01b03168452928401929084019060010161088a565b505050838103828501526108c38187610806565b91505082810360408401526108d88185610806565b9695505050505050565b901515815260200190565b6020808252818101527f496e76616c69642062616c616e636520666f722074686520636f6e7472616374604082015260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561094d5761094d6109c2565b604052919050565b600067ffffffffffffffff82111561096f5761096f6109c2565b5060209081020190565b6000821982111561098c5761098c6109ac565b500190565b60006000198214156109a5576109a56109ac565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146109e657600080fd5b5056fea2646970667358221220c86a546142bff98535332bdf40d79eb06accf27cf0c93aee20b212ac6aa2f10464736f6c63430008000033";
//# sourceMappingURL=MockFlashLoanReceiverFactory.js.map