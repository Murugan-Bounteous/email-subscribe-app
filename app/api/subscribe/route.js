export async function POST(req) {
  const { email } = await req.json();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return new Response(JSON.stringify({ message: "Invalid email format" }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ message: "Email submitted successfully" }), {
    status: 200,
  });
}

export function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
  });
}
