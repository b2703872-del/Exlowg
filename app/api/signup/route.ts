export async function POST(request: Request) {
  const { name, email, password } = await request.json()
  
  // For now we go use localStorage. Later we go use real database like Supabase
  // This API just returns success
  console.log("New user:", name, email)
  
  return Response.json({ success: true, message: "Account created" })
    }
