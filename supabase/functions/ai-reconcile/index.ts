import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const openAiKey = Deno.env.get("OPENAI_API_KEY");

function buildStubResponse() {
  return {
    draft: {
      matched_txn_id: null,
      match_confidence: 0.88
    },
    missing_fields: [],
    next_step: "show_candidates",
    confidence: {
      reconcile: 0.88
    }
  };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!openAiKey) {
    return Response.json(buildStubResponse());
  }

  return Response.json(buildStubResponse());
});
