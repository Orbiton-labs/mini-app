"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { useToast } from "@/hooks/use-toast";
import { useDidMount } from "@/hooks/useDidMount";
import { useInitEnv } from "@/hooks/useInitEnv";
import { IconLoading } from "@/icons/fixed/loading";
import { viewTxOnTonViewer } from "@/lib/ton/explorer";
import { usePendingTxStore } from "@/store";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, type PropsWithChildren } from "react";
import { BottomNav } from "../BottomNav";
import { Header } from "../Header/Header";
import { TransactionStatus } from "../TransactionStatus/TransactionStatus";

function RootInner({ children }: PropsWithChildren) {
  const { appType, isMobile } = useInitEnv();
  console.log("appType", appType);
  console.log("isMobile", isMobile);

  const show = usePendingTxStore((state) => state.show);
  const title = usePendingTxStore((state) => state.title);
  const description = usePendingTxStore((state) => state.description);
  const txHash = usePendingTxStore((state) => state.txHash);
  const checkPendingTx = usePendingTxStore((state) => state.checkPendingTx);
  const toastInfo = usePendingTxStore((state) => state.toastInfo);

  const { toast } = useToast()

  // interval check pending tx
  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      checkPendingTx();
    }, 3000);
    return () => clearInterval(interval);
  }, [checkPendingTx, show]);

  useEffect(() => {
    if (toastInfo) {
      toast({
        title: toastInfo.title,
        description: (
          <div onClick={() => {
            window.open(viewTxOnTonViewer(toastInfo.txHash), '_blank');
          }} className="flex items-center gap-2">
            View transaction <ExternalLink className="h-4 w-4" />
          </div>
        ),
      });
    }
  }, [toastInfo]);

  return (
    <>
      <TonConnectUIProvider
        manifestUrl="https://app.orbiton.fi/tonconnect-manifest.json"
        actionsConfiguration={{
          twaReturnUrl: "https://t.me/orbiton_swap_bot"
        }}
      >
        <div className="mobile-wrap">
          <div className="mobile-content">
            <div className={`${isMobile ? 'header-fixed telegram-header-spacing' : ''}`}>
              <Header isFullScreen={isMobile} />
            </div>

            <div className="content-scroll">
              <AnimatePresence mode="wait">
                {children}
              </AnimatePresence>
            </div>

            {show && (
              <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
                <TransactionStatus title={title} description={description} onViewOnTonviewer={() => {
                  window.open(viewTxOnTonViewer(txHash), '_blank');
                }} />
              </div>
            )}

            <BottomNav />
          </div>
        </div>
      </TonConnectUIProvider>
    </>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black3 gap-4">
      <IconLoading className="w-12 h-12 animate-spin" />
    </div>
  );
}
