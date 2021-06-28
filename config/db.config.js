module.exports = {

    HOST: process.env.HOST,
    
    USER: process.env.CAPPE_USERNAME,
    
    PASSWORD: process.env.PASSWORD,
    
    DB: process.env.DB,
    
    dialect: "mysql",
    
    pool: {
    
    max: 5,
    
    min: 0,
    
    acquire: 30000,
    
    idle: 10000
    
    }
    
    };