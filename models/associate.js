module.exports = function(sequelize, Sequalize) {
    var customerSchema = sequelize.define("Associate", {
        AssociateId : Sequalize.INTEGER,
        FirstName: Sequalize.STRING,
        LastName: Sequalize.STRING,
        Email: Sequalize.STRING,
        Status_Green : Sequalize.INTEGER,
        Status_Blue : Sequalize.INTEGER,
        Status_Red : Sequalize.INTEGER,
        Level_1 : Sequalize.INTEGER,
        Level_2 : Sequalize.INTEGER,
        Level_3 : Sequalize.INTEGER,
        Remark: Sequalize.STRING,
        ProjectAssigned: Sequalize.STRING,
        JoinedDate: Sequalize.STRING,
        ProjectAssignedDate: Sequalize.STRING,  
        Avatar : Sequalize.STRING,
        Active : Sequalize.INTEGER
    },{
        timestamps: false
    });
    return customerSchema;
}