import * as LitJsSdk from "@lit-protocol/lit-node-client";

(async () => {
  const litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
    alertWhenUnauthorized: false,
    litNetwork: "habanero",
  });
  await litNodeClient.connect();
})();
