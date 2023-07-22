import { Model, DataTypes } from 'sequelize';
import { sequelize_mysql } from '../instances/mysql';

//Usa interface e não type, devido a necessidade de extender a class Model do sequelize
//Vai usar a class Model sempre que usar BD
export interface UserInstance extends Model {
    id: number,
    name: string,
    age: number
}
export const User = sequelize_mysql.define<UserInstance>("User", {
    id: { 
        primaryKey: true,
        type: DataTypes.INTEGER
     },
     name: {
        type: DataTypes.STRING
     },
     age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
     }
}, {
    tableName: 'users',
    // Usa timestamps = true apenas se houver criado os campos de timestamp "createdAt" e "updatedAt"
    timestamps: false
});