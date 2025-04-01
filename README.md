# Orbiton Telegram Mini App

### 🌐 Socials & Community

- [Mini App](https://t.me/orbiton_swap_bot)
- [Web App](https://app.orbiton.fi/)
- [Twitter](https://x.com/Orbiton_fi)

## Overview

**Orbiton** is a decentralized finance (DeFi) application designed for the **TON blockchain**. It allows users to **swap tokens, manage liquidity pools, and track their portfolio** within a seamless and intuitive interface built specifically for Telegram Mini Apps.

Built with **Next.js 14, TypeScript, and Tailwind CSS**, Orbiton ensures a high-performance, modern user experience optimized for the Telegram platform.

---

## Features

- 🔄 **Token Swaps** – Easily swap between different **TON Jettons** using a secure and optimized trading algorithm with price impact previews.
- 💧 **Liquidity Pools** – Provide liquidity to earn **transaction fees**, create new pools, and manage positions with detailed analytics.
- 📊 **Portfolio Tracking** – Monitor your assets, transactions, and liquidity positions in real-time.
- 🔍 **Market Explorer** – Discover and analyze trending tokens and pools on the TON network.
- 🔗 **TON Connect Integration** – Securely connect your **TON wallet** to interact with the blockchain.
- 🚀 **Fast and Responsive UI** – Optimized for Telegram Mini App with smooth animations and intuitive controls.
- ⚙️ **Advanced Settings** – Customize slippage tolerance and transaction parameters for optimal trading.

---

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **State Management**: Zustand for global state
- **Blockchain Integration**: TON Connect (via @tonconnect/ui-react)
- **Data Fetching**: GraphQL with Apollo Client
- **UI Components**: Custom components with Radix UI primitives
- **Charts & Visualizations**: Recharts and D3.js
- **Animations**: Framer Motion

---

## Project Structure

```
mini-app 
├── public/                    # Static assets (images, locale files, etc.) 
├── src/ 
│ ├── apis/                   # API calls for blockchain and server 
│ ├── app/                    # Next.js app router pages and layouts
│ │ ├── swap/                 # Token swap functionality
│ │ ├── pools/                # Liquidity pools listing
│ │ ├── add-liquidity/        # Add liquidity to pools
│ │ ├── create-pool/          # Create new liquidity pools
│ │ ├── manage-position/      # Manage existing liquidity positions
│ │ ├── pool-detail/          # Detailed pool information
│ │ ├── explore/              # Market explorer
│ │ └── portfolio/            # User portfolio tracking
│ ├── components/             # Reusable UI components 
│ │ ├── ui/                   # Base UI components
│ │ ├── Header/               # App header components
│ │ ├── SelectToken/          # Token selection components
│ │ ├── TransactionStatus/    # Transaction status indicators
│ │ ├── LiquidityChart/       # Pool liquidity visualization
│ │ └── [other components]    # Various functional components
│ ├── hooks/                  # Custom React hooks 
│ ├── store/                  # State management (Zustand)
│ │ ├── swap-store.ts         # Swap functionality state
│ │ ├── ton-wallet-store.ts   # Wallet connection state
│ │ ├── token-list-store.ts   # Token listing state
│ │ └── [other stores]        # Various feature-specific stores
│ ├── lib/                    # Utility functions
│ ├── constants/              # Global constants
│ ├── types/                  # TypeScript type definitions
│ ├── icons/                  # SVG icons and visual assets
│ ├── graphql/                # GraphQL queries and mutations
│ ├── helper/                 # Helper functions
│ ├── core/                   # Core application logic
│ └── pipelines/              # Data processing pipelines
├── certificates/             # SSL certificates for local HTTPS development
├── scripts/                  # Build and utility scripts
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.mjs           # Next.js configuration
├── .env.development          # Development environment variables
├── .env.example              # Example environment variables
└── README.md                 # Project documentation
```

## Development Setup

### Prerequisites

- Node.js 18+ and pnpm 9.15.0+
- Telegram development environment
- TON wallet for testing

### Environment Variables

Create a `.env.development` file based on `.env.example` with the following:

```
NEXT_PUBLIC_ENVIRONMENT=testnet
NEXT_PUBLIC_ORBITON_INDEXER_URL=https://api.orbiton.fi/graphql
NEXT_PUBLIC_ROUTER_ADDRESS=EQAQW9X_hfjQhG3F7Oo_fwP3Ty9lpVnYTydGRcezhaI7nED_
NEXT_PUBLIC_ORBITON_SMART_ROUTER_ENDPOINT=https://api.orbiton.fi/api
NEXT_PUBLIC_TON_API_BASE_URL=https://testnet.tonapi.io
NEXT_PUBLIC_TON_API_KEY=[your_api_key]
```

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Run with HTTPS for Telegram Mini App testing
pnpm dev:https

# Build for production
pnpm build

# Start production server
pnpm start
```

## Key Features Implementation

- **Token Swapping**: Implements intelligent routing to find the best exchange rates across multiple pools
- **Position Management**: Advanced liquidity position management with detailed analytics
- **Responsive Design**: Custom mobile-first UI optimized for Telegram Mini Apps environment
- **Transaction Management**: Real-time transaction tracking and status updates
- **Smart Contract Integration**: Direct interaction with TON blockchain contracts
- **Price Calculation**: Real-time price impact and slippage calculations

🚀 **Join us in shaping the future of DeFi on TON!**