import { IsString, MinLength } from 'class-validator';


export class CreateSubjectDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    subject: string;

    @IsString()
    content: string
}