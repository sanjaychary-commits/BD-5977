import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebHook } from './webhook.entity';

@Injectable()
export class webhookService {
  constructor(
    @InjectRepository(WebHook)
    private userRepo: Repository<WebHook>,

    //    @InjectRepository(User)
    // private payment: Repository<User>,

    //    @InjectRepository(User)
    // private orderRepo: Repository<User>,
  ) {
  }

  async create(data:any) {
      let  Response1=data[0]
     let response=await this.userRepo.save(Response1)
     console.log(response)
  }

//     update(data:any,id:any) {
//     return this.userRepo.update(data,id);
//   }

//     delete(id:any) {
//     return this.userRepo.delete(id);
//   }

//   findOne(id:any){
//     return this.userRepo.findOne(id)
//   }

//   findAll() {
//     return this.userRepo.find();
//   }
}
