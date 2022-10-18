"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AaveProtocolDataProviderFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class AaveProtocolDataProviderFactory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(addressesProvider, overrides) {
        return super.deploy(addressesProvider, overrides || {});
    }
    getDeployTransaction(addressesProvider, overrides) {
        return super.getDeployTransaction(addressesProvider, overrides || {});
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
exports.AaveProtocolDataProviderFactory = AaveProtocolDataProviderFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ILendingPoolAddressesProvider",
                name: "addressesProvider",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
        inputs: [
            {
                internalType: "uint64",
                name: "trancheId",
                type: "uint64",
            },
        ],
        name: "getAllATokens",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                    },
                ],
                internalType: "struct AaveProtocolDataProvider.TokenData[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "trancheId",
                type: "uint64",
            },
        ],
        name: "getAllReservesTokens",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address",
                    },
                ],
                internalType: "struct AaveProtocolDataProvider.TokenData[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "trancheId",
                type: "uint64",
            },
        ],
        name: "getReserveConfigurationData",
        outputs: [
            {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "ltv",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidationThreshold",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidationBonus",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reserveFactor",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "usageAsCollateralEnabled",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "borrowingEnabled",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "stableBorrowRateEnabled",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "isActive",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "isFrozen",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "trancheId",
                type: "uint64",
            },
        ],
        name: "getReserveData",
        outputs: [
            {
                internalType: "uint256",
                name: "availableLiquidity",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalStableDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalVariableDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidityRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "variableBorrowRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "stableBorrowRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "averageStableBorrowRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidityIndex",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "variableBorrowIndex",
                type: "uint256",
            },
            {
                internalType: "uint40",
                name: "lastUpdateTimestamp",
                type: "uint40",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "trancheId",
                type: "uint64",
            },
        ],
        name: "getReserveTokensAddresses",
        outputs: [
            {
                internalType: "address",
                name: "aTokenAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "stableDebtTokenAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "variableDebtTokenAddress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "trancheId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getUserReserveData",
        outputs: [
            {
                internalType: "uint256",
                name: "currentATokenBalance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "currentStableDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "currentVariableDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "principalStableDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "scaledVariableDebt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "stableBorrowRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidityRate",
                type: "uint256",
            },
            {
                internalType: "uint40",
                name: "stableRateLastUpdated",
                type: "uint40",
            },
            {
                internalType: "bool",
                name: "usageAsCollateralEnabled",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60a060405234801561001057600080fd5b50604051611e67380380611e6783398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c611da66100c160003960008181610175015281816104c2015281816104ec0152818161062c0152818161079201528181610b1201528181610c2501526111110152611da66000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806378e0de7b1161005b57806378e0de7b146100e25780637ba497fe1461010b578063b15007ce14610134578063f98c06571461015c5761007d565b8063027fb45c146100825780630542975c146100ab5780634af913ab146100c0575b600080fd5b610095610090366004611a41565b61016f565b6040516100a29190611ae3565b60405180910390f35b6100b36104c0565b6040516100a29190611a89565b6100d36100ce3660046116f1565b6104e4565b6040516100a293929190611a9d565b6100f56100f03660046116f1565b610619565b6040516100a29a99989796959493929190611b72565b61011e6101193660046116f1565b61077f565b6040516100a29a99989796959493929190611bc1565b610147610142366004611729565b610b01565b6040516100a299989796959493929190611c0d565b61009561016a366004611a41565b61110b565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101cc57600080fd5b505afa1580156101e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020491906116ce565b90506000816001600160a01b03166313f9cf37856040518263ffffffff1660e01b81526004016102349190611c55565b60006040518083038186803b15801561024c57600080fd5b505afa158015610260573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102889190810190611773565b90506000815167ffffffffffffffff8111156102b457634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156102ed57816020015b6102da611612565b8152602001906001900390816102d25790505b50905060005b82518110156104b5576000846001600160a01b0316637ba497fe85848151811061032d57634e487b7160e01b600052603260045260246000fd5b6020026020010151896040518363ffffffff1660e01b8152600401610353929190611ac0565b6102206040518083038186803b15801561036c57600080fd5b505afa158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a491906118d1565b90508667ffffffffffffffff1681610180015167ffffffffffffffff16146103dc57634e487b7160e01b600052600160045260246000fd5b60405180604001604052808260e001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561042457600080fd5b505afa158015610438573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104609190810190611826565b81526020018260e001516001600160a01b031681525083838151811061049657634e487b7160e01b600052603260045260246000fd5b60200260200101819052505080806104ad90611cfb565b9150506102f3565b50925050505b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561054357600080fd5b505afa158015610557573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057b91906116ce565b6001600160a01b0316637ba497fe87876040518363ffffffff1660e01b81526004016105a8929190611ac0565b6102206040518083038186803b1580156105c157600080fd5b505afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f991906118d1565b60e081015161010082015161012090920151909891975095509350505050565b60008060008060008060008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561068357600080fd5b505afa158015610697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bb91906116ce565b6001600160a01b031663064db8658e8e6040518363ffffffff1660e01b81526004016106e8929190611ac0565b60206040518083038186803b15801561070057600080fd5b505afa158015610714573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073891906118b6565b90506107438161153c565b909e50929c50909a509850965061075981611567565b80975081985082955083965050505050600089119550509295989b9194979a5092959850565b60008060008060008060008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107e957600080fd5b505afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082191906116ce565b6001600160a01b0316637ba497fe8e8e6040518363ffffffff1660e01b815260040161084e929190611ac0565b6102206040518083038186803b15801561086757600080fd5b505afa15801561087b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089f91906118d1565b60e08101516040516370a0823160e01b81529192506001600160a01b038f16916370a08231916108d191600401611a89565b60206040518083038186803b1580156108e957600080fd5b505afa1580156108fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109219190611a0f565b8161010001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561095f57600080fd5b505afa158015610973573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109979190611a0f565b8261012001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109d557600080fd5b505afa1580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d9190611a0f565b836060015184608001518560a001518661010001516001600160a01b03166390f6fcf26040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5a57600080fd5b505afa158015610a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a929190611a0f565b876020015188604001518960c00151866001600160801b03169650856001600160801b03169550846001600160801b03169450826001600160801b03169250816001600160801b031691509a509a509a509a509a509a509a509a509a509a50509295989b9194979a5092959850565b6000806000806000806000806000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b6957600080fd5b505afa158015610b7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba191906116ce565b6001600160a01b0316637ba497fe8e8e6040518363ffffffff1660e01b8152600401610bce929190611ac0565b6102206040518083038186803b158015610be757600080fd5b505afa158015610bfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1f91906118d1565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c7c57600080fd5b505afa158015610c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb491906116ce565b6001600160a01b031663e87549f48d8f6040518363ffffffff1660e01b8152600401610ce1929190611ac0565b60206040518083038186803b158015610cf957600080fd5b505afa158015610d0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3191906118b6565b60e08301516040516370a0823160e01b81529192506001600160a01b0316906370a0823190610d64908f90600401611a89565b60206040518083038186803b158015610d7c57600080fd5b505afa158015610d90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db49190611a0f565b6101208301516040516370a0823160e01b8152919c506001600160a01b0316906370a0823190610de8908f90600401611a89565b60206040518083038186803b158015610e0057600080fd5b505afa158015610e14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e389190611a0f565b6101008301516040516370a0823160e01b8152919a506001600160a01b0316906370a0823190610e6c908f90600401611a89565b60206040518083038186803b158015610e8457600080fd5b505afa158015610e98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebc9190611a0f565b61010083015160405163631a6fd560e11b8152919b506001600160a01b03169063c634dfaa90610ef0908f90600401611a89565b60206040518083038186803b158015610f0857600080fd5b505afa158015610f1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f409190611a0f565b610120830151604051630ed1279f60e11b81529199506001600160a01b031690631da24f3e90610f74908f90600401611a89565b60206040518083038186803b158015610f8c57600080fd5b505afa158015610fa0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc49190611a0f565b965081606001516001600160801b031694508161010001516001600160a01b031663e78c9b3b8d6040518263ffffffff1660e01b81526004016110079190611a89565b60206040518083038186803b15801561101f57600080fd5b505afa158015611033573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110579190611a0f565b610100830151604051631e739ae360e21b81529197506001600160a01b0316906379ce6b8c9061108b908f90600401611a89565b60206040518083038186803b1580156110a357600080fd5b505afa1580156110b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110db9190611a27565b93506110f882610160015160ff16826115a390919063ffffffff16565b9250505093979b92969a50939750939750565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561116857600080fd5b505afa15801561117c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a091906116ce565b90506000816001600160a01b03166313f9cf37856040518263ffffffff1660e01b81526004016111d09190611c55565b60006040518083038186803b1580156111e857600080fd5b505afa1580156111fc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112249190810190611773565b90506000815167ffffffffffffffff81111561125057634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561128957816020015b611276611612565b81526020019060019003908161126e5790505b50905060005b82518110156104b557739f8f72aa9304c8b593d555f12ef6589cc3a579a26001600160a01b03168382815181106112d657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316141561137d5760405180604001604052806040518060400160405280600381526020016226a5a960e91b815250815260200184838151811061133957634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031681525082828151811061136d57634e487b7160e01b600052603260045260246000fd5b602002602001018190525061152a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b03168382815181106113bb57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316141561141e5760405180604001604052806040518060400160405280600381526020016208aa8960eb1b815250815260200184838151811061133957634e487b7160e01b600052603260045260246000fd5b604051806040016040528084838151811061144957634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561148957600080fd5b505afa15801561149d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114c59190810190611826565b81526020018483815181106114ea57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031681525082828151811061151e57634e487b7160e01b600052603260045260246000fd5b60200260200101819052505b8061153481611cfb565b91505061128f565b5161ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b51670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b60006080821060405180604001604052806002815260200161373760f01b815250906115eb5760405162461bcd60e51b81526004016115e29190611b5f565b60405180910390fd5b506115f7826002611cac565b611602906001611c94565b925190921c600116151592915050565b60408051808201909152606081526000602082015290565b80516104bb81611d42565b805180151581146104bb57600080fd5b600060208284031215611656578081fd5b6040516020810181811067ffffffffffffffff8211171561167957611679611d2c565b6040529151825250919050565b80516001600160801b03811681146104bb57600080fd5b805164ffffffffff811681146104bb57600080fd5b80516104bb81611d5a565b805160ff811681146104bb57600080fd5b6000602082840312156116df578081fd5b81516116ea81611d42565b9392505050565b60008060408385031215611703578081fd5b823561170e81611d42565b9150602083013561171e81611d5a565b809150509250929050565b60008060006060848603121561173d578081fd5b833561174881611d42565b9250602084013561175881611d5a565b9150604084013561176881611d42565b809150509250925092565b60006020808385031215611785578182fd5b825167ffffffffffffffff8082111561179c578384fd5b818501915085601f8301126117af578384fd5b8151818111156117c1576117c1611d2c565b83810291506117d1848301611c6a565b8181528481019084860184860187018a10156117eb578788fd5b8795505b83861015611819578051945061180485611d42565b848352600195909501949186019186016117ef565b5098975050505050505050565b600060208284031215611837578081fd5b815167ffffffffffffffff8082111561184e578283fd5b818401915084601f830112611861578283fd5b81518181111561187357611873611d2c565b611886601f8201601f1916602001611c6a565b915080825285602082850101111561189c578384fd5b6118ad816020840160208601611ccb565b50949350505050565b6000602082840312156118c7578081fd5b6116ea8383611645565b60006102208083850312156118e4578182fd5b6118ed81611c6a565b90506118f98484611645565b815261190760208401611686565b602082015261191860408401611686565b604082015261192960608401611686565b606082015261193a60808401611686565b608082015261194b60a08401611686565b60a082015261195c60c0840161169d565b60c082015261196d60e0840161162a565b60e082015261010061198081850161162a565b9082015261012061199284820161162a565b908201526101406119a484820161162a565b908201526101606119b68482016116bd565b908201526101806119c88482016116b2565b908201526101a083810151908201526101c06119e5818501611635565b908201526101e06119f7848201611635565b90820152610200928301519281019290925250919050565b600060208284031215611a20578081fd5b5051919050565b600060208284031215611a38578081fd5b6116ea8261169d565b600060208284031215611a52578081fd5b81356116ea81611d5a565b60008151808452611a75816020860160208601611ccb565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6001600160a01b0392909216825267ffffffffffffffff16602082015260400190565b60208082528251828201819052600091906040908185019080840286018301878501865b83811015611b5157888303603f1901855281518051878552611b2b88860182611a5d565b918901516001600160a01b03169489019490945294870194925090860190600101611b07565b509098975050505050505050565b6000602082526116ea6020830184611a5d565b998a5260208a0198909852604089019690965260608801949094526080870192909252151560a0860152151560c0850152151560e0840152151561010083015215156101208201526101400190565b998a5260208a019890985260408901969096526060880194909452608087019290925260a086015260c085015260e084015261010083015264ffffffffff166101208201526101400190565b988952602089019790975260408801959095526060870193909352608086019190915260a085015260c084015264ffffffffff1660e083015215156101008201526101200190565b67ffffffffffffffff91909116815260200190565b60405181810167ffffffffffffffff81118282101715611c8c57611c8c611d2c565b604052919050565b60008219821115611ca757611ca7611d16565b500190565b6000816000190483118215151615611cc657611cc6611d16565b500290565b60005b83811015611ce6578181015183820152602001611cce565b83811115611cf5576000848401525b50505050565b6000600019821415611d0f57611d0f611d16565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611d5757600080fd5b50565b67ffffffffffffffff81168114611d5757600080fdfea2646970667358221220872b93c25fcd5fc9e694e0c2071a25c9f0da683570919b85efaac9fe5824029a64736f6c63430008000033";
//# sourceMappingURL=AaveProtocolDataProviderFactory.js.map