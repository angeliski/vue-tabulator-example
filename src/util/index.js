import faker from "faker";

export const createList = (size = 5) => {
  const list = [];
  for (let index = 0; index < size; index++) {
    list.push(createItem());
  }
  return list;
};

export const createItem = () => ({
  name: faker.name.firstName(),
  age: faker.random.number({
    min: 10,
    max: 75
  }),
  contactDate: faker.date.past()
});
