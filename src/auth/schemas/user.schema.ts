import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ unique: true, required: true })
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
