import express from "express";
import { Controller } from "./controllers";
import { StorageService } from "../services";

export class StorageController implements Controller {
    public router: express.Router;
    private basePath: string;
    private svcStorage: StorageService;
    constructor(basePath?: string) {
        this.router = express.Router();
        this.basePath = basePath || "/storage";
        this.svcStorage = new StorageService();
        this.initRouters()
    }
    initRouters() {
        this.router.get(`${this.basePath}/files`, async (req, res) => {
            this.getFiles(req, res);
        });
        this.router.get(`${this.basePath}/group`, async (req, res) => {
            this.getAllGroups(res);
        });
    }
    async getAllGroups(response: express.Response) {
        const groups = await this.svcStorage.findGroups();
        response.json({
            "code": 2,
            "message": null,
            "data": groups,
            "success": true
        });
    }
    async getFiles(request: express.Request, response: express.Response) {
        const result = await this.svcStorage.findAll();
        response.json({
            "code": 0,
            "message": null,
            "data": result,
            "success": true
        });
    }
}