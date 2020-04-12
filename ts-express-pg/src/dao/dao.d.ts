
export interface DataAccess {
    query<T>(sql: string, params: any[]): Promise<T[]>
}
export interface GraphFile {
    id: string
    title: string
    data: string
    group_name: string
    format: string
    image_mime_type: string
    image_base64: string
}