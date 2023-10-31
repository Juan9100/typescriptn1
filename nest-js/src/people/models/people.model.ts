import { Column, Model, Table, DataType } from 'sequelize-typescript'

@Table({
  tableName: 'person',
  timestamps: false
})
export class Person extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true
  })
  id: string;

  @Column
	name: string;

  @Column
	middle_name: string;

  @Column
	last_names: string;

  @Column
	age: number;

  @Column
	birthdate: Date;

  @Column
	address: string;

  @Column
	email: string;

  @Column
	phone_number: string;
  
  @Column
	cellphone_number: string;
}
