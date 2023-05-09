// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";
connectToDb();
export default async function handler(req, res) {
    const allProjects = await Project.find({});
    for(let i = 0; i<allProjects.length; i++){
        allProjects[i].priority = i+1;
        await allProjects[i].save();
    }
    return res.json({success:true, allProjects})
}
