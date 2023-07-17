import { addListener } from 'process';
import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IOptimismConfiguration, eEthereumNetwork, eOptimismNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategySUSD,
  strategyUSDC,
  strategyUSDT,
  strategywstETH,
  strategyFRAX,
  strategyOP,
  strategySNX,
  strategyWBTC,
  strategyWETH,
  strategyRETH,
  strategyCurveV1LPToken,
  strategyBeefyToken,
  strategyVeloToken,
  strategyBeethovenToken,
  strategyStableYearn,
  strategyYearnToken,
  strategyLUSD
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const OptimismConfig: IOptimismConfiguration = {
  ...CommonsConfig,
  MarketId: 'VMEX genesis market OP',
  ProviderId: 10,

  ReservesConfig: {
    DAI: strategyDAI,
    SNX: strategySNX,
    SUSD: strategySUSD,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    wstETH: strategywstETH,
    FRAX: strategyFRAX,
    OP: strategyOP,
    rETH: strategyRETH,
    ThreeCRV: strategyCurveV1LPToken,
    sUSD3CRV: strategyCurveV1LPToken,
    wstETHCRV: strategyCurveV1LPToken,
    mooCurveFsUSD: strategyBeefyToken,
    mooCurveWSTETH: strategyBeefyToken,
    velo_rETHWETH: strategyVeloToken,
    velo_wstETHWETH: strategyVeloToken,
    moo_velo_wstETHWETH: strategyBeefyToken,
    velo_USDCsUSD: strategyVeloToken,
    moo_velo_USDCsUSD: strategyBeefyToken,
    velo_ETHUSDC: strategyVeloToken,
    moo_velo_ETHUSDC: strategyBeefyToken,
    velo_OPETH: strategyVeloToken,
    moo_velo_OPETH: strategyBeefyToken,
    velo_ETHSNX: strategyVeloToken,
    moo_velo_ETHSNX: strategyBeefyToken,
    velo_OPUSDC: strategyVeloToken,
    moo_velo_OPUSDC: strategyBeefyToken,
    velo_DAIUSDC: strategyVeloToken,
    moo_velo_DAIUSDC: strategyBeefyToken,
    velo_FRAXUSDC: strategyVeloToken,
    moo_velo_FRAXUSDC: strategyBeefyToken,
    velo_USDTUSDC: strategyVeloToken,
    moo_velo_USDTUSDC: strategyBeefyToken,
    // beethoven_USDCDAI: strategyBeethovenToken,
    beethoven_wstETHETH: strategyBeethovenToken,
    beethoven_rETHETH: strategyBeethovenToken,
    yvUSDC: strategyStableYearn,
    yvUSDT: strategyStableYearn,
    yvDAI: strategyStableYearn,
    yvWETH: strategyYearnToken,
    LUSD: strategyLUSD,
    velo_LUSDWETH: strategyVeloToken
  },
  ReserveAssets: {
    [eOptimismNetwork.optimism]: {
      DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      SNX: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
      SUSD: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
      USDC: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      USDT: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      WBTC: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
      WETH: '0x4200000000000000000000000000000000000006',
      wstETH: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
      FRAX: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
      OP: '0x4200000000000000000000000000000000000042',
      rETH: '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
      ThreeCRV: '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
      sUSD3CRV: '0x061b87122Ed14b9526A813209C8a59a633257bAb',
      wstETHCRV: '0xEfDE221f306152971D8e9f181bFe998447975810',
      // mooCurveFsUSD: '0x107Dbf9c9C0EF2Df114159e5C7DC2baf7C444cFF',
      mooCurveWSTETH: '0x0892a178c363b4739e5Ac89E9155B9c30214C0c0',
      velo_rETHWETH: "0x7e0F65FAB1524dA9E2E5711D160541cf1199912E",
      velo_wstETHWETH: '0x6dA98Bde0068d10DDD11b468b197eA97D96F96Bc',
      // moo_velo_wstETHWETH: '0xcAdC68d5834898D54929E694eD19e833e0117694',
      // velo_USDCsUSD: '0xd16232ad60188B68076a235c65d692090caba155',
      // moo_velo_USDCsUSD: '0x2232455bf4622002c1416153EE59fd32B239863B',
      velo_ETHUSDC: '0x0493Bf8b6DBB159Ce2Db2E0E8403E753Abd1235b',
      // moo_velo_ETHUSDC: '0xB708038C1b4cF9f91CcB918DAD1B9fD757ADa5C1',
      velo_OPETH: '0xd25711EdfBf747efCE181442Cc1D8F5F8fc8a0D3',
      // moo_velo_OPETH: '0xC9737c178d327b410068a1d0ae2D30ef8e428754',
      // velo_ETHSNX: '0x1Bf31A0932A0035c532A7b1DCB94ffe0b35aed14', //new: currently has very little tvl in v2
      // moo_velo_ETHSNX: '0x40324434a0b53dd1ED167Ba30dcB6B4bd7a9536d',
      velo_OPUSDC: '0x0df083de449F75691fc5A36477a6f3284C269108',
      // moo_velo_OPUSDC: '0x613f54c8836FD2C09B910869AC9d4de5e49Db1d8',
      // velo_DAIUSDC: '0x4F7ebc19844259386DBdDB7b2eB759eeFc6F8353',
      // moo_velo_DAIUSDC: '0x43F6De3D9fB0D5EED93d7E7E14A8A526B98f8A58',
      // velo_FRAXUSDC: '0xAdF902b11e4ad36B227B84d856B229258b0b0465',
      // moo_velo_FRAXUSDC: '0x587c3e2e17c59b09B120fc2D27E0eAd6edD2C71D',
      // velo_USDTUSDC: '0xe08d427724d8a2673FE0bE3A81b7db17BE835B36',
      // moo_velo_USDTUSDC: '0x0495a700407975b2641Fa61Aef5Ccd0106F525Cc',
      // beethoven_USDCDAI: '0x43da214fab3315aA6c02e0B8f2BfB7Ef2E3C60A5',
      beethoven_wstETHETH: '0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2',
      beethoven_rETHETH: '0x4Fd63966879300caFafBB35D157dC5229278Ed23',
      yvUSDC: '0xaD17A225074191d5c8a37B50FdA1AE278a2EE6A2',
      yvUSDT: '0xFaee21D0f0Af88EE72BB6d68E54a90E6EC2616de',
      yvDAI: '0x65343F414FFD6c97b0f6add33d16F6845Ac22BAc',
      yvWETH: '0x5B977577Eb8a480f63e11FC615D6753adB8652Ae',
      LUSD: '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819',
      velo_LUSDWETH: '0x6387765fFA609aB9A1dA1B16C455548Bfed7CbEA',
    },
  },
};

export default OptimismConfig;
