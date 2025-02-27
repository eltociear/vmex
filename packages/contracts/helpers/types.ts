import BigNumber from "bignumber.js";
import { BigNumberish } from "ethers";

export interface UniswapData {
  poolAddress: string;
  tokenToPrice: string;
}
export interface SymbolMap<T> {
  [symbol: string]: T;
}

export type eNetwork =
  | eEthereumNetwork
  | ePolygonNetwork
  | eXDaiNetwork
  | eAvalancheNetwork
  | eOptimismNetwork;

export enum eEthereumNetwork {
  buidlerevm = "buidlerevm",
  kovan = "kovan",
  ropsten = "ropsten",
  goerli = "goerli",
  sepolia = "sepolia",
  main = "main",
  coverage = "coverage",
  hardhat = "hardhat",
  tenderly = "tenderly",
}

export enum ePolygonNetwork {
  matic = "matic",
  mumbai = "mumbai",
}

export enum eXDaiNetwork {
  xdai = "xdai",
}

export enum eAvalancheNetwork {
  avalanche = "avalanche",
  fuji = "fuji",
}

export enum eOptimismNetwork {
  optimism = "optimism",
}

export enum EthereumNetworkNames {
  kovan = "kovan",
  ropsten = "ropsten",
  main = "main",
  matic = "matic",
  mumbai = "mumbai",
  xdai = "xdai",
  avalanche = "avalanche",
  fuji = "fuji",
}

export enum AavePools {
  proto = "proto",
  matic = "matic",
  amm = "amm",
  avalanche = "avalanche",
}

export enum eContractid {
  Example = "Example",
  Booster = "Booster",
  BaseRewardPool = "BaseRewardPool",
  CurveOracle = "CurveOracle",
  CurveWrapper = "CurveWrapper",
  vMath = "vMath",
  vStrategyHelper = "vStrategyHelper",
  CrvLpStrategy = "CrvLpStrategy",
  CrvLpEthStrategy = "CrvLpEthStrategy",
  CvxStrategy = "CvxStrategy",
  LendingPoolAddressesProvider = "LendingPoolAddressesProvider",
  MintableERC20 = "MintableERC20",
  MintableDelegationERC20 = "MintableDelegationERC20",
  LendingPoolAddressesProviderRegistry = "LendingPoolAddressesProviderRegistry",
  LendingPoolParametersProvider = "LendingPoolParametersProvider",
  LendingPoolConfigurator = "LendingPoolConfigurator",
  DepositWithdrawLogic = "DepositWithdrawLogic",
  ValidationLogic = "ValidationLogic",
  ReserveLogic = "ReserveLogic",
  GenericLogic = "GenericLogic",
  LendingPool = "LendingPool",
  PriceOracle = "PriceOracle",
  Proxy = "Proxy",
  MockAggregator = "MockAggregator",
  VMEXOracle = "VMEXOracle",
  DefaultReserveInterestRateStrategy = "DefaultReserveInterestRateStrategy",
  LendingPoolCollateralManager = "LendingPoolCollateralManager",
  InitializableAdminUpgradeabilityProxy = "InitializableAdminUpgradeabilityProxy",
  MockFlashLoanReceiver = "MockFlashLoanReceiver",
  WalletBalanceProvider = "WalletBalanceProvider",
  AToken = "AToken",
  MockAToken = "MockAToken",
  DelegationAwareAToken = "DelegationAwareAToken",
  MockStableDebtToken = "MockStableDebtToken",
  MockVariableDebtToken = "MockVariableDebtToken",
  AaveProtocolDataProvider = "AaveProtocolDataProvider",
  IERC20Detailed = "IERC20Detailed",
  StableDebtToken = "StableDebtToken",
  VariableDebtToken = "VariableDebtToken",
  FeeProvider = "FeeProvider",
  TokenDistributor = "TokenDistributor",
  StableAndVariableTokensHelper = "StableAndVariableTokensHelper",
  // ATokensAndRatesHelper = "ATokensAndRatesHelper",
  UiPoolDataProvider = "UiPoolDataProvider",
  UiPoolDataProviderV2 = "UiPoolDataProviderV2",
  UiPoolDataProviderV2V3 = "UiPoolDataProviderV2V3",
  WETHGateway = "WETHGateway",
  WETH = "WETH",
  WETHMocked = "WETHMocked",
  SelfdestructTransferMock = "SelfdestructTransferMock",
  LendingPoolImpl = "LendingPoolImpl",
  LendingPoolConfiguratorImpl = "LendingPoolConfiguratorImpl",
  LendingPoolCollateralManagerImpl = "LendingPoolCollateralManagerImpl",
  MockUniswapV2Router02 = "MockUniswapV2Router02",
  UniswapLiquiditySwapAdapter = "UniswapLiquiditySwapAdapter",
  UniswapRepayAdapter = "UniswapRepayAdapter",
  FlashLiquidationAdapter = "FlashLiquidationAdapter",
  MockParaSwapAugustus = "MockParaSwapAugustus",
  MockParaSwapAugustusRegistry = "MockParaSwapAugustusRegistry",
  ParaSwapLiquiditySwapAdapter = "ParaSwapLiquiditySwapAdapter",
  UiIncentiveDataProviderV2V3 = "UiIncentiveDataProviderV2V3",
  UiIncentiveDataProviderV2 = "UiIncentiveDataProviderV2",
  AssetMappings = "AssetMappings",
  UserConfiguration = "UserConfiguration",
  BaseUniswapOracle = "BaseUniswapOracle",
  MockStrategy = "MockStrategy",
  YearnTokenMocked="YearnTokenMocked",
  ATokenBeacon = "ATokenBeacon",
  VariableDebtTokenBeacon = "VariableDebtTokenBeacon",
  SequencerUptimeFeed = "SequencerUptimeFeed",
  IncentivesControllerImpl = "IncentivesControllerImpl",
  IncentivesControllerProxy = "IncentivesControllerProxy",
  ATokenMock = "ATokenMock",
  VmexToken = "VmexToken",
  DoubleTransferHelper = "DoubleTransferHelper",
  StakingRewardsMock = "StakingRewardsMock",
  MockIncentivesControllerImpl = "MockIncentivesControllerImpl",
}

/*
 * Error messages prefix glossary:
 *  - VL = ValidationLogic
 *  - MATH = Math libraries
 *  - AT = aToken or DebtTokens
 *  - LP = LendingPool
 *  - LPAPR = LendingPoolAddressesProviderRegistry
 *  - LPC = LendingPoolConfiguration
 *  - RL = ReserveLogic
 *  - LPCM = LendingPoolCollateralManager
 *  - P = Pausable
 */
export enum ProtocolErrors {
  //common errors
  CALLER_NOT_TRANCHE_ADMIN = "33", // 'The caller must be the tranche admin'
  CALLER_NOT_GLOBAL_ADMIN = "0", // 'The caller must be the global admin'
  BORROW_ALLOWANCE_NOT_ENOUGH = "59", // User borrows on behalf, but allowance are too small
  INVALID_TRANCHE = "111", // 'The caller must be the global admin'
  ARRAY_LENGTH_MISMATCH = "85",
  //contract specific errors
  VL_INVALID_AMOUNT = "1", // 'Amount must be greater than 0'
  VL_NO_ACTIVE_RESERVE = "2", // 'Action requires an active reserve'
  VL_RESERVE_FROZEN = "3", // 'Action cannot be performed because the reserve is frozen'
  VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH = "4", // 'The current liquidity is not enough'
  VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE = "5", // 'User cannot withdraw more than the available balance'
  VL_TRANSFER_NOT_ALLOWED = "6", // 'Transfer cannot be allowed.'
  VL_BORROWING_NOT_ENABLED = "7", // 'Borrowing is not enabled'
  VL_INVALID_INTEREST_RATE_MODE_SELECTED = "8", // 'Invalid interest rate mode selected'
  VL_COLLATERAL_BALANCE_IS_0 = "9", // 'The collateral balance is 0'
  VL_HEALTH_FACTOR_LOWER_THAN_LIQUIDATION_THRESHOLD = "10", // 'Health factor is lesser than the liquidation threshold'
  VL_COLLATERAL_CANNOT_COVER_NEW_BORROW = "11", // 'There is not enough collateral to cover a new borrow'
  VL_STABLE_BORROWING_NOT_ENABLED = "12", // stable borrowing not enabled
  VL_COLLATERAL_SAME_AS_BORROWING_CURRENCY = "13", // collateral is (mostly) the same currency that is being borrowed
  VL_AMOUNT_BIGGER_THAN_MAX_LOAN_SIZE_STABLE = "14", // 'The requested amount is greater than the max loan size in stable rate mode
  VL_NO_DEBT_OF_SELECTED_TYPE = "15", // 'for repayment of stable debt, the user needs to have stable debt, otherwise, he needs to have variable debt'
  VL_NO_EXPLICIT_AMOUNT_TO_REPAY_ON_BEHALF = "16", // 'To repay on behalf of an user an explicit amount to repay is needed'
  VL_NO_STABLE_RATE_LOAN_IN_RESERVE = "17", // 'User does not have a stable rate loan in progress on this reserve'
  VL_NO_VARIABLE_RATE_LOAN_IN_RESERVE = "18", // 'User does not have a variable rate loan in progress on this reserve'
  VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0 = "19", // 'The underlying balance needs to be greater than 0'
  VL_DEPOSIT_ALREADY_IN_USE = "20", // 'User deposit is already being used as collateral'
  VL_SUPPLY_CAP_EXCEEDED = "82",
  VL_BORROW_CAP_EXCEEDED = "83",
  VL_COLLATERAL_DISABLED = "93",
  LP_NOT_ENOUGH_STABLE_BORROW_BALANCE = "21", // 'User does not have any stable rate loan for this reserve'
  LP_INTEREST_RATE_REBALANCE_CONDITIONS_NOT_MET = "22", // 'Interest rate rebalance conditions were not met'
  LP_LIQUIDATION_CALL_FAILED = "23", // 'Liquidation call failed'
  LP_NOT_ENOUGH_LIQUIDITY_TO_BORROW = "24", // 'There is not enough liquidity available to borrow'
  LP_REQUESTED_AMOUNT_TOO_SMALL = "25", // 'The requested amount is too small for a FlashLoan.'
  LP_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE = "26", // 'The actual balance of the protocol is inconsistent'
  LP_CALLER_NOT_LENDING_POOL_CONFIGURATOR = "27", // 'The caller of the function is not the lending pool configurator'
  LP_INCONSISTENT_FLASHLOAN_PARAMS = "28",
  CT_CALLER_MUST_BE_LENDING_POOL = "29", // 'The caller of this function must be a lending pool'
  CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF = "30", // 'User cannot give allowance to himself'
  CT_TRANSFER_AMOUNT_NOT_GT_0 = "31", // 'Transferred amount needs to be greater than zero'
  RL_RESERVE_ALREADY_INITIALIZED = "32", // 'Reserve has already been initialized'
  LPC_RESERVE_LIQUIDITY_NOT_0 = "34", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_ATOKEN_POOL_ADDRESS = "35", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_STABLE_DEBT_TOKEN_POOL_ADDRESS = "36", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_VARIABLE_DEBT_TOKEN_POOL_ADDRESS = "37", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_STABLE_DEBT_TOKEN_UNDERLYING_ADDRESS =
      "38", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_VARIABLE_DEBT_TOKEN_UNDERLYING_ADDRESS =
      "39", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_ADDRESSES_PROVIDER_ID = "40", // 'The liquidity of the reserve needs to be 0'
  LPC_INVALID_CONFIGURATION = "75", // 'Invalid risk parameters for the reserve'
  LPC_CALLER_NOT_EMERGENCY_ADMIN = "76", // 'The caller must be the emergency admin'
  LPC_NOT_WHITELISTED_TRANCHE_CREATION = "84", //not whitelisted to create a tranche
  LPC_NOT_APPROVED_BORROWABLE = "86", //assetmappings does not allow setting borrowable
  LPC_NOT_APPROVED_COLLATERAL = "87", //assetmappings does not allow setting collateral
  LPAPR_PROVIDER_NOT_REGISTERED = "41", // 'Provider is not registered'
  LPCM_HEALTH_FACTOR_NOT_BELOW_THRESHOLD = "42", // 'Health factor is not below the threshold'
  LPCM_COLLATERAL_CANNOT_BE_LIQUIDATED = "43", // 'The collateral chosen cannot be liquidated'
  LPCM_SPECIFIED_CURRENCY_NOT_BORROWED_BY_USER = "44", // 'User did not borrow the specified currency'
  LPCM_NOT_ENOUGH_LIQUIDITY_TO_LIQUIDATE = "45", // "There isn't enough liquidity available to liquidate"
  LPCM_NO_ERRORS = "46", // 'No errors'
  LP_INVALID_FLASHLOAN_MODE = "47", //Invalid flashloan mode selected
  MATH_MULTIPLICATION_OVERFLOW = "48",
  MATH_ADDITION_OVERFLOW = "49",
  MATH_DIVISION_BY_ZERO = "50",
  RL_LIQUIDITY_INDEX_OVERFLOW = "51", //  Liquidity index overflows uint128
  RL_VARIABLE_BORROW_INDEX_OVERFLOW = "52", //  Variable borrow index overflows uint128
  RL_LIQUIDITY_RATE_OVERFLOW = "53", //  Liquidity rate overflows uint128
  RL_VARIABLE_BORROW_RATE_OVERFLOW = "54", //  Variable borrow rate overflows uint128
  RL_STABLE_BORROW_RATE_OVERFLOW = "55", //  Stable borrow rate overflows uint128
  CT_INVALID_MINT_AMOUNT = "56", //invalid amount to mint
  LP_FAILED_REPAY_WITH_COLLATERAL = "57",
  CT_INVALID_BURN_AMOUNT = "58", //invalid amount to burn
  LP_FAILED_COLLATERAL_SWAP = "60",
  LP_INVALID_EQUAL_ASSETS_TO_SWAP = "61",
  LP_REENTRANCY_NOT_ALLOWED = "62",
  LP_CALLER_MUST_BE_AN_ATOKEN = "63",
  LP_IS_PAUSED = "64", // 'Pool is paused'
  LP_NO_MORE_RESERVES_ALLOWED = "65",
  LP_INVALID_FLASH_LOAN_EXECUTOR_RETURN = "66",
  LP_NOT_WHITELISTED_TRANCHE_PARTICIPANT = "91",
  LP_BLACKLISTED_TRANCHE_PARTICIPANT = "92",
  RC_INVALID_LTV = "67",
  RC_INVALID_LIQ_THRESHOLD = "68",
  RC_INVALID_LIQ_BONUS = "69",
  RC_INVALID_DECIMALS = "70",
  RC_INVALID_RESERVE_FACTOR = "71",
  LPAPR_INVALID_ADDRESSES_PROVIDER_ID = "72",
  VL_INCONSISTENT_FLASHLOAN_PARAMS = "73",
  LP_INCONSISTENT_PARAMS_LENGTH = "74",
  UL_INVALID_INDEX = "77",
  LP_NOT_CONTRACT = "78",
  SDT_STABLE_DEBT_OVERFLOW = "79",
  SDT_BURN_EXCEEDS_BALANCE = "80",
  CT_CALLER_MUST_BE_STRATEGIST = "81",

  AM_ASSET_DOESNT_EXIST = "88",
  AM_ASSET_NOT_ALLOWED = "89",
  AM_NO_INTEREST_STRATEGY = "90",

  VO_REENTRANCY_GUARD_FAIL = "94", //vmex curve oracle view reentrancy call failed
  VO_UNDERLYING_FAIL = "95", //underlying oracle for curve asset returned 0
  VO_ORACLE_ADDRESS_NOT_FOUND = "96", //underlying oracle for curve asset returned 0
  VO_SEQUENCER_DOWN = "97", //underlying oracle for curve asset returned 0
  VO_SEQUENCER_GRACE_PERIOD_NOT_OVER = "98", //underlying oracle for curve asset returned 0

  VO_BASE_CURRENCY_SET_ONLY_ONCE = "99", //underlying oracle for curve asset returned 0

  AM_ASSET_ALREADY_IN_MAPPINGS = "100", //underlying oracle for curve asset returned 0
  AM_ASSET_NOT_CONTRACT = "101", //underlying oracle for curve asset returned 0
  AM_INTEREST_STRATEGY_NOT_CONTRACT = "102", //underlying oracle for curve asset returned 0
  AM_INVALID_CONFIGURATION = "103",
  AM_UNABLE_TO_DISALLOW_ASSET = "104",


  LPAPR_ALREADY_SET = "108",
  TRANCHE_ADMIN_NOT_VERIFIED = "112",

  ALREADY_VERIFIED = "113",
  LPC_CALLER_NOT_EMERGENCY_ADMIN_OR_VERIFIED_TRANCHE = "114",
  // old

  INVALID_FROM_BALANCE_AFTER_TRANSFER = "Invalid from balance after transfer",
  INVALID_TO_BALANCE_AFTER_TRANSFER = "Invalid from balance after transfer",
  INVALID_OWNER_REVERT_MSG = "Ownable: caller is not the owner",
  INVALID_HF = "Invalid health factor",
  TRANSFER_AMOUNT_EXCEEDS_BALANCE = "ERC20: transfer amount exceeds balance",
  SAFEERC20_LOWLEVEL_CALL = "SafeERC20: low-level call failed",
}

export type tEthereumAddress = string;
export type tStringTokenBigUnits = string; // 1 ETH, or 10e6 USDC or 10e18 DAI
export type tBigNumberTokenBigUnits = BigNumber;
export type tStringTokenSmallUnits = string; // 1 wei, or 1 basic unit of USDC, or 1 basic unit of DAI
export type tBigNumberTokenSmallUnits = BigNumber;

export interface iAssetCommon<T> {
  [key: string]: T;
}
export interface iAssetBase<T> {
  WETH: T;
  DAI: T;
  TUSD: T;
  USDC: T;
  USDT: T;
  SUSD: T;
  AAVE: T;
  BAT: T;
  MKR: T;
  LINK: T;
  KNC: T;
  WBTC: T;
  MANA: T;
  ZRX: T;
  SNX: T;
  BUSD: T;
  YFI: T;
  UNI: T;
  USD: T;
  REN: T;
  ENJ: T;
  ThreeCRV: T;
  wstETH: T;
  sUSD3CRV: T;
  wstETHCRV: T;
  UniDAIWETH: T;
  UniWBTCWETH: T;
  UniAAVEWETH: T;
  UniBATWETH: T;
  UniDAIUSDC: T;
  UniCRVWETH: T;
  UniLINKWETH: T;
  UniMKRWETH: T;
  UniRENWETH: T;
  UniSNXWETH: T;
  UniUNIWETH: T;
  UniUSDCWETH: T;
  UniWBTCUSDC: T;
  UniYFIWETH: T;
  BptWBTCWETH: T;
  BptBALWETH: T;
  WMATIC: T;
  STAKE: T;
  WAVAX: T;
  Tricrypto2: T;
  ThreePool: T;
  StethEth: T;
  Steth: T;
  FraxUSDC: T;
  Frax3Crv: T;
  FRAX: T;
  BAL: T;
  CRV: T;
  CVX: T;
  BADGER: T;
  LDO: T;
  ALCX: T;
  Oneinch: T;
  yvTricrypto2: T;
  yvThreePool: T;
  yvStethEth: T;
  yvFraxUSDC: T;
  yvFrax3Crv: T;
  OP: T;
  mooCurveFsUSD: T;
  mooCurveWSTETH: T;
  velo_rETHWETH: T;
  velo_wstETHWETH: T;
  moo_velo_wstETHWETH: T;
  velo_USDCsUSD: T;
  moo_velo_USDCsUSD: T;
  velo_ETHUSDC: T;
  moo_velo_ETHUSDC: T;
  velo_OPETH: T;
  moo_velo_OPETH: T;
  velo_ETHSNX: T;
  moo_velo_ETHSNX: T;
  velo_OPUSDC: T;
  moo_velo_OPUSDC: T;
  velo_DAIUSDC: T;
  moo_velo_DAIUSDC: T;
  velo_FRAXUSDC: T;
  moo_velo_FRAXUSDC: T;
  velo_USDTUSDC: T;
  moo_velo_USDTUSDC: T;
  beethoven_USDCDAI: T;
  beethoven_wstETHETH: T;
  beethoven_WETHOPUSDC: T;
  rETH: T;
  beethoven_rETHETH: T;
  yvUSDC: T;
  yvUSDT: T;
  yvDAI: T;
  yvWETH: T;
  LUSD: T;
  velo_LUSDWETH: T;
  velo_LUSDUSDC: T;
}

export type iAssetsWithoutETH<T> = Omit<iAssetBase<T>, "ETH">;

export type iAssetsWithoutUSD<T> = Omit<iAssetBase<T>, "USD">;

export type iAavePoolAssets<T> = Partial<
  Pick<
    iAssetsWithoutUSD<T>,
    | "DAI"
    | "TUSD"
    | "USDC"
    | "USDT"
    | "SUSD"
    | "AAVE"
    | "BAT"
    | "MKR"
    | "LINK"
    | "KNC"
    | "WBTC"
    | "MANA"
    | "ZRX"
    | "SNX"
    | "BUSD"
    | "WETH"
    | "YFI"
    | "UNI"
    | "REN"
    | "ENJ"
    | "Tricrypto2"
    | "ThreePool"
    | "StethEth"
    | "Steth"
    | "FraxUSDC"
    | "Frax3Crv"
    | "FRAX"
    | "BAL"
    | "CRV"
    | "CVX"
    | "BADGER"
    | "LDO"
    | "ALCX"
    | "Oneinch"
    | "yvTricrypto2"
    | "yvThreePool"
    | "yvStethEth"
    | "yvFraxUSDC"
    | "yvFrax3Crv"
  >
>;

export type iLpPoolAssets<T> = Pick<
  iAssetsWithoutUSD<T>,
  | "DAI"
  | "USDC"
  | "USDT"
  | "WBTC"
  | "WETH"
  | "UniDAIWETH"
  | "UniWBTCWETH"
  | "UniAAVEWETH"
  | "UniBATWETH"
  | "UniDAIUSDC"
  | "UniCRVWETH"
  | "UniLINKWETH"
  | "UniMKRWETH"
  | "UniRENWETH"
  | "UniSNXWETH"
  | "UniUNIWETH"
  | "UniUSDCWETH"
  | "UniWBTCUSDC"
  | "UniYFIWETH"
  | "BptWBTCWETH"
  | "BptBALWETH"
>;

export type iMaticPoolAssets<T> = Pick<
  iAssetsWithoutUSD<T>,
  "DAI" | "USDC" | "USDT" | "WBTC" | "WETH" | "WMATIC" | "AAVE"
>;

export type iXDAIPoolAssets<T> = Pick<
  iAssetsWithoutUSD<T>,
  "DAI" | "USDC" | "USDT" | "WBTC" | "WETH" | "STAKE"
>;

export type iAvalanchePoolAssets<T> = Pick<
  iAssetsWithoutUSD<T>,
  "WETH" | "DAI" | "USDT" | "AAVE" | "WBTC" | "WAVAX" | "USDC"
>;

export type iOptimismPoolAssets<T> = Partial<
  Pick<
    iAssetsWithoutUSD<T>,
    | "DAI"
    | "USDC"
    | "USDT"
    | "SUSD"
    | "WBTC"
    | "SNX"
    | "WETH"
    | "wstETH"
    | "FRAX"
    | "OP"
    | "rETH"
    | "ThreeCRV"
    | "sUSD3CRV"
    | "wstETHCRV"
    | "mooCurveFsUSD"
    | "mooCurveWSTETH"
    | "velo_rETHWETH"
    | "velo_wstETHWETH"
    | "moo_velo_wstETHWETH"
    | "velo_USDCsUSD"
    | "moo_velo_USDCsUSD"
    | "velo_ETHUSDC"
    | "moo_velo_ETHUSDC"
    | "velo_OPETH"
    | "moo_velo_OPETH"
    | "velo_ETHSNX"
    | "moo_velo_ETHSNX"
    | "velo_OPUSDC"
    | "moo_velo_OPUSDC"
    | "velo_DAIUSDC"
    | "moo_velo_DAIUSDC"
    | "velo_FRAXUSDC"
    | "moo_velo_FRAXUSDC"
    | "velo_USDTUSDC"
    | "moo_velo_USDTUSDC"
    | "beethoven_USDCDAI"
    | "beethoven_wstETHETH"
    | "beethoven_WETHOPUSDC"
    | "beethoven_rETHETH"
    | "yvUSDC"
    | "yvUSDT"
    | "yvDAI"
    | "yvWETH"
    | "LUSD"
    | "velo_LUSDWETH"
    | "velo_LUSDUSDC"
  >
>;

export type iMultiPoolsAssets<T> = iAssetCommon<T> | iAavePoolAssets<T>;

export type iAavePoolTokens<T> = Omit<iAavePoolAssets<T>, "ETH">;

export type iAssetAggregatorBase<T> = iAssetsWithoutETH<T>;

export enum TokenContractId {
  DAI = "DAI",
  AAVE = "AAVE",
  TUSD = "TUSD",
  BAT = "BAT",
  WETH = "WETH",
  USDC = "USDC",
  USDT = "USDT",
  SUSD = "SUSD",
  ZRX = "ZRX",
  MKR = "MKR",
  WBTC = "WBTC",
  LINK = "LINK",
  KNC = "KNC",
  MANA = "MANA",
  REN = "REN",
  SNX = "SNX",
  BUSD = "BUSD",
  USD = "USD",
  YFI = "YFI",
  UNI = "UNI",
  ENJ = "ENJ",
  wstETH = "wstETH",
  OP = "OP",
  UniDAIWETH = "UniDAIWETH",
  UniWBTCWETH = "UniWBTCWETH",
  UniAAVEWETH = "UniAAVEWETH",
  UniBATWETH = "UniBATWETH",
  UniDAIUSDC = "UniDAIUSDC",
  UniCRVWETH = "UniCRVWETH",
  UniLINKWETH = "UniLINKWETH",
  UniMKRWETH = "UniMKRWETH",
  UniRENWETH = "UniRENWETH",
  UniSNXWETH = "UniSNXWETH",
  UniUNIWETH = "UniUNIWETH",
  UniUSDCWETH = "UniUSDCWETH",
  UniWBTCUSDC = "UniWBTCUSDC",
  UniYFIWETH = "UniYFIWETH",
  BptWBTCWETH = "BptWBTCWETH",
  BptBALWETH = "BptBALWETH",
  WMATIC = "WMATIC",
  STAKE = "STAKE",
  WAVAX = "WAVAX",
  Tricrypto2 = "Tricrypto2",
  ThreePool = "ThreePool",
  StethEth = "StethEth",
  Steth = "Steth",
  FraxUSDC = "FraxUSDC",
  Frax3Crv = "Frax3Crv",
  FRAX = "FRAX",
  BAL = "BAL",
  CRV = "CRV",
  CVX = "CVX",
  BADGER = "BADGER",
  LDO = "LDO",
  ALCX = "ALCX",
  Oneinch = "Oneinch",
  yvTricrypto2 = "yvTricrypto2",
  yvThreePool = "yvThreePool",
  yvStethEth = "yvStethEth",
  yvFraxUSDC = "yvFraxUSDC",
  yvFrax3Crv = "yvFrax3Crv",
}

export interface ITrancheInitParams {
  reserveFactor: string;
}
export interface IReserveParams
  extends IReserveBorrowParams,
    IReserveCollateralParams {
  aTokenImpl: eContractid;
  reserveFactor: string;
  strategy: IInterestRateStrategyParams;
  supplyCap: string;
  borrowCap?: string | BigNumberish;
  hasStrategy?: boolean;
  usingGovernanceSetInterestRate?: boolean;
  governanceSetInterestRate?: string;
}

export interface IInterestRateStrategyParams {
  name: string;
  optimalUtilizationRate: string;
  baseVariableBorrowRate: string;
  variableRateSlope1: string;
  variableRateSlope2: string;
  stableRateSlope1: string;
  stableRateSlope2: string;
}

export interface IReserveBorrowParams {
  // optimalUtilizationRate: string;
  // baseVariableBorrowRate: string;
  // variableRateSlope1: string;
  // variableRateSlope2: string;
  // stableRateSlope1: string;
  // stableRateSlope2: string;
  borrowingEnabled: boolean;
  reserveDecimals: string;
}

export interface IReserveCollateralParams {
  baseLTVAsCollateral: string;
  liquidationThreshold: string;
  liquidationBonus: string;
  assetType: BigNumberish;
  borrowFactor?: string | BigNumberish;
}
export interface IMarketRates {
  borrowRate: string;
}

export type iParamsPerNetwork<T> =
  | iEthereumParamsPerNetwork<T>
  | iPolygonParamsPerNetwork<T>
  | iXDaiParamsPerNetwork<T>
  | iAvalancheParamsPerNetwork<T>
  | iOptimismParamsPerNetwork<T>;

export interface iParamsPerNetworkAll<T>
  extends iEthereumParamsPerNetwork<T>,
    iPolygonParamsPerNetwork<T>,
    iXDaiParamsPerNetwork<T> {}

export interface iEthereumParamsPerNetwork<T> {
  [eEthereumNetwork.coverage]: T;
  [eEthereumNetwork.buidlerevm]: T;
  [eEthereumNetwork.kovan]: T;
  [eEthereumNetwork.ropsten]: T;
  [eEthereumNetwork.goerli]?: T;
  [eEthereumNetwork.sepolia]?: T;
  [eEthereumNetwork.main]: T;
  [eEthereumNetwork.hardhat]: T;
  [eEthereumNetwork.tenderly]: T;
}

export interface iPolygonParamsPerNetwork<T> {
  [ePolygonNetwork.matic]: T;
  [ePolygonNetwork.mumbai]: T;
}

export interface iXDaiParamsPerNetwork<T> {
  [eXDaiNetwork.xdai]: T;
}

export interface iAvalancheParamsPerNetwork<T> {
  [eAvalancheNetwork.avalanche]: T;
  [eAvalancheNetwork.fuji]: T;
}

export interface iOptimismParamsPerNetwork<T> {
  [eOptimismNetwork.optimism]: T;
}

export interface iParamsPerPool<T> {
  [AavePools.proto]: T;
  // [AavePools.matic]: T;
  // [AavePools.amm]: T;
  // [AavePools.avalanche]: T;
}

export interface iBasicDistributionParams {
  receivers: string[];
  percentages: string[];
}

export enum RateMode {
  None = "0",
  Stable = "1",
  Variable = "2",
}

export interface ObjectString {
  [key: string]: string;
}

export interface IProtocolGlobalConfig {
  TokenDistributorPercentageBase: string;
  MockUsdPriceInWei: string;
  UsdAddress: tEthereumAddress;
  NilAddress: tEthereumAddress;
  OneAddress: tEthereumAddress;
  AaveReferral: string;
}

export interface IMocksConfig {
  AllAssetsInitialPrices: iAssetBase<string>;
}

export interface ILendingRateOracleRatesCommon {
  [token: string]: ILendingRate;
}

export interface ILendingRate {
  borrowRate: string;
}



export interface IBaseConfiguration {
  MarketId: string;
  ATokenNamePrefix: string;
  VariableDebtTokenNamePrefix: string;
  StableDebtTokenNamePrefix?: string;
  SymbolPrefix: string;
  ProviderId: number;
  ProtocolGlobalParams: IProtocolGlobalConfig;
  ProviderRegistry: iParamsPerNetwork<tEthereumAddress | undefined>;
  ProviderRegistryOwner: iParamsPerNetwork<tEthereumAddress | undefined>;
  LendingPoolCollateralManager: iParamsPerNetwork<tEthereumAddress>;
  LendingPoolConfigurator: iParamsPerNetwork<tEthereumAddress>;
  LendingPool: iParamsPerNetwork<tEthereumAddress>;
  TokenDistributor: iParamsPerNetwork<tEthereumAddress>;
  FallbackOracle: iParamsPerNetwork<tEthereumAddress>;
  UniswapV3OracleAddresses: iParamsPerNetwork<ITokenAddress>;
  UniswapV3OracleTargets: iParamsPerNetwork<ITokenTarget>;
  CurveMetadata: iParamsPerNetwork<ICurveMetadata>;
  BeethovenMetadata: iParamsPerNetwork<IBeethovenMetadata>;
  ExternalStakingContracts?: iParamsPerNetwork<IExternalRewardsAddress>;
  ChainlinkAggregator: iParamsPerNetwork<IChainlinkData>;
  PoolAdmin: iParamsPerNetwork<tEthereumAddress | undefined>;
  PoolAdminIndex: number;
  EmergencyAdmin: iParamsPerNetwork<tEthereumAddress | undefined>;
  EmergencyAdminIndex: number;
  VMEXTreasury?: iParamsPerNetwork<tEthereumAddress | undefined>;
  ATokenDomainSeparator: iParamsPerNetwork<string>;
  WETH: iParamsPerNetwork<tEthereumAddress>;
  WrappedNativeToken: iParamsPerNetwork<tEthereumAddress>;
  WethGateway: iParamsPerNetwork<tEthereumAddress>;
  ReserveFactorTreasuryAddress: iParamsPerNetwork<tEthereumAddress>;
  IncentivesController: iParamsPerNetwork<tEthereumAddress>;
  VariableDebtTokenImplementation?: iParamsPerNetwork<tEthereumAddress>;
  ReserveAssets: iParamsPerNetwork<SymbolMap<tEthereumAddress>>;
  OracleQuoteCurrency: string;
  OracleQuoteDecimals?: number;
  OracleQuoteUnit: string;
  SequencerUptimeFeed?: iParamsPerNetwork<tEthereumAddress>;
  RETHOracle?: iParamsPerNetwork<tEthereumAddress>;
}

export interface ICommonConfiguration extends IBaseConfiguration {
  ReservesConfig: iMultiPoolsAssets<IReserveParams>;
  Mocks: IMocksConfig;
  LendingRateOracleRatesCommon?: any;
  LendingRateOracle?: any;
  AaveOracle?: any
}

export interface IAaveConfiguration extends ICommonConfiguration {
  ReservesConfig: iAavePoolAssets<IReserveParams>;
}

export interface IAmmConfiguration extends ICommonConfiguration {
  ReservesConfig: iLpPoolAssets<IReserveParams>;
}

export interface IMaticConfiguration extends ICommonConfiguration {
  ReservesConfig: iMaticPoolAssets<IReserveParams>;
}

export interface IXDAIConfiguration extends ICommonConfiguration {
  ReservesConfig: iXDAIPoolAssets<IReserveParams>;
}

export interface IAvalancheConfiguration extends ICommonConfiguration {
  ReservesConfig: iAvalanchePoolAssets<IReserveParams>;
}

export interface IOptimismConfiguration extends ICommonConfiguration {
  ReservesConfig: iOptimismPoolAssets<IReserveParams>;
}

export interface ITokenAddress {
  [token: string]: tEthereumAddress;
}

export interface ITokenTarget {
  [token: string]: string;
}

export interface CurveMetadata {
  _reentrancyType: BigNumberish;
  _poolSize: string;
  _curvePool: tEthereumAddress;
}

export interface ICurveMetadata {
  [token: string]: CurveMetadata;
}

export interface IChainlinkInternal {
  feed: tEthereumAddress,
  heartbeat: number
}

export interface IChainlinkData {
  [token: string]: IChainlinkInternal | string;
}

export interface BeethovenMetadata {
  _typeOfPool: string;
  _legacy: boolean;
  _exists: boolean;
}

export interface IBeethovenMetadata {
  [token: string]: BeethovenMetadata;
}

export interface ExternalRewardsAddress {
  address: tEthereumAddress;
  type: number;
}

export interface IExternalRewardsAddress {
  [token: string]: ExternalRewardsAddress;
}

export type PoolConfiguration = ICommonConfiguration | IAaveConfiguration;
