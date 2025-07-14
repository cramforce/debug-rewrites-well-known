export async function GET(request: Request, { params }: { params: { path: string[] } }) {
  return Response.json({
    message: "Well-known OAuth server dynamic route",
    path: params.path,
  })
}
