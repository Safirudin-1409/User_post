import { IsInt, IsOptional, IsPositive, IsString, Min, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {
    @IsString()
    id : String;

    @IsString()
    userId: string;

    @IsString()
    @MinLength(5)
    title: string;
}