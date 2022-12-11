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
export const useStakingBalance4 = (address: string): number | undefined => {
    
  const { account, chainId } = useEthers()



  const networkName = chainId ? helperConfig[chainId] : "ganache"
  const LPRewardAddress = chainId ? brownieConfig["networks"][networkName]["synethix_LP"] : constants.AddressZero
  const LPTOKEN = chainId ? brownieConfig["networks"][networkName]["LP_token"] : constants.AddressZero
  //MY STUFF
    const rewardABI = LPFarm.abi
    const LPFarmInterface = new utils.Interface(rewardABI)
  
  
    
  
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
    const [rewardrate2] =
    useContractCall({
      abi: LPFarmInterface,
      address: LPRewardAddress,
      method: "rewardRate3",
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


    const ArbiForgeAddy = chainId ? brownieConfig["networks"][networkName]["pow_token"] : constants.AddressZero
    const wethaddy = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const poolid1 = chainId ? brownieConfig["networks"][networkName]["poolid1"] : constants.AddressZero
    const vaultAddy = chainId ? brownieConfig["networks"][networkName]["balVault"] : constants.AddressZero
     
    const vault = iVault.abi
    const vaultInterface = new utils.Interface(vault)
    
  

    const [stakingBalance6, ff22, fff22] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid1, wethaddy],
    }) ?? []

    const [ff2, ctx, ff22z] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid1, ArbiForgeAddy],
    }) ?? []
var dead =0
var apyz = 0
    if(unibal !==nothing && stakingBalance !==nothing && stakingBalance2 !==nothing){

      var fffff = stakingBalance3/(10**16)*(60*60*24*365)
      var ddddd = ff2 *stakingBalance2 / unibal
      apyz = fffff/ddddd

    }
    var apyz22 = 0
    if(unibal !==nothing && stakingBalance6 !==nothing && stakingBalance2 !==nothing){
      var fffff3 = rewardrate2/(10**16)*(60*60*24*365)
      var ddddd3 = stakingBalance6 *stakingBalance2 / unibal
      apyz22 = (fffff3/ddddd3) / 2 * 100
      console.log("apyzz ", apyz22)
    }
    return apyz/2*100 + apyz22
  }