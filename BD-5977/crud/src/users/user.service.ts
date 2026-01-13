import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    //    @InjectRepository(User)
    // private payment: Repository<User>,

    //    @InjectRepository(User)
    // private orderRepo: Repository<User>,
  ) {
  }

  create(data:any) {
    return this.userRepo.save(data);
  }

    update(data:any,id:any) {
    return this.userRepo.update(data,id);
  }

    delete(id:any) {
    return this.userRepo.delete(id);
  }

  findOne(id:any){
    return this.userRepo.findOne(id)
  }

  findAll() {
    return this.userRepo.find();
  }
}
