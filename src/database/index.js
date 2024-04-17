/// CRIANDO A CONEXÃO DO MODEL COM O BANCO 

import  Sequelize  from 'sequelize';
import mongoose from 'mongoose'

// import configDatabase from '../config/database'

import User from '../app/models/User.js'
import Product from '../app/models/Product.js'
import Category from '../app/models/Category.js'

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(// configDatabase
        'postgresql://postgres:AhxGRwQdvyRyiHQCJgesgchrAXMyUUiK@roundhouse.proxy.rlwy.net:28059/railway'
        )
        models.map((model) => model.init(this.connection))
            .map(
                model => model.associate && model.associate(this.connection.models)
            )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:LBPAQhROaEOXgeokfOAuPzKIBMgkaCds@monorail.proxy.rlwy.net:38120'
            // 'mongodb://localhost:27017/codeburger',
            
        )
    }
}

export default new Database()