import { serve } from "https://deno.land/std@0.76.0/http/server.ts";

const server = serve({port: 3000});

for await (const req of server) {
    req.respond({body: "Hello World from Deno"});
}