const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Booking = require("../models/bookingsModel");
const Match = require("../models/matchModel");
router.post("/book-seat",authMiddleware,async(req,res)=>{
    try{
        const newBooking = new Booking({
            ...req.body,
            transactionId: "1234",
            user: req.body.userId
        })
        await newBooking.save();
        const match = await Match.findById(req.body.match);
        match.seatBooked = [...match.seatBooked , ...req.body.seats];
        await match.save();
        res.status(200).send({
            message: "Booking successfully",
            data: newBooking,
            success: true
        })
    }
    catch(error){
        return res.status(500).send({
            message: "Booking failed",
            data:error,
            success: false
        })
    }
})

router.post("/get-bookings-by-user-id",authMiddleware,async(req,res)=>{
    try{
        console.log(req.body)
        const bookings = await Booking.find({user:req.body.userId})
        .populate("match")
        .populate("user")
        res.status(200).send({
            message : "Bookings fetch successfully",
            data:bookings,
            success:true
        });

    }
    catch(error){
        res.status(500).send({
            message : "Bookings failed",
            data:error,
            success:false
        });
    }
})

module.exports = router;