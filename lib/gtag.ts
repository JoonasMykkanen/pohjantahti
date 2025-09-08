export const trackEvent = (action: string, params?: { [key: string]: any }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window.gtag !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.gtag('event', action, params);
  }
};
