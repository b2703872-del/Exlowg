export async function POST(request: Request) {
  const { name, email, password } = await request.json()
  console.log("New user:", name, email)
  return Response.json({ success: true, message: "Account created" })
}
