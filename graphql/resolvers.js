const people = [
  {
    name: "chang",
    age: 29,
    gender: "male",
  },
  {
    name: "ezdar",
    age: 29,
    gender: "male",
  },
  {
    name: "yun",
    age: 29,
    gender: "male",
  },
  {
    name: "kkuseok",
    age: 29,
    gender: "male",
  },
  {
    name: "hadae",
    age: 29,
    gender: "male",
  },
];

const resolvers = {
  Query: {
    people: () => people,
  },
};

export default resolvers;
