// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "GET") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    try {
        const allProject = await Project.find({})
        if (!allProject) {
            return res.json({ success: false, msg: "Project Not Found" })
        }
        return res.json({ success: true, msg: "Project Fetched", projects:allProject })
    } catch (error) {
        return res.json({ success: false, msg: error.message })
    }
}
