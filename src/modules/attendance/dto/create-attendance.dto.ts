import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateAttendanceDto {

    @Type(() => Number)
    @IsInt()
    employeeId: number;

    @IsString()
    @IsNotEmpty()
    photo: string;
}
