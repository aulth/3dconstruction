// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    console.log(req.body)
    const { data } = req.body;
    console.log(data);
    const preProjects = await Project.find({});
    
    try {
        const newProject = await Project.create({
            project: data.project,
            area: data.area,
            consultant: data.consultant,
            images: data.images,
            completed:data.completed,
            priority:preProjects.length+1
        })
        if (!newProject) {
            return res.json({ success: false, msg: "Project Not Added" })
        }
        return res.json({ success: true, msg: "Project Added" })
    } catch (error) {
        return res.json({ success: false, msg: error.message })
    }
}
