import { getUser, getActiveUser } from "../../test-base/05-functions";

describe("test on 05-functions", () => {
  test("getUser must return an object ", () => {
    const userTest = {
      uid: "12345",
      nameUser: "dave",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getActiveUser must return an object with an argument", () => {
   const name = 'dave'
   const user = getActiveUser(name)
   expect(user).toEqual({
        uid:'1234567',
        username:name
   })
  });
});
