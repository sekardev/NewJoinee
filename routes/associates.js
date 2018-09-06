var express = require('express');
var router = express.Router();
//var LdapAuth = require('ldapauth-fork');
var commonClass = require('./common.js')
var associateModel = require('../models').Associate;
var sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var path = require("path");
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sqlize = new sequelize(config.database, config.username, config.password, config);

router.get('/', function(req, res){
    var associates = [];
    console.log('Get Associates');   
    sqlize.query(`select * from Associates where Active = 1`
    , { type: sequelize.QueryTypes.SELECT}
        ).then(tempassociates => {               
        res.status(200).json(tempassociates);
    });
});


router.get('/:associateid', function(req, res){
    
    console.log('Getting all articleModel');
    sqlize.query(`SELECT * from Associates where Active = 1 
    and AssociateId = ` + req.params.associateid
    , { type: sequelize.QueryTypes.SELECT}
        ).then(associate => {                
        res.status(200).json(associate);
    });
        
    //     .then(survey => {        
    //     res.status(200).json(survey);
    // });  

});

router.post('/add', function(req, res){           
    
    try {    
       
        associateModel.create({
            AssociateId : req.body.AssociateId,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Status_Green : req.body.Status_Green,
            Status_Blue : req.body.Status_Blue,
            Status_Red : req.body.Status_Red,
            Level_1 : req.body.Level_1,
            Level_2 : req.body.Level_2,
            Level_3 : req.body.Level_3,
            Remark: req.body.Remark,
            ProjectAssigned: req.body.ProjectAssigned,
            JoinedDate: req.body.JoinedDate,
            ProjectAssignedDate: req.body.ProjectAssignedDate,  
            Avatar : req.body.Avatar
    }).then(associate => {         
        res.status(200).json({Message: "Record Created Successfully", status:"200"});                
    }).error(err => {
        console.log(err);
        res.status(405).json({Message: "Error has occured", status:"200"});
    });
    } catch (error) {
     res.status(500).json({message : 'Internal Server'});
    }    
    
 });
 
 router.post('/delete', function(req, res){      
    try {
     sqlize.query('Delete from Associates where AssociateId = ' + req.body.AssociateId 
     , { type: sequelize.QueryTypes.DELETE}
         ).then(() => {             
            res.status(200).json({Message: "Deleted Record Successfully", status:"200"});
        });  
    } catch (error) {
     res.status(500).json({message : 'Internal Server'});
    }    
    
 });

module.exports = router;
 
