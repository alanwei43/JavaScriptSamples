import App from "./app";
import { StorageController } from "./controllers";

const app = new App([
    new StorageController("/storage")
], 5000);

app.listen();

// 参考 https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/ 搭建