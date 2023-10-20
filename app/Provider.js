"use client"
import { WalletProvider } from "@suiet/wallet-kit";

const ConnectionProvider=({children})=>{
    return (
        <WalletProvider>
            {children}
        </WalletProvider>
    )
}

export default ConnectionProvider;