/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from "class-validator";
import { Length } from "class-validator/types/decorator/decorators";

/* eslint-disable prettier/prettier */
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  
  @IsNotEmpty()
  category: string;
}

