import express, { Request, Response } from "express";
import helloRouter from "./routes/hello";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express with Typescript" });
});

//routes
app.use("/api", helloRouter);

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
