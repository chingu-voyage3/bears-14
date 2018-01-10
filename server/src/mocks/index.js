const faker = require('faker');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Event = mongoose.model('Event');

const USER_TOTAL = 3;
const EVENT_TOTAL = 3;

module.exports =  async () => {
  try {
    await User.remove();
    await Event.remove();

    await Array.from({ length: USER_TOTAL }).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        googleId: faker.random.uuid(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email()
      });

      await Array.from({ length: EVENT_TOTAL }).forEach(async () => {
        await Event.create({
          name: faker.lorem.words(4),
          description: faker.lorem.sentence(),
          date: faker.date.future(),
          location: {
            coordinates: [faker.address.longitude(), faker.address.latitude()],
            address: faker.address.streetAddress()
          },
          createdBy: user._id,
          volunteers: [user._id]
        });
      });
    })
  } catch (err) {
    throw err;
  }
}
