import { GraphFile } from "../services"

export interface DataAccess {
    query<T>(sql: string, params: any[]): Promise<T[]>
}
export class GraphFileDao {
    id: string
    title: string
    data: string
    group_name: string
    format: string
    image_mime_type: string
    image_base64: string
    constructor(file?: GraphFile) {
        if (file) {
            this.id = file.id;
            this.title = file.title;
            this.data = file.data;
            this.group_name = file.groupName;
            this.format = file.format;
            this.image_mime_type = file.imageMimeType;
            this.image_base64 = file.imageBase64;
        }
    }
}