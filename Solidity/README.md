# Test
MUST LAUNCH ON LEDGER to safetly have admin in Staking contracts for adding tokens

Get 0xBTC Address and bForge Address and ABAS Address on Arbitrum
0xBTC Arbitrum: 0x7cb16cb78ea464aD35c8a50ABF95dff3c9e09d5d
bForge Arbitrum: 0x11f38B2aff86FF9f253f6Fd91378e4c7daDF5667
ABAS Arbitrum: ? Waiting to be Deployed ?

1) Launch ABAS.sol for ABAS Token

2) You will recieve 1 Token to start Balancer LP with bForge(33%) and 0xBTC(33%) and LP with ETH (2 LPs) after launching the contracts
2a) Set each pool up as follows 
    Set up pool #1 as ABAS then ETH

      -This gives you LP Token #1

    **HALF A ABAS TOKEN FOR EACH POOL MAX**

2b) Set up pool #2 as follows ABAS then 0xBTC then bForge

      -This gives you LP Token #2

    **HALF A ABAS TOKEN FOR EACH POOL MAX**
    
3) Launch ABAS Auction Contract

4) Launch Rewards Contract #1 - Need 4 variables ABAS, Auctions, LP Token #1 you created in step 2, and 0xBTC Address
5) Launch Rewards Contract #2 - Need 4 variables ABAS, Auctions, LP Token #2 you created in step 2, and 0xBTC Address

6)Go back to ArbiForge and confirm Auction and rewards contract addresses (zinit) inputting Auctions, Rewards Contract #1 and Rewards Contract #2

7) Go back to Auctions and start them zSetup, inputting ABAS Contract

8) Setup ABAS_Helper.sol for compadibility with Stats site

8) Verify contracts on Arbiscan
