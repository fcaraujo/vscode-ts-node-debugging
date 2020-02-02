import { expect } from 'chai';
import { Person } from '../person';

describe('Person', () => {
  let person: Person;

  beforeEach(() => {
    person = new Person('Bob', 31);
  });

  it('constructor() creates a Person with properties as expected', () => {
    expect(person.name).to.equal('Bob');
    expect(person.age).to.equal(31);
  });

  it('greet() returns a greeting', () => {
    expect(person.getGreeting()).to.equal('Hi Bob');
  });
});
