export async function GET() {
  return Response.json({
    issuer: "https://your-domain.com",
    authorization_endpoint: "https://your-domain.com/oauth/authorize",
    token_endpoint: "https://your-domain.com/oauth/token",
    // Add other OAuth server metadata
  })
}
