import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {
    
    @IsString()
    @IsNotEmpty()
    nip: string;

    @IsString()
    @IsNotEmpty()
    fullName: string;
    
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    department: string;
    
    @IsString()
    @IsNotEmpty()   
    position: string;
}
