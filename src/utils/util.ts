import { BadRequestException } from '@nestjs/common';
import { ObjectId } from 'mongodb';

export function toObjectId(id: string): ObjectId {
  if (!ObjectId.isValid(id)) {
    throw new BadRequestException(`Invalid ID format: ${id}`);
  }
  return new ObjectId(id);
}
