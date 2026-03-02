import { IsArray, IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateUserDto {
    
    id : string;

    @IsString()
    @MinLength(2)
    username: string;
}
