import { Postgres, DataAccess, GraphFileDao } from "../dao";

export class StorageService {
    private dao: DataAccess
    constructor() {
        this.dao = new Postgres();
    }
    async findAll(): Promise<GraphFileDao[]> {
        const files = await this.dao.query<GraphFileDao>("select * from table_name;", []);
        return files;
    }
    async findGroups(): Promise<String[]> {
        const groups = await this.dao.query<String>("select distinct field from table_name;", []);
        return groups;
    }
}