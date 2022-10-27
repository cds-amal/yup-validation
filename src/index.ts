import { object, string, InferType } from 'yup';
import test from 'tape';

//  /^\$\ ?\d{1,3}(,\d{3})*(\.\d{2})$/
const reg = new RegExp([
  // match $ at beginning
  "^\\$",

  // match optional space
   "\\ ?",
  
   // match 1 to 3 digits
   "\\d{1,3}",
   
   // match 3 digits 0 or more times
   "(,\\d{3})*",
   
   // match . and 2 digits
   "(\\.\\d{2})",
   
   // match EOS
   "$"
].join(''));

const userSchema = object({
  currency: string().required().matches(reg, { excludeEmptyString: true })
});

type Entry = [string, boolean];

const inputs = [
    ["$7,777.77", true], 
    ["$777.77", true], 
    ["$ 777.77", true], 
    ["$7777,777.77", false], 
    ["$777", false], 
    ["$777.7", false], 
    ["$777.", false], 
    ["$7,77.77", false], 
    ["$77,7.77", false], 
    ["$777,.77", false], 
    ["$7,777.777", false], 
    ["$7,777.666", true], 
];


test('Regex tests with regex only', async function (t) {
  t.plan(inputs.length);
  for await (const [input, expected] of inputs) {
    const actual = await userSchema.isValid({currency: input});
    t.equal(actual, expected, `Expected ${expected} for ${input}`);
  }
});
