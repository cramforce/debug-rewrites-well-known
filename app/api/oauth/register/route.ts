export async function GET() {
  return Response.json({
    message: "OAuth register endpoint",
    path: "/api/oauth/register",
  })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  return Response.json({
    message: "OAuth register POST",
    body,
  })
}
