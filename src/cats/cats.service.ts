import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getAllCats(): any {
    return {
      content: [
        {
          name: 'LLuaretta',
          breed: 'Minks',
        },
        {
          name: 'LLousie',
          breed: 'Phoenix',
        },
      ],
    };
  }
}
