import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '123543543',
    email: 'emailmock@emali.com',
    id: 43242,
    name: 'nameMock',
    password: '$2b$10$S62WmVpIxL52Z.0y22DWfuaAz8.XUNESChWP.AlMFZnOJ9n9uiqi.',
    phone: '321532523532',
    typeUser: UserType.User,
    updated_at: new Date(),
    created_at: new Date(),
  };