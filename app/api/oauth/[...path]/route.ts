export async function GET(request: Request, { params }: { params: { path: string[] } }) {
  return Response.json({
    message: "OAuth dynamic route",
    path: params.path,
    url: request.url,
  })
}

export async function POST(request: Request, { params }: { params: { path: string[] } }) {
  const body = await request.json().catch(() => ({}))
  return Response.json({
    message: "OAuth dynamic POST",
    path: params.path,
    body,
  })
}
