import React, { useState, useEffect } from "react"
import {
  Button,
  CircularProgress,
  Snackbar,
  makeStyles,
} from "@material-ui/core"
import { utils, BigNumber } from "ethers"
import { SliderInput } from "../../components"
import { Token } from "../Main"
import {useStakeTokens2ND, GetApprovalAmt2ND, useStakingBalance6bForge2nd,  useStakeTokens62ND, StakeThatCake2ND, useStakingBalance2ND, useStakingBalance6Forged2ND, useStakingBalance6xBTC2ND, useStakingBalance22ND, useStakingBalance32ND, useStakingBalance42ND, useStakingBalance52ND, useStakingBalanceETHz2ND, useUnstakeTokens2ND, useUnstakeTokens22ND,  useUnstakeTokens, useStakingBalanceETHz, useStakeTokens6, DistributeReward2, useStakingBalance6Forged, useStakingBalance6xBTC, useStakingBalance5,useStakingBalance4, useStakeTokens, GetApprovalAmt, StakeThatCake, ApproveOnlyMax, useStakingBalance, useStakingBalance2, useUnstakeTokens2, useStakingBalance3, AuctionStats, AuctionStats2, AuctionStats3, ProofOfWorkStats, ProofOfWorkStats2} from "../../hooks"

import { StylesProvider } from "@material-ui/core/styles";
import "../../styles.css";                                                                                           
import "../../styles.css";
import Alert from "@material-ui/lab/Alert"
import { useNotifications, useEthers, useTokenBalance } from "@usedapp/core"
import { formatUnits } from "@ethersproject/units"
import { BalanceMsg } from "../../components"

import brownieConfig from "../../brownie-config-json.json"

import { constants } from "ethers"
import helperConfig from "../../helper-config.json"

export interface UnstakeFormProps {
  token: Token
}

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: theme.spacing(2),
  },
  slider2: {
    width: "100%",
    maxWidth: "400px",
  },
}))


export const Unstake = ({ token }: UnstakeFormProps) => {

  const { chainId, account, error } = useEthers()
 
  const networkName = chainId ? helperConfig[chainId] : "ganache"
  const zeroxBTCAddress = chainId ? brownieConfig["networks"][networkName]["xbtc"] : constants.AddressZero
const auctionaddress = chainId ? brownieConfig["networks"][networkName]["auction"] : constants.AddressZero
const LP_token = chainId ? brownieConfig["networks"][networkName]["LP_token"] : constants.AddressZero
const LP_token2 = chainId ? brownieConfig["networks"][networkName]["LP_token2"] : constants.AddressZero
  const proofOfWorkAddress = chainId ? brownieConfig["networks"][networkName]["pow_token"] : constants.AddressZero

  const { image, address: tokenAddress, name } = token

  var balz = 'https://forgetoken.org/api/img/Balancer.png'
  var imagez = 'https://abastoken.org/static/media/icon.png'
  var imagezz = 'https://abastoken.org/static/media/dai.a2c311e8.png'
  const { notifications } = useNotifications()

  var balance = useStakingBalance(tokenAddress)
  const balance2 = useStakingBalance2(tokenAddress)
  const stake = useStakingBalance3(tokenAddress)

  const stake2 = useStakingBalance32ND(tokenAddress)


  const urshareofpool2 = useStakingBalance52ND(tokenAddress)
  const urshareofpool = useStakingBalance5(tokenAddress)
 
  let nothing  


  const tokenBalanceETH = useStakingBalanceETHz(tokenAddress)
  const tokenBalanceStaking =  useStakingBalance6Forged(account)
  const tokenBalanceStakingxBTC = useStakingBalance6xBTC(account)
  var balStakingForge = 0
  var balStakingxBTC = 0
  var balStakingETH = 0


  if(tokenBalanceETH !== nothing){
    balStakingETH = parseFloat(tokenBalanceETH.toString())
console.log("tokenBalanceStaking", balStakingETH)
  }
    if(tokenBalanceStaking !== nothing){
      balStakingForge = tokenBalanceStaking
  console.log("tokenBalanceStaking", balStakingForge)
    }
    if(tokenBalanceStakingxBTC !== nothing){
      balStakingxBTC = tokenBalanceStakingxBTC
  console.log("tokenBalanceStakingxBTC", balStakingxBTC)
    }
    useStakingBalanceETHz2ND
//copycat
const tokenBalanceETH2 = useStakingBalanceETHz2ND(tokenAddress)
  const tokenBalanceStaking2 = useStakingBalance6Forged2ND(account)
  const tokenBalanceStakingxBTC2 = useStakingBalance6xBTC2ND(account)
  const tokenBalanceStakingbForge2 = useStakingBalance6bForge2nd(account)
  var balStakingForge2 = 0
  var balStakingxBTC2 = 0
  var balStakingETH2 = 0
  var balbForge = 0

  if(tokenBalanceStakingbForge2 !== nothing){
    balbForge = parseFloat(tokenBalanceStakingbForge2.toString())
console.log("balbForge", balbForge)
  }

  if(tokenBalanceETH2 !== nothing){
    balStakingETH2 = parseFloat(tokenBalanceETH2.toString())
console.log("tokenBalanceStaking", balStakingETH2)
  }
    if(tokenBalanceStaking2 !== nothing){
      balStakingForge2 = tokenBalanceStaking2
  console.log("tokenBalanceStaking", balStakingForge2)
    }
    if(tokenBalanceStakingxBTC2 !== nothing){
      balStakingxBTC2 = tokenBalanceStakingxBTC2
  console.log("tokenBalanceStakingxBTC", balStakingxBTC2)
    }









var sharepool = 0
if(urshareofpool !== nothing){
  sharepool = urshareofpool *100;
}
  //typeof nothing === 'undefined'

  const fug=  useStakingBalance4(tokenAddress)
  const fug2= useStakingBalance42ND(tokenAddress)

console.log("fug", tokenAddress  )
  const tokenBalance = useTokenBalance(tokenAddress, account)

  console.log("fug2", tokenBalance)
  console.log("fug23", tokenAddress)
  var approvalamt = GetApprovalAmt(tokenAddress)
var aprovamt = "0"
//LP Approval
  if(approvalamt !== nothing)
{
    aprovamt = approvalamt.toString()
}

var approvalamt2 = GetApprovalAmt2ND(tokenAddress)
var aprovamt2 = "0"
//LP Approval
  if(approvalamt2 !== nothing)
{
    aprovamt2 = approvalamt2.toString()
    console.log("APPP", aprovamt2)
}

  
  if(token.address === LP_token)
  {
      balance = stake
  }
  if(token.address === LP_token2)
  {
      balance = stake2
  }
  var [amount, setAmount] =
    useState<number | string | Array<number | string>>(0)
    const { send: stakeTokensSend, state: stakeTokensState } =
    useStakeTokens(tokenAddress)

    const { send: stakeTokensSend2, state: stakeTokensState2 } =
    useStakeTokens2ND(tokenAddress)

    const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0
  const handleStakeSubmitzz = () => {
    let nothing2
    var fuck7
  if(typeof amount === 'number')
  {
    fuck7 =   utils.parseEther(parseFloat(amount.toString()).toFixed(18))
  }
  else{
    fuck7 =  "0"
  }
  if(amount !== nothing2 && tokenBalance!== nothing2 && (parseFloat(amount.toString())* 10 ** 18 ) * 1.00003 > parseFloat(tokenBalance.toString()))
  {
    console.log("FOR22222 REAL REAL REal High")
    console.log("Amount ", (parseFloat(amount.toString())* 10 ** 18 ))
    console.log("Amount ", parseFloat(tokenBalance.toString()))
    return stakeTokensSend(tokenBalance.toString())
  }
    const amountAsWei = fuck7
    return stakeTokensSend(amountAsWei.toString())
  }

  const handleStakeSubmitzz2 = () => {

    let nothing2
    var fuck7
  if(typeof amount === 'number')
  {
    fuck7 =   utils.parseEther(parseFloat(amount.toString()).toFixed(18))
  }
  else{
    fuck7 =  "0"
  } 
  if(amount !== nothing2 && tokenBalance!== nothing2 && (parseFloat(amount.toString())* 10 ** 18 ) * 1.00003 > parseFloat(tokenBalance.toString()))
  {
    console.log("FOR22222 REAL REAL REal High")
    console.log("Amount ", (parseFloat(amount.toString())* 10 ** 18 ))
    console.log("Amount ", parseFloat(tokenBalance.toString()))
    return stakeTokensSend2(tokenBalance.toString())
  }
    const amountAsWei = fuck7
    return stakeTokensSend2(amountAsWei.toString())
  }




  const { send: stakeTokensSend6, state: stakeTokensState5 } =
    useStakeTokens6(tokenAddress)

  const rewardStart = () => {
    return stakeTokensSend6()
  }
  const { send: stakeTokensSend62nd, state: stakeTokensState52ND } =
  useStakeTokens62ND(tokenAddress)

  const rewardStart2 = () => {
    return stakeTokensSend62nd()
  }

  
  const { send: stakeOnlyz, state: unstakeTokensState22v3 } =
  StakeThatCake(tokenAddress)

  const { send: stakeOnlyz2, state: unstakeTokensState22v32 } =
  StakeThatCake2ND(tokenAddress)



  const stakeOnly = () => {
    var fuck9
      let nothing3
    if(typeof amount === 'number')
    {
      fuck9 =   utils.parseEther(parseFloat(amount.toString()).toFixed(18))
    }
    else{
      fuck9 =  "0"
    }
    if(amount !== nothing3 && tokenBalance!== nothing3 && (parseFloat(amount.toString())* 10 ** 18 ) * 1.00003 > parseFloat(tokenBalance.toString()))
    {
      console.log("FOR REAL REAL REal High")
      console.log("Amount ", (parseFloat(amount.toString())* 10 ** 18 ))
      console.log("Amount ", parseFloat(tokenBalance.toString()))
      return stakeOnlyz(tokenBalance.toString())
    }
    const amountAsWei = fuck9
    return stakeOnlyz(amountAsWei.toString())
  }  
  console.log("stake", stake)


  const stakeOnly2 = () => {
    var fuck9
    let nothing3
    if(typeof amount === 'number')
    {
      fuck9 =   utils.parseEther(parseFloat(amount.toString()).toFixed(18))
    }
    else{
      fuck9 =  "0"
    }
    if(amount !== nothing3 && tokenBalance!== nothing3 && (parseFloat(amount.toString())* 10 ** 18 ) * 1.00003 > parseFloat(tokenBalance.toString()))
    {
      console.log("FOR REAL REAL REal High")
      console.log("Amount ", (parseFloat(amount.toString())* 10 ** 18 ))
      console.log("Amount ", parseFloat(tokenBalance.toString()))
      return stakeOnlyz2(tokenBalance.toString())
    }
    const amountAsWei = fuck9
    return stakeOnlyz2(amountAsWei.toString())
  }  

  const formattedBalance: number = balance
  ? parseFloat(formatUnits(balance, 18))
  : 0
  var balance22 = useStakingBalance2(zeroxBTCAddress)

  const formattedBalance2: number = balance22
  ? parseFloat(formatUnits(balance22, 18))
  : 0

  var balance22z = useStakingBalance22ND(zeroxBTCAddress)

  const formattedBalance22ND: number = balance22z
  ? parseFloat(formatUnits(balance22z, 18))
  : 0

  var balance223 = useStakingBalance(proofOfWorkAddress)

  const formattedBalance22: number = balance223
  ? parseFloat(formatUnits(balance223, 18))
  : 0


  var balance2232ND = useStakingBalance2ND(proofOfWorkAddress)

  const formattedBalance222ND: number = balance2232ND
  ? parseFloat(formatUnits(balance2232ND, 18))
  : 0

  const { send: unstakeTokensSend, state: unstakeTokensState } =
    useUnstakeTokens()


    const { send: unstakeTokensSend2ND, state: unstakeTokensState2ND } =
    useUnstakeTokens2ND()

    const { send: unstakeTokensSend22ND, state: unstakeTokensState22ND } =
    useUnstakeTokens22ND()


    const { send: unstakeTokensSend2, state: unstakeTokensState2 } =
      useUnstakeTokens2()

  const handleUnstakeSubmit = () => {
    return unstakeTokensSend()
  }
  const handleUnstakeSubmit2ND = () => {
    return unstakeTokensSend2ND()
  }
  const handleUnstakeSubmit2 = () => {
    return unstakeTokensSend2()
  }
  const handleUnstakeSubmit22ND = () => {
    return unstakeTokensSend22ND()
  }

  
  const [showUnstakeSuccess, setShowUnstakeSuccess] = useState(false)

  const handleCloseSnack2 = () => {
    showUnstakeSuccess && setShowUnstakeSuccess(false)
    
  }
  const [showUnstakeSuccess2, setShowUnstakeSuccess2] = useState(false)

  const handleCloseSnack3 = () => {
    showUnstakeSuccess2 && setShowUnstakeSuccess2(false)
    
  }


  const { send: unstakeTokensSend22z, state: unstakeTokensState2z } =
  DistributeReward2(tokenAddress)

  const faucet22 = () => {
    const amountAsWei = utils.parseEther(amount.toString())
    return unstakeTokensSend22z(amountAsWei.toString())
  }




  useEffect(() => {

    
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Unstake tokens"
      ).length > 0
    ) {
      !showUnstakeSuccess && setShowUnstakeSuccess(true)
    }
  }, [notifications, showUnstakeSuccess])


  useEffect(() => {

    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Get rewards"
      ).length > 0
    ) {
      !showUnstakeSuccess2 && setShowUnstakeSuccess2(true)
    }
  }, [notifications, showUnstakeSuccess2])





  
  const isMining = unstakeTokensState.status === "Mining"

  const isMining2 = unstakeTokensState2.status === "Mining"

  const classes = useStyles()


  var fuck
  if(typeof amount === 'string')
  {
    fuck =  parseFloat(amount).toFixed(8)

  }
  else{
    fuck =  parseFloat(amount.toString())
  }
  var fuck2 = fuck.toString()

  var approvetomuch = parseFloat(fuck2) * (1e18) > parseFloat(aprovamt.toString())

  var approvetomuch2 = parseFloat(fuck2) * (1e18) > parseFloat(aprovamt2.toString())
  console.log("approvetomuch2", approvetomuch2)
  var te = "0"
  if(tokenBalance !== nothing)
  {
    te = tokenBalance.toString()
  }
  const hastoolittle =  parseFloat(te) < parseFloat(fuck2) / 1e18
  const hasZeroAmountSelected = parseFloat(amount.toString()) === 0


  const isMining4 = unstakeTokensState22v3.status === "Mining"
  const isMining1 =  stakeTokensState.status === "Mining"
  const isMining3 = unstakeTokensState.status === "Mining"
  const isMining5 = false
  const isMining8 = stakeTokensState.status === "Mining"
  const isMining22 =  stakeTokensState2.status === "Mining"
  const isMining23 = unstakeTokensState22v32.status === "Mining"
  const isMining24 = unstakeTokensState22ND.status === "Mining"
  const isMining25 = unstakeTokensState2ND.status === "Mining"
var fsdfsdfsdf  =""



  const [showErc20ApprovalSuccess33, setShowErc20ApprovalSuccess33] =
  useState(false)
  const [showErc20ApprovalSuccess, setShowErc20ApprovalSuccess] =
    useState(false)
  const [showStakeTokensSuccess, setShowStakeTokensSuccess] = useState(false)
  const [showStakeTokensSuccess2, setShowStakeTokensSuccess2] = useState(false)

  const handleCloseSnack = () => {
    showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(false)
    showErc20ApprovalSuccess33 && setShowErc20ApprovalSuccess33(false)
    showStakeTokensSuccess && setShowStakeTokensSuccess(false)
  }

  useEffect(() => {


      if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Approve ERC20 transfer"
      ).length > 0
    ) {
      !showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(true)
      showStakeTokensSuccess && setShowStakeTokensSuccess(false)
    }
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Approve ERC20 transfer21"
      ).length > 0
    ) {
      !showErc20ApprovalSuccess33 && setShowErc20ApprovalSuccess33(true)
    }
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "Stake tokens"
      ).length > 0
    ) {
      showErc20ApprovalSuccess && setShowErc20ApprovalSuccess(false)
      !showStakeTokensSuccess && setShowStakeTokensSuccess(true)
    }
  }, [notifications, showErc20ApprovalSuccess, showStakeTokensSuccess])




var sharepool2 = 0
if(urshareofpool2 !== nothing){
  sharepool2 = urshareofpool2 *100;
}


var msgbalz  = "Your liquidity (Staked and Unstaked) is worth a total of "+(balStakingForge/10**18).toFixed(6)+" ABAS and "+(balStakingxBTC/10**18).toFixed(6)+" ETH"
var msgBalz2 = <h3>{msgbalz}</h3>

var msgbalz22  = "Your liquidity (Staked and Unstaked) is worth a total of "+(balStakingForge2/10**18).toFixed(6)+" ABAS and "+(balStakingxBTC2/10**8).toFixed(6)+" 0xBTC and " + (balbForge/10**18).toFixed(4) +" bForge"
var msgBalz22 = <h3>{msgbalz22}</h3>

if(token.address === "0x0000000000000000000000000000000000000000")
{
  
  return (

    
    <>

<div className={classes.contentContainer}>
            <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={faucet22}
            //disabled={isMining}

            disabled={isMining}
          >
            {isMining ? <CircularProgress size={26} /> : "Distribute mined rewards to LP Staking Contract"}
          </Button>
          <br></br><br></br>
          <br></br><br></br>
          <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={rewardStart}
          disabled={isMining || (isMining3)}
        >
          {isMining ? <CircularProgress size={26} /> : "Start a 9 day reward Period for Staking"}
        </Button>  Only works when staking rewards have stopped
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={rewardStart2}
          disabled={isMining || (isMining3)}
        >
          {isMining ? <CircularProgress size={26} /> : "Start a 9 day reward Period for Staking 2nd Contract"}
        </Button>
          <br></br><br></br>
          <br></br><br></br>

</div>
          </>
      )
  }

var test
  var test2

  if(approvetomuch2)
{
test2 = <Button
  color="primary"
  variant="contained"
  size="large"
  onClick={handleStakeSubmitzz2}
  disabled= {isMining || isMining8||hastoolittle || hasZeroAmountSelected  || (isMining3)|| isMining5 || isMining25 || isMining24 || isMining23 || isMining22 }
>
  {isMining || isMining3 ||isMining8|| isMining4 || isMining2 || isMining5 || isMining25 || isMining24 || isMining23 || isMining22 ? <CircularProgress size={26} /> : "Approve & Stake"}
</Button>
}
else{
  test2 = <Button
  color="primary"
  variant="contained"
  size="large"
  onClick={stakeOnly2}
  //disabled={isMining || hasZeroAmountSelected}
  disabled={isMining || isMining8||(isMining3) || hastoolittle  || hasZeroAmountSelected  || approvetomuch|| isMining5 || isMining25 || isMining24 || isMining23 || isMining22  }
>
  {isMining || isMining3 || isMining8||isMining4 || isMining2 || isMining5  || isMining25 || isMining24 || isMining23 || isMining22 ? <CircularProgress size={26} /> : "Stake"}
</Button>
}


var ps = <h2>Your % of the Staking Pool: {sharepool.toFixed(4)}%</h2>
var ps2 = <h2>Your % of the Staking Pool: {sharepool2.toFixed(4)}%</h2>
if(approvetomuch)
{
test = <Button
  color="primary"
  variant="contained"
  size="large"
  onClick={handleStakeSubmitzz}
  disabled= {isMining || isMining2 || isMining4 || isMining8 ||hastoolittle || hasZeroAmountSelected  || (isMining3)|| isMining5 }
>
  {isMining || isMining3 ||isMining8|| isMining4 || isMining2 || isMining5 ? <CircularProgress size={26} /> : "Approve & Stake"}
</Button>
}
else{
  test = <Button
  color="primary"
  variant="contained"
  size="large"
  onClick={stakeOnly}
  //disabled={isMining || hasZeroAmountSelected}
  disabled={isMining || isMining2 || isMining4 || isMining8||(isMining3) || hastoolittle  || hasZeroAmountSelected  || approvetomuch|| isMining5 }
>
  {isMining || isMining3 || isMining8||isMining4 || isMining2 || isMining5 ? <CircularProgress size={26} /> : "Stake"}
</Button>
}
var ted = formattedTokenBalance.toFixed(18)
var zeroBalz = formattedTokenBalance === 0
var textz ="" //<a></a>
var textz2 ="" //<a></a>


//TO SHOW REMOVE LINK IF NEEDED when it has a balance
if(parseFloat(ted) > 0){
  var textz2 ="" // <a href="https://quickswap.exchange/#/remove/0xF44fB43066F7ECC91058E3A614Fb8A15A2735276/0x71B821aa52a49F32EEd535fCA6Eb5aa130085978" ><h3>To Remove your Tokens from the Quickswap LP Click Here</h3></a>
}

if(parseFloat(ted) > 0){
  var textz = "" //<a href="https://quickswap.exchange/#/remove/0xF44fB43066F7ECC91058E3A614Fb8A15A2735276/0x71B821aa52a49F32EEd535fCA6Eb5aa130085978" ><h3>To Remove your Tokens from the Quickswap LP Click Here</h3></a>
        

}
var msg = <h1> <a href="https://app.balancer.fi/#/arbitrum/pool/0xb61272cbf9f855bdc9be58292a05af6f7c3d71bf00020000000000000000023c" >Click here to get Balancer LP tokens for Pool #1</a></h1>
      
var msg2 = <h1> <a href="https://app.balancer.fi/#/arbitrum/pool/0xd6f054c0892872b98fa7b9329a7851bddfe823af00010000000000000000023d" >Click here to get Balancer LP tokens for Pool #2</a></h1>
var eth = 'https://forgetoken.org/api/img/eth1.png'
      
var goerliz = <h1> <a href="https://goerlifaucet.com/" >Click here to go to website to get testnet ETH tokens</a></h1>

//copycat
if(tokenAddress == LP_token2){

  return(<>
  
  
  
  <div className={classes.contentContainer}>
  <h2>  0xBitcoin (33%) / Forge (33%) / ABAS (33%) Pool #2</h2>
      {msg2}       {textz2}
            <h2>Current Staking APY: {fug2?.toFixed(0)}%</h2>
            {msgBalz22}
      <BalanceMsg
          label={`Your un-staked ABAS / 0xBTC / Forge Balancer LP balance`}
          amount={ted}
          tokenImgSrc={balz}
        />
        <SliderInput
       
          label={`Stake Balancer LP Tokens - Move slider to amount desired`}
  
          maxValue={formattedTokenBalance}
          minValue={0}
          id={`slider-input14-${name}`}
          className="BABY"
          value={amount}
          onChange={setAmount}
          //disabled={isMining || hasZeroBalance || dontshow}
          disabled={isMining || isMining8|| (isMining3)|| isMining5 || zeroBalz }
        />
         {test2}
        
     
{ps2}
        <BalanceMsg
          label={`You are Staking this many LP tokens`}
          amount={formattedBalance.toFixed(18)}
          tokenImgSrc={balz}
        />

<BalanceMsg
        label={`Your ABAS rewards `}
        amount={formattedBalance222ND.toFixed(18)}
        tokenImgSrc={imagez}
      />
      <BalanceMsg
        label={`Your 0xBTC rewards `}
        amount={(formattedBalance22ND* 1e10).toFixed(8)}
        tokenImgSrc={imagezz}
      />
      <BalanceMsg
        label={`Your ETH rewards `}
        amount={(balStakingETH2 / 10 ** 18).toFixed(18) }
        tokenImgSrc={eth}
      />


        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleUnstakeSubmit2ND}
          disabled={isMining || isMining25 || isMining24 || isMining23 || isMining22 }
        >
          {isMining || isMining3 || isMining4 || isMining2 || isMining5 || isMining25 || isMining24 || isMining23 || isMining22  ? <CircularProgress size={26} /> : `Get Rewards Only`}
        </Button>        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleUnstakeSubmit22ND}
          disabled={isMining2 || isMining25 || isMining24 || isMining23 || isMining22 }
        >
          {isMining || isMining3 || isMining4 || isMining2 || isMining5  || isMining25 || isMining24 || isMining23 || isMining22 ? <CircularProgress size={26} /> : `Exit - Withdraw Stake and Reward`}
        </Button>
        </div>

        <StylesProvider injectFirst>
<Snackbar
  open={showErc20ApprovalSuccess}
  autoHideDuration={12000}
  onClose={handleCloseSnack}
>
  <Alert onClose={handleCloseSnack} severity="success">
    Approved successfully! Now approve the 2nd tx to stake!
  </Alert>
</Snackbar>

</StylesProvider>

<StylesProvider injectFirst>
<Snackbar
  open={showStakeTokensSuccess}
  autoHideDuration={12000}
  onClose={handleCloseSnack}
>
  <Alert onClose={handleCloseSnack} severity="success">
    Tokens staked successfully!
  </Alert>
</Snackbar>

</StylesProvider>

<StylesProvider injectFirst>
<Snackbar
  open={showUnstakeSuccess2}
  autoHideDuration={12000}
  onClose={handleCloseSnack3}
>
  <Alert onClose={handleCloseSnack3} severity="success">
    Reward successfully Claimed!
  </Alert>
</Snackbar>
      </StylesProvider>


    <StylesProvider injectFirst>
      <Snackbar
        open={showUnstakeSuccess}
        autoHideDuration={12000}
        onClose={handleCloseSnack2}
      >
        <Alert onClose={handleCloseSnack2} severity="success">
          Tokens unstaked successfully!
        </Alert>
      </Snackbar>
      </StylesProvider>


    <StylesProvider injectFirst>
      <Snackbar
        open={showErc20ApprovalSuccess33}
        autoHideDuration={12000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          ERC-20 token transfer approved successfully! Max Approved! You may now Stake w/o Approve!!
        </Alert>
      </Snackbar>

      </StylesProvider>
  
  
  
  
  
  
  
  
  
  
  
  </>)
}






















  return (
    <>
      <div className={classes.contentContainer}>

  <h2>  Ethereum (50%) / ABAS (50%) Pool #1</h2>
      {msg}       {textz}
            <h2>Current Staking APY: {fug?.toFixed(0)}%</h2>
            {msgBalz2}
      <BalanceMsg
          label={`Your un-staked Balancer LP balance`}
          amount={ted}
          tokenImgSrc={balz}
        />
        <SliderInput
       
          label={`Stake Balancer LP Tokens - Move slider to amount desired`}
  
          maxValue={formattedTokenBalance}
          minValue={0}
          id={`slider-input14-${name}`}
          className="BABY"
          value={amount}
          onChange={setAmount}
          //disabled={isMining || hasZeroBalance || dontshow}
          disabled={isMining || isMining8|| (isMining3)|| isMining5 || zeroBalz }
        />
         {test}
        
     
{ps}
        <BalanceMsg
          label={`You are Staking this many LP tokens`}
          amount={formattedBalance.toFixed(18)}
          tokenImgSrc={balz}
        />

<BalanceMsg
        label={`Your ABAS rewards `}
        amount={formattedBalance22.toFixed(18)}
        tokenImgSrc={imagez}
      />
      <BalanceMsg
        label={`Your 0xBTC rewards `}
        amount={(formattedBalance2* 1e10).toFixed(8)}
        tokenImgSrc={imagezz}
      />
      <BalanceMsg
        label={`Your ETH rewards `}
        amount={(balStakingETH / 10 ** 18).toFixed(18) }
        tokenImgSrc={eth}
      />


        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleUnstakeSubmit}
          disabled={isMining || isMining3 || isMining4 || isMining2 || isMining5}
        >
          {isMining || isMining3 || isMining4 || isMining2 || isMining5 ? <CircularProgress size={26} /> : `Get Rewards Only`}
        </Button>        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleUnstakeSubmit2}
          disabled={isMining || isMining3 || isMining4 || isMining2 || isMining5}
        >
          {isMining || isMining3 || isMining4 || isMining2 || isMining5 ? <CircularProgress size={26} /> : `Exit - Withdraw Stake and Reward`}
        </Button>


        </div>

        <StylesProvider injectFirst>
<Snackbar
  open={showErc20ApprovalSuccess}
  autoHideDuration={12000}
  onClose={handleCloseSnack}
>
  <Alert onClose={handleCloseSnack} severity="success">
    Approved successfully! Now approve the 2nd tx to stake!
  </Alert>
</Snackbar>

</StylesProvider>

<StylesProvider injectFirst>
<Snackbar
  open={showStakeTokensSuccess}
  autoHideDuration={12000}
  onClose={handleCloseSnack}
>
  <Alert onClose={handleCloseSnack} severity="success">
    Tokens staked successfully!
  </Alert>
</Snackbar>

</StylesProvider>

<StylesProvider injectFirst>
<Snackbar
  open={showUnstakeSuccess2}
  autoHideDuration={12000}
  onClose={handleCloseSnack3}
>
  <Alert onClose={handleCloseSnack3} severity="success">
    Reward successfully Claimed!
  </Alert>
</Snackbar>
      </StylesProvider>


    <StylesProvider injectFirst>
      <Snackbar
        open={showUnstakeSuccess}
        autoHideDuration={12000}
        onClose={handleCloseSnack2}
      >
        <Alert onClose={handleCloseSnack2} severity="success">
          Tokens unstaked successfully!
        </Alert>
      </Snackbar>
      </StylesProvider>


    <StylesProvider injectFirst>
      <Snackbar
        open={showErc20ApprovalSuccess33}
        autoHideDuration={12000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          ERC-20 token transfer approved successfully! Max Approved! You may now Stake w/o Approve!!
        </Alert>
      </Snackbar>

      </StylesProvider>
    </>
  )
}
