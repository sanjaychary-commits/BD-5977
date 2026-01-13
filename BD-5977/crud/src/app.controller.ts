import { Controller, Get,Post,Body ,Req,Res,Put,Param,Delete,Inject} from '@nestjs/common';
import {Request} from 'express'
import {CreateUserDto} from './createuser.dto';
import {UserStore} from './store/crud.store'

@Controller('/crud')
export class AppController {
  constructor (private Users1:UserStore){
   
  }   

  @Post('/create')
  addUser(@Body() body1:CreateUserDto){
    console.log("ok")
    return this.Users1.addUser(body1)
   
  }

   @Get('/get')
  getUsers(){
     console.log("needed okay")
      return this.Users1.getUsers()
  }


     @Get('/:id')
      getUser(@Param('id') id:number){
          return this.Users1.getUser(id)
  }

  @Put('/:id')
  updateUser(@Param('id') id:number, @Body() data:CreateUserDto){
    return this.Users1.updateUser(id,data)
   
  }

  @Delete('/:id')
  DeleteMan(@Param('id') id:number){
    
    return this.Users1.deleteUser(id)
     

  }
}






















