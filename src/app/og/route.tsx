import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') ?? "Sixian's floating thoughts"
    const lang = searchParams.get('lang') ?? 'en-US'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: `url(https://sixian.li/og-bg.png)`,
          }}
        >
          <div
            lang={lang}
            style={{
              margin: '85px 120px 230px 80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              fontSize: 64,
              letterSpacing: '-0.05em',
              lineHeight: '120px',
              whiteSpace: 'pre-wrap',
              color: '#262626',
              fontWeight: 'bold',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
