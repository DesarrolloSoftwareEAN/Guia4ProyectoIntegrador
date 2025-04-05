// filepath: backend/src/types/mysql2.d.ts
declare module "mysql2/promise" {
    import * as mysql from "mysql2";
    export * from "mysql2";
    export const createPool: typeof mysql.createPool;
    export const createConnection: typeof mysql.createConnection;
  }