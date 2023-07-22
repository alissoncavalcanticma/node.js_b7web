import { Request, Response } from 'express';

import { Product } from '../models/Product';

import { User } from '../models/User';

//habilita o uso de operadores AND e OR
import { Op } from 'sequelize';

//Não precisa  da instancia do sequelize_mysql, á está presente no Models/User
//import { sequelize_mysql } from '../instances/mysql';

export const home = async (req: Request, res: Response)=>{
    //busca nomf com operador like
    //let searchName: string = 'Al' -- vide seção de operador like abaixo

    let users = await User.findAll({
        //attributes: [['name', 'nome'], ['age', 'idade'], exclude:['id']],
        //SELECT `name` AS `nome`, `age` AS `idade` FROM `users` AS `User` WHERE `User`.`age` = 33;
        
        //Usando Operador OR e AND
        /*
        where: {
            age: {
                [Op.or]: [30, 55]
            },
            name: {
                [Op.and]: ['Alisson']
            }
        }
        */
        //Usando Operadores <>=!
        /*
        where: {
            age: {
                [Op.gt]:        [30]       // age >  30
              //[Op.gte]:       [30]       // age >= 30
              //[Op.lt]:        [30]       // age <  30
              //[Op.lte]:       [30]       // age <= 30
              //[Op.between]:   [30, 40]   // age between 30 and 40
              //[Op.notBetween]:[30, 40]   // age between 30 and 40
              //[Op.in]:        [30, 40]   // age IN(30,40)
              //[Op.notIn]:     [30, 40]   // age NOT IN(30,40)
            },
            name: {
                [Op.and]:       ['Alisson']
                //[Op.like]:    'Al%'   // name LIKE 'AL%'
                //[Op.like]:    '%${searchName}%'   // name LIKE '%Al%'
            }
        }
        */
        attributes: ['name', 'age'],
        where: {age: 33}
    });

    console.log(JSON.stringify(users));
    /*
    TRECHO PARA TESTE DE CONEXÃO DAS INSTANCIAS
    */
   /*
    try{
        await sequelize_mysql.authenticate();
        console.log("Connection mysql success!");
    }catch(error){
        console.log("Connection mysql error: ", error);
    }
    */
    /*
    try{
        await sequelize_pg.authenticate();
        console.log("Connection pg success!");
    }catch(error){
        console.log("Connection pg error: ", error);
    }
    */

    
    
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};