/**
 * @generated SignedSource<<8ac8c59126041499a264f8ba09425f41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Chain = "ARBITRUM" | "BNB" | "CELO" | "ETHEREUM" | "ETHEREUM_GOERLI" | "OPTIMISM" | "POLYGON" | "UNKNOWN_CHAIN" | "%future added value";
export type ContractInput = {
  address?: string | null;
  chain: Chain;
};
export type TokenPriceQuery$variables = {
  contract: ContractInput;
};
export type TokenPriceQuery$data = {
  readonly tokens: ReadonlyArray<{
    readonly market: {
      readonly priceHistory1D: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number;
      } | null> | null;
      readonly priceHistory1H: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number;
      } | null> | null;
      readonly priceHistory1M: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number;
      } | null> | null;
      readonly priceHistory1W: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number;
      } | null> | null;
      readonly priceHistory1Y: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number;
      } | null> | null;
    } | null;
  } | null> | null;
};
export type TokenPriceQuery = {
  response: TokenPriceQuery$data;
  variables: TokenPriceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contract"
  }
],
v1 = [
  {
    "items": [
      {
        "kind": "Variable",
        "name": "contracts.0",
        "variableName": "contract"
      }
    ],
    "kind": "ListValue",
    "name": "contracts"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "currency",
    "value": "USD"
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "HOUR"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "DAY"
  }
],
v8 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "WEEK"
  }
],
v9 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "MONTH"
  }
],
v10 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "YEAR"
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v11/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TokenPriceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "tokens",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "alias": "priceHistory1H",
                "args": (v3/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": "priceHistory(duration:\"HOUR\")"
              },
              {
                "alias": "priceHistory1D",
                "args": (v7/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": "priceHistory(duration:\"DAY\")"
              },
              {
                "alias": "priceHistory1W",
                "args": (v8/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": "priceHistory(duration:\"WEEK\")"
              },
              {
                "alias": "priceHistory1M",
                "args": (v9/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": "priceHistory(duration:\"MONTH\")"
              },
              {
                "alias": "priceHistory1Y",
                "args": (v10/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": "priceHistory(duration:\"YEAR\")"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TokenPriceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Token",
        "kind": "LinkedField",
        "name": "tokens",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "TokenMarket",
            "kind": "LinkedField",
            "name": "market",
            "plural": false,
            "selections": [
              {
                "alias": "priceHistory1H",
                "args": (v3/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v12/*: any*/),
                "storageKey": "priceHistory(duration:\"HOUR\")"
              },
              {
                "alias": "priceHistory1D",
                "args": (v7/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v12/*: any*/),
                "storageKey": "priceHistory(duration:\"DAY\")"
              },
              {
                "alias": "priceHistory1W",
                "args": (v8/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v12/*: any*/),
                "storageKey": "priceHistory(duration:\"WEEK\")"
              },
              {
                "alias": "priceHistory1M",
                "args": (v9/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v12/*: any*/),
                "storageKey": "priceHistory(duration:\"MONTH\")"
              },
              {
                "alias": "priceHistory1Y",
                "args": (v10/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v12/*: any*/),
                "storageKey": "priceHistory(duration:\"YEAR\")"
              },
              (v11/*: any*/)
            ],
            "storageKey": "market(currency:\"USD\")"
          },
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "152a9cea53163eb7895d9da5ac7c5b5e",
    "id": null,
    "metadata": {},
    "name": "TokenPriceQuery",
    "operationKind": "query",
    "text": "query TokenPriceQuery(\n  $contract: ContractInput!\n) {\n  tokens(contracts: [$contract]) {\n    market(currency: USD) {\n      priceHistory1H: priceHistory(duration: HOUR) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1D: priceHistory(duration: DAY) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1W: priceHistory(duration: WEEK) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1M: priceHistory(duration: MONTH) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1Y: priceHistory(duration: YEAR) {\n        timestamp\n        value\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "481f40efb02f5c3e6edd85019e8ad34f";

export default node;
