const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park("Jurassic Park", 100, dinosaur);
    dinosaur = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('Brontosaurus', 'herbivore', 25);
    dinosaur2 = new Dinosaur('Stegasaurus', 'omnivore', 35);
    dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 100);
    dinosaur4 = new Dinosaur('Velociraptor', 'carnivore', 110);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur();
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur3);
    park.findDinosaurMostVisitors();
    const actual = 100;
    assert.deepStrictEqual(actual, dinosaur3.guestsAttractedPerDay);
  });

  // it('should be able to find all dinosaurs of a particular species', function() {
  //   park.addDinosaur(dinosaur);
  //   park.addDinosaur(dinosaur1);
  //   park.addDinosaur(dinosaur3);
  //   park.addDinosaur(dinosaur4);
  //   park.findDinosaursSameSpecies();
  //   const actual = 2;
  //   assert.deepStrictEqual(actual, [dinosaur3, dinosaur4]);
  // });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur3);
      park.addDinosaur(dinosaur4);
      park.removeDinosaursSameSpecies("Velociraptor");
      const expected = [dinosaur, dinosaur1];
      const actual = park.dinosaurCollection;
      assert.deepStrictEqual(actual, expected);
  });

});

// dinosaur = new Dinosaur('T-Rex', 'carnivore', 50);
// dinosaur1 = new Dinosaur('Brontosaurus', 'herbivore', 25);
// dinosaur2 = new Dinosaur('Stegasaurus', 'omnivore', 35);
// dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 100);
