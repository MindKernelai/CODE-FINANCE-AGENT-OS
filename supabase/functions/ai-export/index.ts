import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const openAiKey = Deno.env.get("OPENAI_API_KEY");

function buildStubResponse() {
  return {
    draft: {
      export_type: "CLEAN",
      template: "MISA",
      filters: {
        month: "2024-07"
      }
    },
    missing_fields: [],
    next_step: "confirm_export",
    confidence: {
      export: 0.9
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
