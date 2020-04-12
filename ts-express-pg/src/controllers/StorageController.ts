import express from "express";
import { Controller } from "./controller";
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
        this.router.get(`${this.basePath}/say-hello`, async (req, res) => {
            this.sayHello(req, res);
        });
    }
    async sayHello(request: express.Request, response: express.Response) {
        const result = await this.svcStorage.findAll();
        response.json({
            r: result,
            date: new Date().toISOString()
        });
    }
}