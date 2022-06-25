const http = require("http");

const handleRequest = (request, response) => {
  //   if (request.method === "POST") {
  //     response.writeHead(400);
  //     return response.end("Sorry tidak melayani request POST");
  //   }

  //   if (request.method === "GET") {
  //     return response.end("Response HTTP Menggunakan GET");
  //   }

  //   if (request.method === "PUT") {
  //     return response.end("Response HTTP Menggunakan PUT");
  //   }

  //   if (request.method === "DELETE") {
  //     return response.end("Response HTTP Menggunakan DELETE");
  //   }

  //   return response.end("Method tidak diketahui!");

  const dataSiswa = {
    nama: "Enrico",
    kelas: "Gold Binar",
  };
  response.writeHead(200, { "Content-Type": "aplication/json" });
  return response.end(JSON.stringify(dataSiswa));
};

http.createServer(handleRequest).listen(3000);
