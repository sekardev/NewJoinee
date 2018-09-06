var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }).forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.students = require('../models/student.js')(sequelize, Sequelize);  
//db.teachers = require('../models/teacher.js')(sequelize, Sequelize); 
//db.teachers.hasMany(db.students);


//db.SkillCategory.hasOne(db.Training);
//db.SkillCategoryTechnology.hasOne(db.Training);
//db.TrainingType.hasOne(db.Training);
//db.SkillCategory.hasOne(db.SkillCategoryTechnology, { foreignKey: 'SkillCategoryId' });

//Below code will be used to create Foreignkey relationship in training table for column 'SkillCategoryTechnology_Id'
// db.SkillCategoryTechnology.hasOne(db.Training, { foreignKey: 'SkillCategoryTechnologyId' })
// db.SkillCategory.hasOne(db.Training, { foreignKey: 'SkillCategoryId' })
// db.TrainingType.hasOne(db.Training, { foreignKey: 'TrainingTypeId' })
 
module.exports = db;