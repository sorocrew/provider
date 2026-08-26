# @sorocrew/provider

![SoroCrew Logo](./crew-logo-white.svg)

> **Injected window.stellar & Freighter-compatible Mock Wallet SDK** for Soroban dApp testing inside SoroCrew Studio.

`@sorocrew/provider` injects `window.sorocrew` and `window.freighter` into any web application testing frame. It enables dApp developers to test network switching, account keypairs, and Soroban contract signing without relying on browser extension popups.

---

## Installation

```bash
npm install @sorocrew/provider
# or
pnpm add @sorocrew/provider
```

---

## Usage

### In your dApp Frontend

```typescript
import { isConnected, getPublicKey, getNetwork } from '@sorocrew/provider';

// Check if provider is available
const connected = await isConnected();

// Fetch active signer public key
const publicKey = await getPublicKey();
console.log('Active Public Key:', publicKey);

// Listen to Network Changes triggered by SoroCrew Studio Header Toggler
window.sorocrew.on('networkChange', (details) => {
  console.log('Switched to network:', details.networkUrl);
});
```

---

## License

MIT © [SoroCrew](https://github.com/sorocrew)
