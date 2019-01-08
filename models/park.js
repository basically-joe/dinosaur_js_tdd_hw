const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
  return this.dinosaurCollection;
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurCollection.pop();
  return this.dinosaurCollection;
};

Park.prototype.findDinosaurMostVisitors = function () {
  return Math.max.apply( null, this.dinosaurCollection.guestsAttractedPerDay );
};

module.exports = Park;
