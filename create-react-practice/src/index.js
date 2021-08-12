import fruits from './fruits';
import { choice, remove } from './helpers';

let oneFruit = choice(fruits);
console.log(`I'd like one ${oneFruit}, please`);

console.log(`Here you go: ${oneFruit}`);

console.log('Delicious! May I have another?');

let remaining = remove(fruits, oneFruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);