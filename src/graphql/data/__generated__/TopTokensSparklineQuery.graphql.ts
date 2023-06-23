/**
 * @generated SignedSource<<a96ac625280c52dd8b5d9089710e21f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Chain = "ARBITRUM" | "BNB" | "CELO" | "ETHEREUM" | "ETHEREUM_GOERLI" | "OPTIMISM" | "POLYGON" | "UNKNOWN_CHAIN" | "%future added value";
export type HistoryDuration = "DAY" | "HOUR" | "MAX" | "MONTH" | "WEEK" | "YEAR" | "%future added value";
export type TopTokensSparklineQuery$variables = {
  chain: Chain;
  duration: HistoryDuration;
};
export type TopTokensSparklineQuery$data = {
  readonly topTokens: ReadonlyArray<{
    readonly address: string | null;
    readonly market: {
      readonly priceHistory: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number;
      } | null> | null;
    } | null;
  } | null> | null;
};
export type TopTokensSparklineQuery = {
  response: TopTokensSparklineQuery$data;
  variables: TopTokensSparklineQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "chain"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "duration"
},
v2 = [
  {
    "kind": "Variable",
    "name": "chain",
    "variableName": "chain"
  },
  {
    "kind": "Literal",
    "name": "page",
    "value": 1
  },
  {
    "kind": "Literal",
    "name": "pageSize",
    "value": 100
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "currency",
    "value": "USD"
  }
],
v5 = [
  {
    "kind": "Variable",
    "name": "duration",
    "variableName": "duration"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TopTokensSparklineQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "topTokens",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "market(currency:\"USD\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TopTokensSparklineQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "topTokens",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": "market(currency:\"USD\")"
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4f33118105f6043bc4c5b887a68d03e3",
    "id": null,
    "metadata": {},
    "name": "TopTokensSparklineQuery",
    "operationKind": "query",
    "text": "query TopTokensSparklineQuery(\n  $duration: HistoryDuration!\n  $chain: Chain!\n) {\n  topTokens(pageSize: 100, page: 1, chain: $chain) {\n    address\n    market(currency: USD) {\n      priceHistory(duration: $duration) {\n        timestamp\n        value\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "de74d3753d47444fd974bdc31ac0e6ca";

export default node;
