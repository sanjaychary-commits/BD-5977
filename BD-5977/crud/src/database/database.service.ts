  import { Injectable, Inject } from '@nestjs/common';

  @Injectable()
  export class DatabaseService {
    constructor(@Inject('DATABASE_OPTIONS') private options: any) {
          console.log('Dynamic Received:', this.options)

    }

    getDbName() {
      return `Connected to: ${this.options.dbName}`;
    }
  
  }