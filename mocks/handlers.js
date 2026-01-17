import { rest } from 'msw'

export const handlers = [
  // Example handler for uses data
  rest.get('/uses', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title: 'IDE',
          description: 'My IDE of choice',
          items: [{ title: 'JetBrains', link: 'https://www.jetbrains.com/' }],
        },
      ])
    )
  }),
]
