import React from "react";
import { Token } from "../Main";
import { useEthers, useTokenBalance, useEtherBalance } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";
import { BalanceMsg } from "../../components";

import { Tab, makeStyles, Box } from "@material-ui/core"
import brownieConfig from "../../brownie-config-json.json"

import helperConfig from "../../helper-config.json"

import { constants } from "ethers"
import {useStakingBalance, useStakingBalance2, useStakingBalance22ND, useStakingBalance32ND, useStakingBalanceETHz2ND, useStakingBalance2ND, useStakingBalanceETHz, useStakingBalance3} from "../../hooks"
export interface WalletBalanceProps {
  token: Token;
}


const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: theme.spacing(2),
  },
}))
export const WalletBalance = ({ token }: WalletBalanceProps) => {

  const { chainId, error } = useEthers()
  const { image, address, name } = token;

  const networkName = chainId ? helperConfig[chainId] : "ganache"
  const auctionaddress = chainId ? brownieConfig["networks"][networkName]["auction"] : constants.AddressZero
  const LPTokenAddress = chainId ? brownieConfig["networks"][networkName]["LP_token"] : constants.AddressZero
  const xbtcTokenAddress = chainId ? brownieConfig["networks"][networkName]["xbtc"] : constants.AddressZero
  const proofOfWorkAddress = chainId ? brownieConfig["networks"][networkName]["pow_token"] : constants.AddressZero
  // wtf is this? 
  const classes = useStyles()
  const { account } = useEthers();
  const tokenBalance = useTokenBalance(LPTokenAddress, account);

  const tokenBalancez = useTokenBalance(xbtcTokenAddress, account);

  var balance22 = useTokenBalance(xbtcTokenAddress, account);
  var testzz = useEtherBalance(account);
  console.log("testzz", testzz);
  console.log("testzz account", account);
  const formattedBalance2zz: number = testzz
  ? parseFloat(formatUnits(testzz, 18))
  : 0

  const balContractETH = useStakingBalanceETHz(auctionaddress)
  var balOfStakingETH = 0

  const formatedStakingETH: number = balContractETH
  ? parseFloat(formatUnits(balContractETH, 18))
  : 0

  const formattedBalance2: number = balance22
  ? parseFloat(formatUnits(balance22, 8))
  : 0

  var balance223 = useTokenBalance(proofOfWorkAddress, account);

  const formattedBalance22: number = balance223
  ? parseFloat(formatUnits(balance223, 18))
  : 0
  const vfd = useTokenBalance(LPTokenAddress, account)
  const stake = useStakingBalance3(LPTokenAddress)
  var balance3 = stake
  console.log("ffd", balance3)
  const formattedBalance3: number = balance3
  ? parseFloat(formatUnits(balance3, 18))
  : 0
  var balance322 = useStakingBalance2(xbtcTokenAddress)

  const formattedBalance32: number = balance322
  ? parseFloat(formatUnits(balance322, 18))
  : 0

  var balance3223 = useStakingBalance(proofOfWorkAddress)

  const formattedBalance322: number = balance3223
  ? parseFloat(formatUnits(balance3223, 18))
  : 0





  const balContractETH2 = useStakingBalanceETHz2ND(auctionaddress)
  var balOfStakingETH = 0

  const formatedStakingETH2: number = balContractETH
  ? parseFloat(formatUnits(balContractETH, 18))
  : 0

  const stastd = useStakingBalance32ND(LPTokenAddress)
  var balance3 = stastd
  console.log("ffd", balance3)
  const formattedBalance3z: number = balance3
  ? parseFloat(formatUnits(balance3, 18))
  : 0
  var balance322 = useStakingBalance22ND(xbtcTokenAddress)

  const formattedBalance32z: number = balance322
  ? parseFloat(formatUnits(balance322, 18))
  : 0

  var balance3223 = useStakingBalance2ND(proofOfWorkAddress)

  const formattedBalance322z: number = balance3223
  ? parseFloat(formatUnits(balance3223, 18))
  : 0
  var eth = 'https://forgetoken.org/api/img/eth1.png'
  var balz = 'https://forgetoken.org/api/img/Balancer.png'
  var image2 = 'https://abastoken.org/static/media/eth.6e1743e3.png'
  var imagez = 'https://abastoken.org/static/media/icon.png'
  var imagezz = 'https://abastoken.org/static/media/dai.a2c311e8.png'
  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0;
    if(token.address === "0x0000000000000000000000000000000000000003"){
      return (<></>);
    }
    if(token.address === auctionaddress)
    {
      return (
        
        <BalanceMsg
          label={`Your 0xBitcoin balance`}
          amount={formattedBalance2}
          tokenImgSrc={imagezz}
        />
      );
    }
    if(token.address === LPTokenAddress && chainId != 5 && chainId != 42161)
    {
      var msg
      //if(formattedBalance2 == 0){
        
        msg = <a href="https://quickswap.exchange/#/swap?outputCurrency=0x71b821aa52a49f32eed535fca6eb5aa130085978" >Click Here to buy 0xBitcoin Tokens on Quickswap</a>
     // }
  
      return (<>
      <div><h1>{msg}</h1></div>
         <BalanceMsg
            label={`Your 0xBitcoin balance`}
            amount={formattedBalance2}
            tokenImgSrc={imagezz}
          /></>
      );
    }else if(token.address === LPTokenAddress){

      var msg
      //if(formattedBalance2 == 0){
        
        msg = <a href="https://quickswap.exchange/#/swap?outputCurrency=0x71b821aa52a49f32eed535fca6eb5aa130085978" >Click Here to buy ETH Tokens on Quickswap</a>
     // }
  
      return (<>
         <BalanceMsg
            label={`Your Arbitrum Ethereum balance`}
            amount={formattedBalance2zz }
            tokenImgSrc={eth}
          /></>
      );

    }
    if(token.address === xbtcTokenAddress)
    {
  return (     
    <BalanceMsg
      label={`Your ${name} balance`}
      amount={formattedBalance2}
      tokenImgSrc={image}
    />
  );
    }
  return (        <>
      <div className={classes.contentContainer}>  <h2>
      <BalanceMsg
        label={`Your Ethereum `}
        amount={formattedBalance2zz.toFixed(18)}
        tokenImgSrc={eth}
      /> &nbsp; &nbsp; &nbsp;<a href="https://bridge.arbitrum.io/">Bridge eth from Mainnet</a>
</h2><h2>
      <BalanceMsg
        label={`Your ABAS `}
        amount={formattedBalance22.toFixed(18)}
        tokenImgSrc={imagez}
      /> &nbsp; &nbsp; &nbsp;<a href="https://app.balancer.fi/#/arbitrum/trade/0x82af49447d8a07e3bd95bd0d56f35241523fbab1/0x0afaF0C46B1cA13B204a516BF5c0314674f4930D">Buy ABAS</a>
</h2>
<h2>
      <BalanceMsg
        label={`Your 0xBTC `}
        amount={formattedBalance2.toFixed(8)}
        tokenImgSrc={imagezz}
        />&nbsp; &nbsp; &nbsp;<a href="https://app.balancer.fi/#/arbitrum/trade/0x0afaF0C46B1cA13B204a516BF5c0314674f4930D/0x7cb16cb78ea464aD35c8a50ABF95dff3c9e09d5d">Buy 0xBitcoin on Arbitrum</a>
        </h2>
        <h2>
        <BalanceMsg
          label={`Your Wallets LP Tokens `}
          amount={formattedTokenBalance.toFixed(18)}
          tokenImgSrc={balz}
        />&nbsp; &nbsp; &nbsp;<a href="https://app.balancer.fi/#/arbitrum/pool/0x748951b8730da625d35a9a983d83b1a46afb7ca600020000000000000000028f" >Add/Remove Liquidity (ABAS + ETH)</a>
        </h2>
<BalanceMsg
          label={`You are Staking this many Balancer LP tokens `}
          amount={formattedBalance3.toFixed(18)}
          tokenImgSrc={balz}
        />

<BalanceMsg
        label={`Your ABAS rewards `}
        amount={formattedBalance322.toFixed(18)}
        tokenImgSrc={imagez}
      />
      <BalanceMsg
        label={`Your 0xBTC rewards `}
        amount={(formattedBalance32* 1e10).toFixed(8)}
        tokenImgSrc={imagezz}
      />
      <BalanceMsg
        label={`Your ETH rewards `}
        amount={(formatedStakingETH).toFixed(18)}
        tokenImgSrc={eth}
      />
      <h2>
     <BalanceMsg
          label={`Your Wallets LP2 Tokens `}
          amount={formattedTokenBalance.toFixed(18)}
          tokenImgSrc={balz}
        />&nbsp; &nbsp; &nbsp;<a href="https://app.balancer.fi/#/arbitrum/pool/0xe8505551eaff948449198524fd3590fd22704e7e000100000000000000000290" >Add/Remove Liquidity (ABAS + 0xBTC + bForge)</a>
        
        </h2>
<BalanceMsg
          label={`You are Staking this many Balancer LP2 tokens `}
          amount={formattedBalance3z.toFixed(18)}
          tokenImgSrc={balz}
        />

<BalanceMsg
        label={`Your ABAS rewards LP #2 `}
        amount={formattedBalance322z.toFixed(18)}
        tokenImgSrc={imagez}
      />
      <BalanceMsg
        label={`Your 0xBTC rewards LP #2 `}
        amount={(formattedBalance32z* 1e10).toFixed(8)}
        tokenImgSrc={imagezz}
      />
      <BalanceMsg
        label={`Your ETH rewards LP #2`}
        amount={(formatedStakingETH2).toFixed(18)}
        tokenImgSrc={eth}
      />

      </div>
    </>

    );
  }