import { Options } from "yargs";
import { CronJob } from "cron";
import { Logger } from "../utils/Logger";

export const command = "job";
export const desc = "定时作业";
export const builder: { [key: string]: Options } = {
    // "file": {
    //     type: "string",
    //     describe: "",
    //     requiresArg: false
    // }
};
export const handler = function (argv: {}) {
    const logger = new Logger("job");
    new CronJob(
        /**
         * Seconds: 0-59 
         * Minutes: 0-59 
         * Hours: 0-23 
         * Day of Month: 1-31 
         * Months: 0-11 (Jan-Dec) 
         * Day of Week: 0-6 (Sun-Sat)
         */
        "* 1 * * * *", // 
        function () {
            console.log(`[${new Date().toISOString()}]开始执行Job, 启动时间:${this.regJobDate.toISOString()}`);
        },
        () => console.log("Job执行完成"),
        true, // 是否开始定时任务
        "Asia/Shanghai", // 时区
        { regJobDate: new Date() }, // 回调函数上下文
        true // 是否在初始化(start)之后立即运行Job
    );
    logger.debug("定时作业设置完成");
}
