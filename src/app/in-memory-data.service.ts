

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 0, name: 'Mountains of Madness' },
      { id: 11, name: 'Dagon' },
      { id: 12, name: 'The Cats of Ulthar' },
      { id: 13, name: 'The Shadow over Innsmouth' },
      { id: 14, name: 'Azathoth' },
      { id: 15, name: 'The Dunwich Horror' }
    ];
    return { books };
  }
}


