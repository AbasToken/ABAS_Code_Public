import { useContractCall, useEthers } from "@usedapp/core"
import LPFarm from "../chain-info/NyanRewards.json"
import { utils, BigNumber, constants } from "ethers"

import brownieConfig from "../brownie-config-json.json"

import iVault from "../chain-info/IVault.json"
import UniV2Pair from "../chain-info/UniswapV2Pair.json"
import helperConfig from "../helper-config.json"

/**
 * Get the staking balance of a certain token by the user in our TokenFarm contract
 * @param address - The contract address of the token
 */
export const useStakingBalance6xBTC = (address: any): number | undefined => {
    
  const { account, chainId } = useEthers()



  const networkName = chainId ? helperConfig[chainId] : "ganache"
  const LPRewardAddress = chainId ? brownieConfig["networks"][networkName]["synethix_LP"] : constants.AddressZero
  const LPTOKEN = chainId ? brownieConfig["networks"][networkName]["LP_token"] : constants.AddressZero
  //MY STUFF
  const rewardABI = LPFarm.abi
  const LPFarmInterface = new utils.Interface(rewardABI)


  const wethaddy = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
  const poolid1 = chainId ? brownieConfig["networks"][networkName]["poolid1"] : constants.AddressZero
  const vaultAddy = chainId ? brownieConfig["networks"][networkName]["balVault"] : constants.AddressZero
     
  const vault = iVault.abi
  const vaultInterface = new utils.Interface(vault)
    
  
  
    const [stakingBalance] =
      useContractCall({
        abi: LPFarmInterface,
        address: LPRewardAddress,
        method: "balanceOf",
        args: [account],
      }) ?? []


    const [stakingBalance2] =
    useContractCall({
      abi: LPFarmInterface,
      address: LPRewardAddress,
      method: "totalSupply",
      args: [],
    }) ?? []

    const [stakingBalance3] =
    useContractCall({
      abi: LPFarmInterface,
      address: LPRewardAddress,
      method: "rewardRate",
      args: [],
    }) ?? []
    let nothing
    var rateperyear = 0
    var Contractshare = 0
    if(stakingBalance3 !== nothing && stakingBalance2 !== nothing && stakingBalance !== nothing){
     rateperyear = parseInt(stakingBalance3.toString()) / (4*10**16) * 10 *3600*7*24 / 10**18 *56 //10 /(4*10^16) *parseInt(stakingBalance.toString())/parseInt(stakingBalance.toString()) 
     Contractshare =parseInt(stakingBalance2.toString()) 
    }

    const [unibal] =
    useContractCall({
      abi: LPFarmInterface,
      address: LPTOKEN,
      method: "totalSupply",
      args: [],
    }) ?? []

    const sushiABI = UniV2Pair.abi
    const sushiInterface = new utils.Interface(sushiABI)
    
  
    const [urUNIBal] =
    useContractCall({
      abi: LPFarmInterface,
      address: LPTOKEN,
      method: "balanceOf",
      args: [account],
    }) ?? []



    const [stakingBalance62, ff22, fff22] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid1, wethaddy],
    }) ?? []

    if(stakingBalance62 !== nothing){
      //0 is arbiForge
      //1 is WETH
console.log("ST BAL 2", parseFloat(stakingBalance62.toString()))
    }
var dead =0
var apyz = 0
var ddddd = 0
var ddddd2 = 0
    if(unibal !==nothing && stakingBalance !==nothing && stakingBalance2 !==nothing){
      Contractshare =parseInt(stakingBalance2.toString()) *ff22/unibal
    var urUniper = 1/parseInt(unibal.toString())*100
    var unitotalForge = parseInt(ff22.toString())/(10**18)
    var urUniTotal = urUniper
    var TotalAPY = rateperyear/(Contractshare*2 )* 10**20
     dead = TotalAPY 
      var fffff = stakingBalance3/(10**16)*(60*60*24*365)
      ddddd = ff22 *stakingBalance / unibal
      //0xbtc
      ddddd2 = stakingBalance62 * (stakingBalance) / unibal +  stakingBalance62 * (urUNIBal) / unibal
      apyz = fffff/ddddd

    }
    //total staked currently in Forge
    return ddddd2;
  }