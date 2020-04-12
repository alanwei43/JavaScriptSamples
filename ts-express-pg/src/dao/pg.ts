import { Client, QueryResult } from "pg";
import { PG_CONNECTION } from "../config";
import { DataAccess } from "./";

export class Postgres implements DataAccess {
    client: Client
    constructor() {
        this.client = new Client({
            connectionString: PG_CONNECTION
        });
    }
    /**
     * 执行查询
     * @param sql sql
     * @param params 参数
     */
    async query<T>(sql: string, params: any[]): Promise<T[]> {
        await this.client.connect();
        const res = await this.client.query(sql, params);
        await this.client.end()
        return res.rows;
    }
}