import { GraphFileDao } from "../dao";

export class GraphFile {
    id: string
    title: string
    data: string
    groupName: string
    format: string
    imageMimeType: string
    imageBase64: string
    constructor(file?: GraphFileDao) {
        if (file) {
            this.id = file.id;
            this.title = file.title;
            this.data = file.data;
            this.groupName = file.group_name;
            this.format = file.format;
            this.imageMimeType = file.image_mime_type;
            this.imageBase64 = file.image_base64;
        }
    }
}