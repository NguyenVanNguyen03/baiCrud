import { Router } from "express";
import inController from "../controller/index_controller";
const router = Router();

router.get("/", inController.index);
router.get("/:id", inController.show);
router.post("/", inController.create);
router.delete("/:id", inController.remove);
router.put("/", inController.update);
export default router;
