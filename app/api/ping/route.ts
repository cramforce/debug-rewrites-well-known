export async function GET() {
  return Response.json({
    message: "Ping successful",
    timestamp: new Date().toISOString(),
  })
}
