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
export const useStakingBalance6bForge2nd = (address: any): number | undefined => {
    
  const { account, chainId } = useEthers()



  const networkName = chainId ? helperConfig[chainId] : "ganache"
  const LPRewardAddress = chainId ? brownieConfig["networks"][networkName]["synethix_LP2"] : constants.AddressZero
  const LPTOKEN = chainId ? brownieConfig["networks"][networkName]["LP_token2"] : constants.AddressZero
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

 
    const bForgeAddy = chainId ? brownieConfig["networks"][networkName]["bForge"] : constants.AddressZero
    const wethaddy = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const xbtcAddy = chainId ? brownieConfig["networks"][networkName]["xbtc"] : constants.AddressZero
    const poolid2 = chainId ? brownieConfig["networks"][networkName]["poolid2"] : constants.AddressZero
    const vaultAddy = chainId ? brownieConfig["networks"][networkName]["balVault"] : constants.AddressZero
     
    const vault = iVault.abi
    const vaultInterface = new utils.Interface(vault)
    
  

    const [stakingBalance6, ff2, fff22] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid2, bForgeAddy],
    }) ?? []

    
    if(stakingBalance6 !== nothing){
      //0 is arbiForge
      //1 is WETH
console.log("zST BAL 2", parseFloat(stakingBalance6.toString()))
    }

var dead =0
var apyz = 0
var ddddd = 0
var ddddd2 = 0
    if(unibal !==nothing && stakingBalance !==nothing && stakingBalance2 !==nothing){

      ddddd2 = stakingBalance6 * (stakingBalance) / unibal +  stakingBalance6 * (urUNIBal) / unibal


    }
    //total staked currently in Forge
    return ddddd2;
  }