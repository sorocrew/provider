import { SoroCrewProviderApi, FreighterNetworkDetails, SignTransactionOptions } from './types';

class SoroCrewProvider implements SoroCrewProviderApi {
  private listeners: Map<string, Set<(...args: any[]) => void>> = new Map();
  private activePublicKey: string = 'GA7Q3F6K4O3Q2N5M8L9K1J2H3G4F5E6D7C8B9A01';
  private activeNetwork: string = 'LOCAL';
  private activeNetworkDetails: FreighterNetworkDetails = {
    network: 'LOCAL',
    networkUrl: 'http://localhost:8000',
    networkPassphrase: 'Standalone Network ; February 2017',
    sorobanRpcUrl: 'http://localhost:8000/soroban/rpc',
  };

  constructor() {
    this.initPostMessageListener();
  }

  private initPostMessageListener() {
    if (typeof window === 'undefined') return;
    window.addEventListener('message', (event) => {
      if (event.data && event.data.source === 'sorocrew-studio') {
        const { type, payload } = event.data;
        if (type === 'NETWORK_CHANGE') {
          this.activeNetwork = payload.name;
          this.activeNetworkDetails = payload.details;
          this.emit('networkChange', this.activeNetworkDetails);
        } else if (type === 'ACCOUNT_CHANGE') {
          this.activePublicKey = payload.publicKey;
          this.emit('accountChange', this.activePublicKey);
        }
      }
    });
  }

  public async isConnected(): Promise<boolean> {
    return true;
  }

  public async getPublicKey(): Promise<string> {
    return this.activePublicKey;
  }

  public async getNetwork(): Promise<string> {
    return this.activeNetwork;
  }

  public async getNetworkDetails(): Promise<FreighterNetworkDetails> {
    return this.activeNetworkDetails;
  }

  public async signTransaction(xdr: string, opts?: SignTransactionOptions): Promise<string> {
    console.log('[SoroCrew Provider] Signing transaction XDR:', xdr, opts);
    // Return signed XDR string payload simulation
    return xdr;
  }

  public async signBlob(blob: string): Promise<string> {
    console.log('[SoroCrew Provider] Signing raw blob:', blob);
    return `signed_${blob}`;
  }

  public async signAuthEntry(entryXdr: string): Promise<string> {
    console.log('[SoroCrew Provider] Signing Soroban auth entry:', entryXdr);
    return entryXdr;
  }

  public on(event: string, callback: (...args: any[]) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
  }

  public off(event: string, callback: (...args: any[]) => void): void {
    if (this.listeners.has(event)) {
      this.listeners.get(event)!.delete(callback);
    }
  }

  private emit(event: string, ...args: any[]): void {
    if (this.listeners.has(event)) {
      this.listeners.get(event)!.forEach((cb) => cb(...args));
    }
  }
}

// Instantiate singleton provider instance
export const provider = new SoroCrewProvider();

// Automatically inject into global window if in browser environment
if (typeof window !== 'undefined') {
  window.sorocrew = provider;
  window.freighter = provider;
  window.stellar = window.stellar || { freighter: provider };
  console.log('🚀 [SoroCrew] Injected window.sorocrew & window.freighter provider!');
}

export * from './types';
export default provider;
