import { Postgres, DataAccess, GraphFile } from "../dao";

export class StorageService {
    private dao: DataAccess
    constructor() {
        this.dao = new Postgres();
    }
    async findAll(): Promise<GraphFile[]> {
        const files = await this.dao.query<GraphFile>("select * from graph_file;", []);
        return files;
    }
}