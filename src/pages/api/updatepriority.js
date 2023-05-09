import connectToDb from "middleware/connectToDb";
import Project from "../../../models/Project";

connectToDb();

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.json({ success: false, msg: "Method not allowed" });
  }
  const {data1, data2} = req.body.data
  const updatedData1 = await Project.findOneAndUpdate({_id:data1._id}, {priority:data1.priority});
  const updatedData2 = await Project.findOneAndUpdate({_id:data2._id}, {priority:data2.priority});
  return res.json({ success: true, msg: "Projects updated successfully" });
}
