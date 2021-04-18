const object = {
  key1: 'A',
  key2: 'B',
};

object.key3 = 'C';

const objectB: {
  key1: string;
  readonly key2: string;
  key3?: string;
  [key: string]: unknown; // index signature
} = {
  key1: 'A',
  key2: 'B',
};

objectB.key3 = 'C';
objectB.key2 = 'D'; // readonly
