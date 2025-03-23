const mongoose=require("mongoose");

const studentform=new mongoose.Schema({
    studentname:{type:String,required:true},
    classec:{type:String,required:true},
    fatherName:{type:String,required:true},
    motherName:{type:String,required:true},
admission:{type:Number,required:true},
dob:{type:Date,require:true}
});
const StudentForm=mongoose.model("StudentForm",studentform);
module.exports=StudentForm;