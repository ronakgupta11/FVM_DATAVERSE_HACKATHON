import React from 'react'
import * as LitJsSdk from "@lit-protocol/lit-node-client";
const REACT_APP_RELAY_API_URL="https://relay-server-staging.herokuapp.com"

const REACT_APP_RPC_URL="https://chain-rpc.litprotcol.com/http"
const client = new LitJsSdk.LitNodeClient();
await client.connect();
window.litNodeClient = client;

function Lit() {
  return (
    
  )
}

export default Lit