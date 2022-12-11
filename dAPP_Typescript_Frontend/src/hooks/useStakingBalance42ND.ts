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
export const useStakingBalance42ND = (address: string): number | undefined => {
    
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
    const [rewardrate3] =
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

    const sushiABI = UniV2Pair.abi
    const sushiInterface = new utils.Interface(sushiABI)
    

    const ArbiForgeAddy = chainId ? brownieConfig["networks"][networkName]["pow_token"] : constants.AddressZero
    const wethaddy = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const xbtcAddy = chainId ? brownieConfig["networks"][networkName]["xbtc"] : constants.AddressZero
    const poolid2 = chainId ? brownieConfig["networks"][networkName]["poolid2"] : constants.AddressZero
    const poolid1 = chainId ? brownieConfig["networks"][networkName]["poolid1"] : constants.AddressZero
    const vaultAddy = chainId ? brownieConfig["networks"][networkName]["balVault"] : constants.AddressZero
    
    const vault = iVault.abi
    const vaultInterface = new utils.Interface(vault)
    
  

    const [ff2, f2z, fff22] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid2, ArbiForgeAddy],
    }) ?? []

    
    const [stakingBalanceb] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid1, wethaddy],
    }) ?? []

    var v2 = 0
    const [stakingBalancea] =
    useContractCall({
      abi: vaultInterface,
      address: vaultAddy,
      method: "getPoolTokenInfo",
      args: [poolid1, ArbiForgeAddy],
    }) ?? []

    if(stakingBalancea != nothing && stakingBalanceb != nothing){
      var f = stakingBalanceb / stakingBalancea
      console.log ("aGIF ffffffffffff", parseFloat(f.toString()))
      v2 = ff2 * f
      console.log ("aGIF stakingBalanceb", parseFloat(stakingBalanceb.toString()))
    } // v2 = pool2abas * pool1weth / pool1abas
var dead =0
var apyz = 0
var fffff = 0
    if(unibal !==nothing && stakingBalance !==nothing && stakingBalance2 !==nothing){

      fffff = stakingBalance3/(10**16)*(60*60*24*365)
      var ddddd = ff2 *stakingBalance2 / unibal
      var test = stakingBalance2 / unibal

      console.log ("zGIF ddddd", parseFloat(ddddd.toString()))
      apyz = fffff/ddddd
      console.log("apy1,", apyz)
    }
    var apyz22 = 0
    //Find current price of ABAS to ETH. Convert ff2 to ETH
    if(unibal !==nothing && stakingBalancea !==nothing && stakingBalance2 !==nothing){
      var fffff3 = rewardrate3/(10**16)*(60*60*24*365)
      var ddddd3 = v2 *stakingBalance2 / unibal
      apyz22 = (fffff3/ddddd3) / 3 * 100
      console.log("GIF rewardrate3 ", parseFloat(rewardrate3.toString()))
      console.log("GIF fffff3 ", fffff3)
      console.log("GIF ddddd3", ddddd3)
      console.log("GIF v2", v2)
      console.log("apyz/3*100 v2", apyz/3*100)
      console.log("dddd unibal", parseFloat(unibal.toString()))
      console.log("dddd stakingBalance2", parseFloat(stakingBalance2.toString()))
      console.log("dddd stak / uni", parseFloat((stakingBalance2 / unibal * v2).toString()))
      console.log("dddd stakingBalance2", parseFloat(stakingBalance2.toString()))

      console.log("fffff ", fffff)
    }
    return apyz/3*100 + apyz22
  }