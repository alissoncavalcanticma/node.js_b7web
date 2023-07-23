import { Request, Response } from 'express';
import { User } from '../models/User';
import { randomInt } from 'crypto';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const usersCreate = async (req: Request, res: Response) => {
    let nameReq = req.body.name as String;
    let ageReq = req.body.age as Number;
    
    //Usando create
    /*     
        await User.create({
            name:   nameReq,
            age:    ageReq
        }); 
     */
    
    //Usando findOrCreate
    const [user, created] = await User.findOrCreate({
        where:{
            name: nameReq as String
        },
        defaults:{
            //id:     randomInt(2,60), // Se estiver definido autoIncrement: true no model, não precisa
            //name:   nameReq, //Se não esepcificar, ele pega o valor da requisição, nameReq no caso
            age:    ageReq
        }
    });


    //res.render('pages/home');
    res.redirect('/');
}

export const addAge = async (req: Request, res: Response) => {
    let idReq = req.params.id;
    console.log(idReq);
    //Start Usando findOne
        /* 
            let user = await User.findOne({
            attributes: ['id', 'age'],
            where:{
                id: idReq
            }
            }); 
        */
    //End Usando findOne
    //Start Usando findByPK
            let user = await User.findByPk(idReq);
    //End Usando findByPK
        //console.log(user)
        let age = user?.age as number;
        age++;
        await user?.update({age: age}, {where:{id: user.id}})
        console.log(user);
    
    
    res.redirect('/');
}

export const subtractAge = async (req: Request, res: Response) => {
    let idReq = req.params.id;
    //Usando findAll
    let users = await User.findAll({
        attributes: ['id', 'age'],
        where: {id: idReq}
    });

    if(users.length > 0){
        let user = users[0];
        user.age--;

        await user.save();
    }
    res.redirect('/');
};

export const deleteUser = async (req: Request, res: Response) => {
    let idReq = req.params.id;

    await User.destroy({
        where: {
            id: idReq
        }
    });
    res.redirect('/');
};
