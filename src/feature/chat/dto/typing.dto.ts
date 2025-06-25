import { IsString } from 'class-validator';

export class TypingDto {
  @IsString()
  conversationId!: string;

  @IsString()
  customerId!: string;
}
