// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";
connectToDb();
export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.json({ success: false, msg: "Method not allowed" });
    }
    const { completed, id } = req.body;
    const newProject = await Project.findOneAndUpdate({_id:id},{
        completed:completed
    })
    if(!newProject){
        return res.json({success:false, msg:"Status Not Updated"})
    }
    return res.json({success:true, msg:"Status Updated"})
}
