import { Button, Link, makeStyles} from "@material-ui/core"
import { useEthers } from "@usedapp/core"


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1)
  },
}))

export const Header = () => {
  const classes = useStyles()

  const { account, activateBrowserWallet, deactivate } = useEthers()

  const isConnected = account !== undefined
  var test =""
  if(isConnected){
   test = "https://arbiscan.io/token/0x0afaF0C46B1cA13B204a516BF5c0314674f4930D?a="+account;
}
  return (
    <div className={classes.container}>
      <Button color="primary" variant="contained">
      <a  className="buttonD" href="https://abastoken.org" rel="noopener noreferrer">Home</a>
      </Button>
      <Button color="primary" variant="contained">
      <a  className="buttonD" href="https://app.balancer.fi/#/arbitrum/trade/0x82af49447d8a07e3bd95bd0d56f35241523fbab1/0x0afaF0C46B1cA13B204a516BF5c0314674f4930D" rel="noopener noreferrer">Buy ABAS</a>
      </Button>
      <Button color="primary" variant="contained">
      <a  className="buttonD" href="https://abastoken.org/whitepaper.html"rel="noopener noreferrer">Info</a>
      </Button>
      <Button color="primary" variant="contained">
      <a  className="buttonD" href="https://abastoken.org/stats.html" rel="noopener noreferrer">Stats</a>
      </Button>
      
      {isConnected ? (
        <>
          <Button color="primary" variant="contained">
          <a  className="buttonD" href={test} rel="noopener noreferrer">{`${account?.slice(0, 4)}...${account?.slice(-3)}`}</a>
          </Button>
          <Button variant="contained" onClick={deactivate}>
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          className="buttonW"
          color="primary"
          size="large"
          variant="contained"
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
      )}
    </div>
  )
}