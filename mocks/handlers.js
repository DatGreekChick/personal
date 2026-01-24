import { http } from 'msw'

export const handlers = [
  http.get('/uses', (req, res, ctx) =>
    res(
      ctx.json([
        {
          title: 'IDE',
          description: 'My IDE of choice',
          items: [{ title: 'JetBrains', link: 'https://www.jetbrains.com/' }],
        },
      ])
    )
  ),
]
