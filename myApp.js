require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

//   kittySchema.methods.speak = function () {

//   const greeting = this.name

//     ? "Meow name is " + this.name

//     : "I don't have a name";

//   console.log(greeting);

// }

//   const Kitten = mongoose.model('Kitten', kittySchema)

//   const silence = new Kitten({name:'Silence'})

//   const fluffy = new Kitten({name:'Fluffy'})

// ​

//   fluffy.save((err,fluffy)=>{

//     if(err) return console.error(err)

//     fluffy.speak()

//   })

// ​

//   silence.save((err,silence)=>{

//     if(err) return console.error(err)

//     silence.speak()

//   })

// ​

// ​

// Kitten.find({ name: /^Fluffy/ }, function (err, kittens) {

//   if (err) return console.error(err);

//   console.log(kittens);

// });

// ​

const createAndSavePerson = (done) => {
  const Person1 = new Person({
    name: "Salman",
    age: 22,
    favoriteFoods: ["Pizza", "Tacos"],
  });
  Person1.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};
const arrayOfPeople = [
  { name: "John", age: 15, favoriteFoods: ["Rice", "Curry"] },
  { name: "David", age: 12, favoriteFoods: ["Eggs", "Mushroom"] },
  { name: "Mike", age: 56, favoriteFoods: ["Beetroot", "Tacos"] },
  { name: "Peter", age: 34, favoriteFoods: ["Cheese", "Chicken"] },
  { name: "Joe", age: 25, favoriteFoods: ["Pizza", "Beef"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
