declare module 'tesseract.js' {
  export interface WorkerOptions {
    langPath?: string;
    cachePath?: string;
    dataPath?: string;
    cacheSuffix?: string;
    workerPath?: string;
    corePath?: string;
    logger?: (log: string) => void;
    errorHandler?: (err: Error) => void;
  }

  export interface RecognizeResult {
    data: {
      text: string;
      confidence: number;
      lines: any[];
      blocks: any[];
      words: any[];
      symbols: any[];
      hocr: string;
      tsv: string;
      pdf: any;
    };
  }

  export interface Worker {
    load(jobId?: string): Promise<Worker>;
    loadLanguage(langs?: string): Promise<Worker>;
    initialize(langs?: string): Promise<Worker>;
    setParameters(params: object): Promise<Worker>;
    recognize(image: string | ArrayBuffer | Buffer, options?: object): Promise<RecognizeResult>;
    detect(image: string | ArrayBuffer | Buffer): Promise<any>;
    terminate(): Promise<any>;
  }

  export function createWorker(options?: WorkerOptions | string): Promise<Worker>;
  export function createScheduler(): any;
  export const PSM: Record<string, number>;
  export const OEM: Record<string, number>;
}