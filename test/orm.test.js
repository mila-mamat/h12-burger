// Get the connection to the database
const orm = require("../config/orm");

describe("testing ORM", () => {
  describe("selectAll ", () => {
    it("select all rows in the burgers table", async () => {
      const data = await orm.selectAll();
      expect(Array.isArray(data)).toBe(true);
    });
  });

  describe("insertOne ", () => {
    it("insert one row into burgers table", async () => {
      const burgerName = "Fancy Burger";
      const { insertId } = await orm.insertOne(burgerName);
      const [{ burger_name }] = await orm.selectOne(insertId);
      expect(burger_name).toBe("Fancy Burger");
    });
  });

  describe("updateOne ", () => {
    it("update a burgers is_ready value to true in burgers table", async () => {
      //insert a new burger whose is_ready value is false by default
      const { insertId } = await orm.insertOne("Big Burger");
      //update is_ready to true
      await orm.updateOne("is_ready", insertId);
      const [{ is_ready }] = await orm.selectOne(insertId);
      expect(is_ready).toBeTruthy();
    });
  });
  describe("updateOne ", () => {
    it("update a burgers is_served value to true in burgers table", async () => {
      //insert a new burger whose is_served value is false by default
      const { insertId } = await orm.insertOne("Big Burger");
      //update is_served to true
      await orm.updateOne("is_served", insertId);
      const [{ is_served }] = await orm.selectOne(insertId);
      expect(is_served).toBeTruthy();
    });
  });
});
