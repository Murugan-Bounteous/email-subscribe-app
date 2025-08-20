const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // or replace * with your frontend domain
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(req) {
  const { email } = await req.json();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return new Response(JSON.stringify({ message: "Invalid email format" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  return new Response(
    JSON.stringify({ message: "Email submitted successfully" }),
    {
      status: 200,
      headers: corsHeaders,
    }
  );
}

export function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: corsHeaders,
  });
}

// Handle preflight requests (important for CORS)
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
