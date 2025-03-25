import { init } from "@/core/init";
import { isTMA, postEvent, retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

export enum AppType {
    ANDROID = "android",
    IOS = "ios",
    MACOS = "macos",
    DESKTOP = "tdesktop",
    WEB = "weba"
}

// Initialize TMA SDK immediately if we're in TMA environment
if (isTMA()) {
    init();
}

export const useInitEnv = () => {
    const [appType] = useState(() => {
        const isTma = isTMA();
        if (isTma) {
            const lp = retrieveLaunchParams();
            if (lp.tgWebAppPlatform === "android") {
                return AppType.ANDROID;
            } else if (lp.tgWebAppPlatform === "ios") {
                return AppType.IOS;
            } else if (lp.tgWebAppPlatform === "macos") {
                return AppType.MACOS;
            } else if (lp.tgWebAppPlatform === "tdesktop") {
                return AppType.DESKTOP;
            } else if (lp.tgWebAppPlatform === "weba") {
                return AppType.WEB;
            }
        }

        return AppType.WEB;
    })

    useEffect(() => {
        if (appType === AppType.WEB) {
            return;
        }

        if (appType === AppType.ANDROID || appType === AppType.IOS) {
            postEvent("web_app_request_fullscreen");
            postEvent("web_app_request_content_safe_area");
            postEvent("web_app_request_safe_area");
            postEvent("web_app_expand");
            postEvent("web_app_setup_swipe_behavior", {
                allow_vertical_swipe: false,
            });

            // Add sticky app CSS classes for mobile platforms only
            document.body.classList.add('mobile-body');

            // Add mobile-specific styles
            const style = document.createElement('style');
            style.textContent = `
                .mobile-body {
                    overflow: hidden;
                    height: 100vh;
                    position: fixed;
                    width: 100%;
                }

                .mobile-wrap {
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    -webkit-overflow-scrolling: touch;
                    background: transparent;
                }

                .mobile-content {
                    height: calc(100% + 1px);
                    min-height: 100vh;
                }
            `;
            document.head.appendChild(style);
        }
        // else {
        //     // For desktop platforms (tdesktop, macos, etc)
        //     postEvent("web_app_expand");

        //     const style = document.createElement('style');
        //     style.textContent = `

        //     `;
        //     document.head.appendChild(style);
        // }
    }, [appType]);

    const isMobile = appType === AppType.IOS || appType === AppType.ANDROID;

    return {
        appType,
        isMobile
    }
}