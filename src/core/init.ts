import {
  backButton,
  initData,
  init as initSDK,
  miniApp,
  viewport
} from '@telegram-apps/sdk-react';

/**
 * Initializes the application and configures its dependencies.
 */
export function init(): void {
  initSDK();

  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  initData.restore();
  void viewport.mount().catch(e => {
    console.error('Something went wrong mounting the viewport', e);
  });
}