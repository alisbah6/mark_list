const StudentForm=require("../models/studentform");

const newstudentrecord=async(req,res)=>{
    try {
        const studentData = req.body; // Get student data from frontend
        console.log("Received Student Record:", studentData);
    
        const existingStudent=await StudentForm.findOne({ admission: studentData.admission });
        if(existingStudent){
        return res.status(404).json({error:"user already exist"})}
        // Insert into database (Example using MongoDB)
        const newStudent = new StudentForm(studentData);
        await newStudent.save();
    
        res.status(201).json({ message: "Student record saved successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error saving student record", error });
      }
}

module.exports={newstudentrecord}