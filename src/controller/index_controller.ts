import { Request, Response } from "express";
import Member from "../model/index";
class inController {
  async index(req: Request, res: Response) {
    try {
      const Members = Member.find();
      res.status(200).json({ Members: Members });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }
  async show(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await Member.findById(id);
      res.status(200).json({ Members: Member });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      let usernew = new Member({ name: req.body.name, email: req.body.email });
      usernew.save();
      res.status(200).json({ Member });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      let user = await Member.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json({ Member: Member });
    } catch (error) {
      res.status(500).json({ message: "Err" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = req.body.id;
      let name = req.body.name;
      let email = req.body.email;
      let user = await Member.findByIdAndUpdate(id, {
        name: name,
        email: email,
      });
      res.status(200).json(Member);
    } catch (error) {
      res.status(500).json({ message: "Err" });
    }
  }
}

export default new inController();
