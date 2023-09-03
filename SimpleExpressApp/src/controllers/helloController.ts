import { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
  res.json({ message: "message from hello controller" });
};
