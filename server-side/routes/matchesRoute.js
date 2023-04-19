const { findOne } = require("../models/usersModel");
const Match = require("../models/matchModel");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.post('/add-match', authMiddleware,async(req,res)=>{
    try{
        const existingMatch = await Match.findOne({number:req.body.number});
        if(existingMatch){
            return res.status(200).send({success:false , message:'Match already exist'});
        }
        const newMatch = new Match(req.body);
        await newMatch.save();
        return res.status(200).send({
            success:true , message:'Match added successfully'
        })
    }
    catch(error){
        res.status(500).send({success:false , message:error.message});
    }
});

router.post("/get-all-matches" ,authMiddleware,async(req,res) =>{
    try{
        // console.log(req.body);
        const matches = await Match.find();
        return res.status(200).send({
            success:true,
            message:"Match fetch successfully",
            data:matches,
        });

    }
    catch(error){
        res.status(500).send({success:false , message:error.message});
    }
});

router.post("/update-match", authMiddleware,async(req,res) =>{
    try{
        await Match.findByIdAndUpdate(req.body._id , req.body);
        return res.status(200).send({
            success:true,
            message:"Match Updated successfully",
        })


    }
    catch(error){
        res.status(500).send({success:false , message:error.message});
    }
});

router.post("/delete-match", authMiddleware,async(req,res) =>{
    try{
        await Match.findByIdAndDelete(req.body._id);
        return res.status(200).send({
            success:true,
            message:"Match Deleted successfully",
        })


    }
    catch(error){
        res.status(500).send({success:false , message:error.message});
    }
});


router.post("/get-match-by-id",authMiddleware,async(req,res)=>{
    try{
        const match = await Match.findById(req.body._id);
        return res.status(200).send(
            {
                success:true,
                message:"Match fetched successfully",
                data:match,
            }
        )


    }
    catch(error){
        return res.status(500).send(
            {
                success:false,
                message:error.message,
            }
        )
    }
});


module.exports = router;