import CourseDetailsController from "@/controller/master/CourseDetailsController";
import { Router, RequestHandler } from "express";

const router = Router();
const courseDetailsController = new CourseDetailsController();

router.get("/course-details", courseDetailsController.get);
router.get("/course-details");

export default router;
