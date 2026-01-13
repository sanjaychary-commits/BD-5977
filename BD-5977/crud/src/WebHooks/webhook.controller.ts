import { Controller, Post, Get, Body,Put,Param,Delete} from '@nestjs/common';



@Controller('webhook')
export class WebhookController {
//   constructor(private userService: UserService,) {}

  @Post()
  create(@Body() body1:any) {
    console.log("sucessfull", body1)
    return( "sucessfull connected")
  }

   
}
