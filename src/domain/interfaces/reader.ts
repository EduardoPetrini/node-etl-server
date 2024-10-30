import { Readable } from "node:stream";

export interface Reader<T,S> {
  init(config:T): S
  pauseStream();
  resumeStream();
  getReadableStream(): Readable;
  connect();
  disconnect();
}
