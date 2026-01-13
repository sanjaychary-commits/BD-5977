import { IsNotEmpty, IsEmail , IsInt,Min, Max,IsString} from 'class-validator';

export class CreateUserDto {

    //  @IsInt()
    //   id: number;
  
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
}
