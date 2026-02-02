export {};

declare global {
  interface Window {
    instance?: {
      setSources: (
        webm: string,
        mp4: string,
        cb: (video: HTMLVideoElement) => void
      ) => void;
    };
  }
}