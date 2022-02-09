import { rest } from "msw";

export const handlers = [
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(ctx.json({ value: value + 2 }));
  }),
  rest.get("/login", async (req, res, ctx) => {
    // const { username } = req.body;
    return res(ctx.json({ id: "213", firstName: "Jeongmu", lastName: "Park" }));
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");

      return res(
        ctx.json({
          data: {
            people: [
              {
                name: id,
                age: 135,
              },
              {
                name: "timmy",
                age: 13,
              },
              {
                name: "cindy",
                age: 15,
              },
              {
                name: "judy",
                age: 25,
              },
              {
                name: "marry",
                age: 64,
              },
              {
                name: "tommy",
                age: 109,
              },
            ],
          },
        })
      );
    }
  ),
];
