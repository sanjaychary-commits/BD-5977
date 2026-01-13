import { Controller, Post, Get, Body,Put,Param,Delete} from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from './validation.dto'
import { UpdateUserDto } from './update.dto';
// import { UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/auth/auth.decorator';

// this process is Guard
// @UseGuards(AuthGuard('jwt'))
@Auth()
@Controller('users')
export class UserController {
  constructor(private userService: UserService,) {}

  @Post()
  create(@Body() body:CreateUserDto) {
    return this.userService.create(body);
  }

   @Put('/:id')
  update(@Body() body:UpdateUserDto , @Param('id') id:number ) {
    return this.userService.update(id,body);
  }

     @Delete('/:id')
  delete( @Param('id') id:number ) {
    return this.userService.delete(id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }


  @Get('/:id')
  findOne(@Param('id') id:number) {
    return this.userService.findAll();
  }
}
