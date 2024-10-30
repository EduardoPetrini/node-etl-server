import { Readable } from "node:stream";

import { Reader } from '../../domain/interfaces/reader';
import { MySQLConfig } from '../interfaces';

export class MySQLConnector implements Reader<MySQLConfig, MySQLConnector> {
  private connection;
  constructor(config: MySQLConfig) {
    throw new Error('Method not implemented.');
  }
  init(config: MySQLConfig): MySQLConnector {
    throw new Error('Method not implemented.');
  }

  getReadableStream(): Readable {
    throw new Error('Method not implemented.');
  }
  connect() {
    throw new Error('Method not implemented.');
  }
  disconnect() {
    throw new Error('Method not implemented.');
  }
  pauseStream() {
    throw new Error('Method not implemented.');
  }
  resumeStream() {
    throw new Error('Method not implemented.');
  }
}
