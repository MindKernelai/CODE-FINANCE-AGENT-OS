import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const openAiKey = Deno.env.get("OPENAI_API_KEY");

function buildStubResponse(input: string) {
  return {
    draft: {
      description: input,
      amount: 350000,
      type: "OUT",
      channel: "MB Bank",
      category: "Vận hành",
      project: "Brand A",
      resp_wallet: "Ví vận hành"
    },
    missing_fields: ["receipt"],
    next_step: "confirm_or_edit",
    confidence: {
      parse: 0.82,
      match: 0.4
    }
  };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { input } = await req.json().catch(() => ({ input: "" }));

  if (!openAiKey) {
    return Response.json(buildStubResponse(input ?? ""));
  }

  // Placeholder for OpenAI integration.
  return Response.json(buildStubResponse(input ?? ""));
});
