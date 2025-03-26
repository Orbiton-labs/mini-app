export const viewTxOnTonViewer = (txHash: string) => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'mainnet') {
        return `https://tonviewer.com/transaction/${txHash}`;
    }

    return `https://testnet.tonviewer.com/transaction/${txHash}`;
};
