"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello_1 = __importDefault(require("./routes/hello"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "Hello from Express with Typescript" });
});
//routes
app.use("/api", hello_1.default);
const startServer = () => {
    return new Promise((resolve, reject) => {
        const server = app.listen(PORT, () => {
            resolve(server);
        });
        server.on("error", (error) => {
            reject(error);
        });
    });
};
startServer()
    .then(() => {
    console.log(`server running on PORT --> ${PORT}`);
})
    .catch(() => {
    console.log("Error running the server");
});
