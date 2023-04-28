import mongoose from 'mongoose'
const Project  = new mongoose.Schema({
    project:String,
    area:String,
    consultant:String,
    images:Array,
    completed:Boolean
},{timestamps:true})

mongoose.models={};
export default mongoose.model('Project', Project);