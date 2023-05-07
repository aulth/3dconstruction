// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { id } = req.body;

    try {
        let project = await Project.findOne({ _id: id });
        if (!project) {
            return res.json({ success: false, msg: "Project Not Found" })
        }
        return res.json({ success: true, msg: "Project Fetched", project: project })
    } catch (error) {
        return res.json({ success: false, msg: error.message })
    }
}
