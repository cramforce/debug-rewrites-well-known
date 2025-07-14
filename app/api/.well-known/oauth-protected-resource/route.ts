export async function GET() {
  return Response.json({
    resource: "protected-resource",
    authorization_servers: ["https://your-domain.com"],
  })
}
