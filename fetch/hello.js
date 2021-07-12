addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello world nihao", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});
