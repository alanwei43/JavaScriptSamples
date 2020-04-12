import { Client } from "pg";
import { PG_CONNECTION } from "../config";
import { DataAccess } from "./";

export class Postgres implements DataAccess {
    constructor() {
    }
    /**
     * 执行查询
     * @param sql sql
     * @param params 参数
     */
    async query<T>(sql: string, params: any[]): Promise<T[]> {
        const client = new Client({
            connectionString: PG_CONNECTION
        });
        await client.connect();
        const res = await client.query(sql, params);
        await client.end();
        return res.rows;
    }
}