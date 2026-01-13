import { Controller, Get,Post,Body ,Req,Res,Put,Param,Delete,Injectable} from '@nestjs/common';
import {Request} from 'express'
import {CreateUserDto} from '../createuser.dto';


@Injectable()
export class UserStore {

   private Users: CreateUserDto[] = [];
   

  addUser( body1:CreateUserDto){
    console.log(body1)
    this.Users.push(body1)
    return {
      "Users":this.Users
    }
  }

  getUsers(){
      return this.Users
  }


  getUser( id:number){
      const data=this.Users.filter((data)=>+data.id==+id)
      return data
  }

  updateUser(id:number,data:CreateUserDto){
      console.log(this.Users,"users")
      console.log(data)
      const newDataIndex=this.Users.findIndex((data)=> +data.id== +id)
      this.Users[newDataIndex]=data
      return{
        "id":this.Users
      }
  }


  deleteUser(id:number){
      this.Users=this.Users.filter((data)=>+data.id !== +id)
      return{
        "data":this.Users
      }

  }
}