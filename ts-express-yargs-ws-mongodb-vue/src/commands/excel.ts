import { Options, showHelp } from "yargs";
import fs from "fs";
import { promisify } from "util";
import xlsx from "xlsx";
import path from "path";

export const command = "excel [file]";
export const desc = "JSON文件转Excel";
export const builder: { [key: string]: Options } = {
    file: {
        requiresArg: true,
        type: "string",
        describe: "JSON文件地址"
    }
};
export const handler = async function (argv: { file: string }) {
    const fileContent = await promisify(fs.readFile)(argv.file, {
        encoding: "utf8"
    });

    const data: Array<any> = JSON.parse(fileContent);

    const sheetName: string = "示例";
    let workBook = {
        SheetNames: [sheetName],
        Sheets: {
            [sheetName]: xlsx.utils.json_to_sheet(data)
        }
    };
    xlsx.writeFile(workBook, path.join("data", "sample.xlsx"));
    process.exit();

}