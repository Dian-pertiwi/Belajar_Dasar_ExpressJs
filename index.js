//import express
import express from "express";

//gunakan import router untuk memanggil modul file routes.js
import Router from "./routes/routes.js";

const app = express();
const port = 3002;

//gunakan Router
app.use(Router);

//mendengarkan data
app.listen(port, () => {
  console.log(`Server ini berjalan di http://localhost: ${port}`);
});
