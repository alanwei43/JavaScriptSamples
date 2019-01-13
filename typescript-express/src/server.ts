import express from "express";
const app = express();
const PORT:Number = 8002

app.use("/", express.static(`${__dirname}/www`));
app.get("/", (req, res) => {
    res.send(`PORT ${PORT}, __dirname ${__dirname}`);
});

app.listen(PORT, () => {
    console.log(`listen ${PORT}`);
});