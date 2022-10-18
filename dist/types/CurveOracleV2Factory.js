"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveOracleV2Factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class CurveOracleV2Factory extends contracts_1.ContractFactory {
    constructor(linkLibraryAddresses, signer) {
        super(_abi, CurveOracleV2Factory.linkBytecode(linkLibraryAddresses), signer);
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$fc961522ee25e21dc45bf9241cf35e1d80\\$__", "g"), linkLibraryAddresses["__$fc961522ee25e21dc45bf9241cf35e1d80$__"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.CurveOracleV2Factory = CurveOracleV2Factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "curve_pool",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "prices",
                type: "uint256[]",
            },
        ],
        name: "get_price",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b5061041d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636dcb6a3214610030575b600080fd5b61004361003e366004610234565b610059565b604051610050919061036a565b60405180910390f35b600080836001600160a01b031663bb7b8b806040518163ffffffff1660e01b815260040160206040518083038186803b15801561009557600080fd5b505afa1580156100a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100cd919061030e565b905060006100dd845183866100e6565b95945050505050565b60008073__$fc961522ee25e21dc45bf9241cf35e1d80$__638e5fede8846040518263ffffffff1660e01b81526004016101209190610326565b60206040518083038186803b15801561013857600080fd5b505af415801561014c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610170919061030e565b9050600073__$fc961522ee25e21dc45bf9241cf35e1d80$__63f43b9abe87846040518363ffffffff1660e01b81526004016101ad929190610373565b60206040518083038186803b1580156101c557600080fd5b505af41580156101d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fd919061030e565b9050670de0b6b3a7640000816102168760ff8a166103a6565b61022091906103a6565b61022a9190610386565b9695505050505050565b60008060408385031215610246578182fd5b82356001600160a01b038116811461025c578283fd5b915060208381013567ffffffffffffffff80821115610279578384fd5b818601915086601f83011261028c578384fd5b81358181111561029e5761029e6103d1565b838102604051858282010181811085821117156102bd576102bd6103d1565b604052828152858101935084860182860187018b10156102db578788fd5b8795505b838610156102fd5780358552600195909501949386019386016102df565b508096505050505050509250929050565b60006020828403121561031f578081fd5b5051919050565b6020808252825182820181905260009190848201906040850190845b8181101561035e57835183529284019291840191600101610342565b50909695505050505050565b90815260200190565b60ff929092168252602082015260400190565b6000826103a157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156103cc57634e487b7160e01b81526011600452602481fd5b500290565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c648a395119d1a2d73bcf69c7e327c1d1f246d001f88426d16c8f0f19b808df864736f6c63430008000033";
//# sourceMappingURL=CurveOracleV2Factory.js.map