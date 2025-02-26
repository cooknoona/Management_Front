declare global {
  interface Window {
    electron: {
      send: (channel: string, data: any) => void;
      on: (channel: string, callback: Function) => void;
    };
  }
}

export {};
