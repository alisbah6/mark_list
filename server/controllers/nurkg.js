const Nurkg=require("../models/nur_kg");

const newreportcard=async(req,res)=>{
    try {
        const ReportCardData = req.body; // Get student data from frontend
        console.log("Received Record:", ReportCardData);
  const newRecord = new Nurkg(ReportCardData);
         await newRecord.save();
     
         res.status(201).json({ message: "record saved successfully" });
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    newreportcard,
}