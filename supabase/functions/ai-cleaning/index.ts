import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const openAiKey = Deno.env.get("OPENAI_API_KEY");

function buildStubResponse(input: string) {
  return {
    draft: {
      description: input,
      amount: 120000,
      type: "OUT",
      channel: "Cash",
      category: "Tiếp khách",
      project: "Brand A",
      resp_wallet: "Ví vận hành"
    },
    missing_fields: ["receipt"],
    next_step: "ask_missing_question",
    confidence: {
      clean: 0.7
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

  return Response.json(buildStubResponse(input ?? ""));
});
