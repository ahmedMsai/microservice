const trafic = require("../models/trafic")
class traficController {

    fetchAll(req,res){
        trafic.find({}).
            then(trafics => {              
                return res.end(JSON.stringify(trafics));
            }).
            then(trafics => {
                console.log(JSON.stringify(trafics));
            });
    }
    add(req,res){
        
        trafic.create({flightId:req.param('flightId'),progress:req.param('progress'),completed:req.param('completed')})
        return res.json("trafic added!")
    }
    resetTraficAndReturn(req,res){
        this.resetTrafic()
        return res.json("trafic reset!")
    }
    resetTrafic(){
        trafic.find({}).
            then(trafics => {              
                trafics.forEach(tr =>{
                    tr.progress = Math.floor(Math.random() * 90) ;
                    tr.save();
                 });
            }).
            then(trafics => {
                console.log("nothing found");
            });
    }

    updatePeriodic(){
        trafic.find({ progress: { $lt: 100 } }).
            then(trafics => {              
                trafics.forEach(tr =>{
                    tr.progress = tr.progress +1 ;
                    tr.save();
                 });
            }).
            then(trafics => {
                console.log(JSON.stringify(trafics));
            });
        console.log("hello ahmed!")
    }
}

module.exports = traficController