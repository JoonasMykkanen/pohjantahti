// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = (action: string, params?: { [key: string]: any }) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag('event', action, params);
  }
};
