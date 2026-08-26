export interface FreighterNetworkDetails {
  network: string;
  networkUrl: string;
  networkPassphrase: string;
  sorobanRpcUrl?: string;
}

export interface SignTransactionOptions {
  network?: string;
  networkPassphrase?: string;
  accountToSign?: string;
}

export interface SoroCrewProviderApi {
  isConnected: () => Promise<boolean>;
  getPublicKey: () => Promise<string>;
  getNetwork: () => Promise<string>;
  getNetworkDetails: () => Promise<FreighterNetworkDetails>;
  signTransaction: (xdr: string, opts?: SignTransactionOptions) => Promise<string>;
  signBlob: (blob: string) => Promise<string>;
  signAuthEntry: (entryXdr: string) => Promise<string>;
  on: (event: string, callback: (...args: any[]) => void) => void;
  off: (event: string, callback: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    sorocrew?: SoroCrewProviderApi;
    freighter?: SoroCrewProviderApi;
    stellar?: {
      freighter: SoroCrewProviderApi;
    };
  }
}
