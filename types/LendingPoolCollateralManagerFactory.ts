/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LendingPoolCollateralManager } from "./LendingPoolCollateralManager";

export class LendingPoolCollateralManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolCollateralManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<LendingPoolCollateralManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolCollateralManager {
    return super.attach(address) as LendingPoolCollateralManager;
  }
  connect(signer: Signer): LendingPoolCollateralManagerFactory {
    return super.connect(signer) as LendingPoolCollateralManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolCollateralManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolCollateralManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "principal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidatedCollateralAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "LiquidationCall",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralEnabled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
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
      {
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "liquidationCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b5061326e806100246000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ee125ca014610030575b600080fd5b61004361003e366004612bce565b61005a565b604051610051929190612fe6565b60405180910390f35b6001600160a01b03831660009081526036602090815260408083206001600160401b038816845290915281206060906100916128e1565b6040805180820182526001600160a01b03808a1682526001600160401b038b1660208084018290528451808201865287548152600092835260388252858320603990925294909120546034546100f09560359490939291166037610920565b9091929350909192509091509050816101400181815250506000603560008c6001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160401b03166001600160401b0316815260200190815260200160002090506000603560008c6001600160a01b03166001600160a01b0316815260200190815260200160002060008b6001600160401b03166001600160401b0316815260200190815260200160002090506101aa8982610fa7565b60408501819052602085018290526101408501516101cf9285928592899290916110bb565b6102008501526101e0840181905260009060098111156101ff57634e487b7160e01b600052602160045260246000fd5b600981111561021e57634e487b7160e01b600052602160045260246000fd5b1461023c57826101e001518361020001519550955050505050610915565b6004808301546001600160a01b031661018085018190526040516370a0823160e01b815290916370a0823191610274918d9101612d66565b60206040518083038186803b15801561028c57600080fd5b505afa1580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c49190612c6d565b8352604083015160208401516102e791611388916102e1916111f7565b9061120c565b6060840181905288116102fa5787610300565b82606001515b83608001818152505061031f82828e8e876080015188600001516112b3565b6101208501819052610100850191909152608084015111156103475761012083015160808401525b8661040b576101808301516040516370a0823160e01b81526000916001600160a01b038f16916370a082319161037f91600401612d66565b60206040518083038186803b15801561039757600080fd5b505afa1580156103ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cf9190612c6d565b905083610100015181101561040957600560405180604001604052806002815260200161343560f01b815250965096505050505050610915565b505b610414816115f9565b82608001518360400151106104a857600681015460808401516001830154604051637a94c56560e11b81526001600160a01b039093169263f5298aca92610471928e92600160801b9091046001600160801b031690600401612de8565b600060405180830381600087803b15801561048b57600080fd5b505af115801561049f573d6000803e3d6000fd5b505050506105b0565b60408301511561053457600681015460408481015160018401549151637a94c56560e11b81526001600160a01b039093169263f5298aca92610501928e929091600160801b90046001600160801b031690600401612de8565b600060405180830381600087803b15801561051b57600080fd5b505af115801561052f573d6000803e3d6000fd5b505050505b6005810154604084015160808501516001600160a01b0390921691639dc29fac918c9161056091611776565b6040518363ffffffff1660e01b815260040161057d929190612dcf565b600060405180830381600087803b15801561059757600080fd5b505af11580156105ab573d6000803e3d6000fd5b505050505b600481015460808401516105d39183918e916001600160a01b0316906000611782565b8615610756578261018001516001600160a01b03166370a08231336040518263ffffffff1660e01b815260040161060a9190612d66565b60206040518083038186803b15801561062257600080fd5b505afa158015610636573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065a9190612c6d565b61016084015261018083015161010084015160405163f866c31960e01b81526001600160a01b039092169163f866c3199161069b918d913391600401612d7a565b600060405180830381600087803b1580156106b557600080fd5b505af11580156106c9573d6000803e3d6000fd5b5050505082610160015160001415610751573360009081526036602090815260408083206001600160401b038e1684529091529020600783015461071a908290600160a01b900460ff166001611bd4565b60405133906001600160a01b038f16907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f290600090a3505b6107fa565b61075f826115f9565b61018083015161010084015161077c9184918f9190600090611782565b6101808301516101008401516001840154604051636b81068560e11b81526001600160a01b039093169263d7020d0a926107c7928e923392916001600160801b031690600401612d9e565b600060405180830381600087803b1580156107e157600080fd5b505af11580156107f5573d6000803e3d6000fd5b505050505b82516101008401511415610865576007820154610824908590600160a01b900460ff166000611bd4565b886001600160a01b03168c6001600160a01b03167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b6004810154608084015161088b916001600160a01b038e81169233929190911690611c60565b886001600160a01b03168b6001600160a01b03168d6001600160a01b03167fe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e0052868660800151876101000151338d6040516108e7949392919061300d565b60405180910390a46000604051806040016040528060028152602001611a1b60f11b81525095509550505050505b965096945050505050565b600080600080600061093061298f565b8c516001600160a01b03166102a082015260208d01516001600160401b03166102c082015261095e8b611cbe565b1561097c576000806000806000199550955095509550955050610f98565b60006101008201525b888161010001511015610ef7576101008101516109a3908c90611cc3565b6109ac57610ede565b896000826101000151815260200190815260200160002060009054906101000a90046001600160a01b03168161020001906001600160a01b031690816001600160a01b03168152505060008c60008361020001516001600160a01b03166001600160a01b031681526020019081526020016000206000836102c001516001600160401b03166001600160401b031681526020019081526020016000209050886001600160a01b0316631a9dffb38960008561020001516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff166040518263ffffffff1660e01b8152600401610aac9190612e12565b60206040518083038186803b158015610ac457600080fd5b505afa158015610ad8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afc9190612bb2565b6001600160a01b03166102808301526102c08201516007820154600160a81b90046001600160401b03908116911614610b505760405162461bcd60e51b8152600401610b4790612ecc565b60405180910390fd5b610b5981611d1e565b5060a0860181905260e08601929092525060c0840191909152610b7d90600a6130b1565b8260400181815250508161028001516001600160a01b031663b3596f078361020001516040518263ffffffff1660e01b8152600401610bbc9190612d66565b60206040518083038186803b158015610bd457600080fd5b505afa158015610be8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0c9190612c6d565b602083015260e082015115801590610c305750610100820151610c30908d90611d49565b15610d71576004808201546102a08401516040516370a0823160e01b81526001600160a01b03909216926370a0823192610c6b929101612d66565b60206040518083038186803b158015610c8357600080fd5b505afa158015610c97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbb9190612c6d565b6060830181905260408301516020840151610ce092610cda9190611daf565b90611dbb565b610260830181905260088201541015610cff5760088101546102608301525b610260820151610140830151610d14916111f7565b61014083015260c0820151610260830151610d3f91610d339190611daf565b610180840151906111f7565b61018083015260e0820151610260830151610d6a91610d5e9190611daf565b6101a0840151906111f7565b6101a08301525b610100820151610d82908d90611dc7565b15610edc5760058101546102a08301516040516370a0823160e01b81526001600160a01b03909216916370a0823191610dbd91600401612d66565b60206040518083038186803b158015610dd557600080fd5b505afa158015610de9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0d9190612c6d565b608083015260068101546102a08301516040516370a0823160e01b8152610ea6926001600160a01b0316916370a0823191610e4b9190600401612d66565b60206040518083038186803b158015610e6357600080fd5b505afa158015610e77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190612c6d565b6080840151906111f7565b6080830181905260408301516020840151610ed592610ec99291610cda91611daf565b610160840151906111f7565b6101608301525b505b6101008101805190610eef826131e1565b905250610985565b600081610140015111610f0b576000610f20565b610140810151610180820151610f2091611dbb565b610180820152610140810151610f37576000610f4c565b6101408101516101a0820151610f4c91611dbb565b6101a08201819052610140820151610160830151610f6992611e12565b61012082018190526101408201516101608301516101808401516101a090940151919850965091945090925090505b97509750975097509792505050565b60058101546040516370a0823160e01b815260009182916001600160a01b03909116906370a0823190610fde908790600401612d66565b60206040518083038186803b158015610ff657600080fd5b505afa15801561100a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102e9190612c6d565b60068401546040516370a0823160e01b81526001600160a01b03909116906370a0823190611060908890600401612d66565b60206040518083038186803b15801561107857600080fd5b505afa15801561108c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b09190612c6d565b915091509250929050565b600060606110c888611e40565b15806110da57506110d887611e40565b155b156111015750506040805180820190915260018152601960f91b6020820152600690610915565b670de0b6b3a764000085106111335750506040805180820190915260028152611a1960f11b6020820152600490610915565b60008061113f8a611e50565b11801561116e5750600789015460408051602081019091528854815261116e91600160a01b900460ff16611d49565b90508061119857505060408051808201909152600280825261343360f01b60208301529150610915565b841580156111a4575083155b156111cd5750506040805180820190915260028152610d0d60f21b602082015260039150610915565b50506040805180820190915260028152611a1b60f11b602082015260009890975095505050505050565b60006112038284613033565b90505b92915050565b6000821580611219575081155b1561122657506000611206565b81611234600261271061304b565b6112409060001961319e565b61124a919061304b565b83111560405180604001604052806002815260200161068760f31b815250906112865760405162461bcd60e51b8152600401610b479190612e3a565b5061271061129560028261304b565b61129f848661317f565b6112a99190613033565b611203919061304b565b6000806000806112c1612a70565b6034546001600160a01b038a8116600090815260376020526040808220549051631a9dffb360e01b815291939290921691631a9dffb3916113089160ff1690600401612e12565b60206040518083038186803b15801561132057600080fd5b505afa158015611334573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113589190612bb2565b60405163b3596f0760e01b815290915081906001600160a01b0382169063b3596f0790611389908e90600401612d66565b60206040518083038186803b1580156113a157600080fd5b505afa1580156113b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d99190612c6d565b6040808501919091526034546001600160a01b038c811660009081526037602052839020549251631a9dffb360e01b8152911691631a9dffb3916114239160ff1690600401612e12565b60206040518083038186803b15801561143b57600080fd5b505afa15801561144f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114739190612bb2565b60405163b3596f0760e01b81529092508291506001600160a01b0382169063b3596f07906114a5908d90600401612d66565b60206040518083038186803b1580156114bd57600080fd5b505afa1580156114d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f59190612c6d565b60608401525061150690508b611d1e565b5060c085015260208401525061151d90508a611e5b565b60a08201819052611573906115429061153790600a6130b1565b604084015190611daf565b610cda83602001516102e18560c00151600a61155e91906130b1565b606087015161156d908e611daf565b90611daf565b608082018190528610156115de578592506115d781602001516115d16115ae8460c00151600a6115a391906130b1565b606086015190611daf565b610cda8560a00151600a6115c291906130b1565b604087015161156d908a611daf565b90611e65565b91506115e9565b806080015192508691505b5090999098509650505050505050565b60008160040160009054906101000a90046001600160a01b03166001600160a01b03166307da06036040518163ffffffff1660e01b815260040160206040518083038186803b15801561164b57600080fd5b505afa15801561165f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116839190612bb2565b905060008260060160009054906101000a90046001600160a01b03166001600160a01b031663b1bf962d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116d757600080fd5b505afa1580156116eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170f9190612c6d565b60018401546003850154919250600160801b8082046001600160801b03908116939216910464ffffffffff1660008061174b8887868887611f2f565b90925090506001600160a01b03871661176c5761176c88878785858861208c565b5050505050505050565b6000611203828461319e565b600485810154604080516307da060360e01b815290516000936001600160a01b03909316926307da060392808201926020929091829003018186803b1580156117ca57600080fd5b505afa1580156117de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118029190612bb2565b6001600160a01b03161461181f5761181a8585612331565b611bcd565b611827612aad565b60058601546001600160a01b031680825260408051637b98f4df60e11b8152815163f731e9be92600480840193919291829003018186803b15801561186b57600080fd5b505afa15801561187f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a39190612c85565b60c083015260408083019190915260018701546006880154825163b1bf962d60e01b8152925161194e93600160801b9093046001600160801b0316926001600160a01b039092169163b1bf962d916004808301926020929190829003018186803b15801561191057600080fd5b505afa158015611924573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119489190612c6d565b90612517565b60e082015261195b612afb565b6040518060c00160405280876001600160a01b03168152602001866001600160a01b0316815260200185815260200184815260200161199c896000016125b4565b81526020016119aa896125bf565b9052600788015460408085015160e086015160c087015192516308a80b0960e31b81529495506001600160a01b03909316936345405848936119f193879392600401612f56565b60606040518083038186803b158015611a0957600080fd5b505afa158015611a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a419190612ca8565b60a0850152608084015260608301819052604080518082019091526002815261353360f01b6020820152906001600160801b031015611a935760405162461bcd60e51b8152600401610b479190612e3a565b506080820151604080518082019091526002815261353560f01b6020820152906001600160801b031015611ada5760405162461bcd60e51b8152600401610b479190612e3a565b5060a08201516040805180820190915260028152610d4d60f21b6020820152906001600160801b031015611b215760405162461bcd60e51b8152600401610b479190612e3a565b506060820151600288018054608085015160038b0180546001600160801b03199081166001600160801b038085169190911790925560a08801519316818616178116600160801b84831681029190911790945560018c01546040516001600160a01b038d16967f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a96611bc29691959491938083169391900490911690612fb7565b60405180910390a250505b5050505050565b604080518082019091526002815261373760f01b602082015260808310611c0e5760405162461bcd60e51b8152600401610b479190612e3a565b50611c1a82600261317f565b611c25906001613033565b81611c31576000611c34565b60015b60ff16901b611c4483600261317f565b611c4f906001613033565b8454600190911b1916179092555050565b611cb8846323b872dd60e01b858585604051602401611c8193929190612d7a565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526125ca565b50505050565b511590565b60006080821060405180604001604052806002815260200161373760f01b81525090611d025760405162461bcd60e51b8152600401610b479190612e3a565b50611d0e82600261317f565b925190921c600316151592915050565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b60006080821060405180604001604052806002815260200161373760f01b81525090611d885760405162461bcd60e51b8152600401610b479190612e3a565b50611d9482600261317f565b611d9f906001613033565b925190921c600116151592915050565b6000611203828461317f565b6000611203828461304b565b60006080821060405180604001604052806002815260200161373760f01b81525090611e065760405162461bcd60e51b8152600401610b479190612e3a565b50611d9f82600261317f565b600082611e225750600019611e39565b611e3683611e30868561120c565b906126ae565b90505b9392505050565b5467010000000000000016151590565b5460101c61ffff1690565b5460301c60ff1690565b604080518082019091526002815261035360f41b602082015260009082611e9f5760405162461bcd60e51b8152600401610b479190612e3a565b506000611ead60028461304b565b9050612710611ebe8260001961319e565b611ec8919061304b565b84111560405180604001604052806002815260200161068760f31b81525090611f045760405162461bcd60e51b8152600401610b479190612e3a565b508281611f136127108761317f565b611f1d9190613033565b611f27919061304b565b949350505050565b600285015460009081906001600160801b03168585821561205d576000611f568488612768565b9050611f62818a612517565b604080518082019091526002815261353160f01b60208201529093506001600160801b03841115611fa65760405162461bcd60e51b8152600401610b479190612e3a565b5060018b0180546001600160801b0319166001600160801b038516179055891561205b5760028b0154600090611fec90600160801b90046001600160801b0316896127a8565b9050611ff8818a612517565b6040805180820190915260028152611a9960f11b60208201529093506001600160801b0384111561203c5760405162461bcd60e51b8152600401610b479190612e3a565b505060018b0180546001600160801b03808516600160801b0291161790555b505b600399909901805464ffffffffff60801b1916600160801b4264ffffffffff1602179055989650505050505050565b612094612b43565b61209d876125b4565b6101408201526120ac876125bf565b6101608201526101408101511580156120c85750610160810151155b156120d35750612329565b8660050160009054906101000a90046001600160a01b03166001600160a01b031663797743386040518163ffffffff1660e01b815260040160806040518083038186803b15801561212357600080fd5b505afa158015612137573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215b9190612cd5565b64ffffffffff1661018085015260a08401528252602082015261217e8686612517565b608082015261218d8684612517565b606082015260a08101516101808201516121af919064ffffffffff85166127b1565b60c0820181905260208201516121c491612517565b604082018190526080820151825160608401516121ef93926121e992909183916111f7565b90611776565b60e08201819052610140820151612206919061120c565b61010082018190521561227e57600480880154610100830151604051637df5bd3b60e01b81526001600160a01b0390921692637df5bd3b9261224b9291899101612fff565b600060405180830381600087803b15801561226557600080fd5b505af1158015612279573d6000803e3d6000fd5b505050505b6122af8161016001516102e16122a484610140015161271061177690919063ffffffff16565b60e08501519061120c565b61012082018190521561232757600480880154610120830151604051637178125560e11b81526001600160a01b039092169263e2f024aa926122f49291899101612fff565b600060405180830381600087803b15801561230e57600080fd5b505af1158015612322573d6000803e3d6000fd5b505050505b505b505050505050565b60008260040160009054906101000a90046001600160a01b03166001600160a01b03166307da06036040518163ffffffff1660e01b815260040160206040518083038186803b15801561238357600080fd5b505afa158015612397573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123bb9190612bb2565b905060006123c8846125bf565b9050600061244c6123db61271084611776565b846001600160a01b0316639f934c706040518163ffffffff1660e01b815260040160206040518083038186803b15801561241457600080fd5b505afa158015612428573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e19190612c6d565b604080518082019091526002815261353360f01b60208201529091506001600160801b038211156124905760405162461bcd60e51b8152600401610b479190612e3a565b506002850180546001600160801b0319166001600160801b038381169190911790915560018601546040516001600160a01b038716927f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a92612508928692600092839281831692600160801b90920490911690612fb7565b60405180910390a25050505050565b6000821580612524575081155b1561253157506000611206565b8161254960026b033b2e3c9fd0803ce800000061304b565b6125559060001961319e565b61255f919061304b565b83111560405180604001604052806002815260200161068760f31b8152509061259b5760405162461bcd60e51b8152600401610b479190612e3a565b506b033b2e3c9fd0803ce800000061129560028261304b565b5460401c61ffff1690565b5460501c61ffff1690565b6125dc826001600160a01b03166128a0565b6125f85760405162461bcd60e51b8152600401610b4790612f1f565b600080836001600160a01b0316836040516126139190612d4a565b6000604051808303816000865af19150503d8060008114612650576040519150601f19603f3d011682016040523d82523d6000602084013e612655565b606091505b5091509150816126775760405162461bcd60e51b8152600401610b4790612e4d565b805115611cb857808060200190518101906126929190612c51565b611cb85760405162461bcd60e51b8152600401610b4790612e82565b604080518082019091526002815261035360f41b6020820152600090826126e85760405162461bcd60e51b8152600401610b479190612e3a565b5060006126f660028461304b565b9050670de0b6b3a764000061270d8260001961319e565b612717919061304b565b84111560405180604001604052806002815260200161068760f31b815250906127535760405162461bcd60e51b8152600401610b479190612e3a565b508281611f13670de0b6b3a76400008761317f565b60008061277c4264ffffffffff8516611776565b9050611f276127896128d1565b6301e133806127988785611daf565b6127a2919061304b565b906111f7565b60006112038383425b6000806127c58364ffffffffff8616611776565b9050806127dc576127d46128d1565b915050611e39565b60006127e960018361319e565b90506000600283116127fc576000612807565b61280760028461319e565b905060006128196301e133808961304b565b905060006128278280612517565b905060006128358284612517565b9050600060026128498461156d8a8a611daf565b612853919061304b565b9050600060066128698461156d89818d8d611daf565b612873919061304b565b9050612890816127a284816128888a8e611daf565b6127a26128d1565b9c9b505050505050505050505050565b600080826001600160a01b0316803b806020016040519081016040528181526000908060200190933c511192915050565b6b033b2e3c9fd0803ce800000090565b60405180610220016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000151581526020016000600281111561297b57634e487b7160e01b600052602160045260246000fd5b815260200160008152602001606081525090565b604051806102e0016040528060006001600160401b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160401b031681525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600064ffffffffff1681525090565b600060208284031215612bc3578081fd5b8151611e3981613212565b60008060008060008060c08789031215612be6578182fd5b8635612bf181613212565b95506020870135612c0181613212565b945060408701356001600160401b0381168114612c1c578283fd5b93506060870135612c2c81613212565b92506080870135915060a0870135612c438161322a565b809150509295509295509295565b600060208284031215612c62578081fd5b8151611e398161322a565b600060208284031215612c7e578081fd5b5051919050565b60008060408385031215612c97578182fd5b505080516020909101519092909150565b600080600060608486031215612cbc578283fd5b8351925060208401519150604084015190509250925092565b60008060008060808587031215612cea578384fd5b845193506020850151925060408501519150606085015164ffffffffff81168114612d13578182fd5b939692955090935050565b60008151808452612d368160208601602086016131b5565b601f01601f19169290920160200192915050565b60008251612d5c8184602087016131b5565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03948516815292909316602083015260408201526001600160801b03909116606082015260800190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393909316835260208301919091526001600160801b0316604082015260600190565b6020810160028310612e3457634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082526112036020830184612d1e565b6020808252818101527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526033908201527f63616c63756c617465557365724163636f756e7444617461207472616e6368656040820152720496420646f6573206e6f74206c696e6520757606c1b606082015260800190565b6020808252601f908201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604082015260600190565b84516001600160a01b0390811682526020808701519091169082015260408086015190820152606080860151908201526080808601519082015260a0948501519481019490945260c084019290925260e08301526101008201526101200190565b948552602085019390935260408401919091526001600160801b03908116606084015216608082015260a00190565b600083825260406020830152611e366040830184612d1e565b918252602082015260400190565b93845260208401929092526001600160a01b031660408301521515606082015260800190565b60008219821115613046576130466131fc565b500190565b60008261306657634e487b7160e01b81526012600452602481fd5b500490565b80825b600180861161307d57506130a8565b81870482111561308f5761308f6131fc565b8086161561309c57918102915b9490941c93800261306e565b94509492505050565b600061120360001984846000826130ca57506001611e39565b816130d757506000611e39565b81600181146130ed57600281146130f757613124565b6001915050611e39565b60ff841115613108576131086131fc565b6001841b91508482111561311e5761311e6131fc565b50611e39565b5060208310610133831016604e8410600b8410161715613157575081810a83811115613152576131526131fc565b611e39565b613164848484600161306b565b808604821115613176576131766131fc565b02949350505050565b6000816000190483118215151615613199576131996131fc565b500290565b6000828210156131b0576131b06131fc565b500390565b60005b838110156131d05781810151838201526020016131b8565b83811115611cb85750506000910152565b60006000198214156131f5576131f56131fc565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461322757600080fd5b50565b801515811461322757600080fdfea264697066735822122044c6410d2ab44bc8b59382ca0a05c362d6e3a2c7e4fc392fc1212ce7277ed25b64736f6c63430008000033";
