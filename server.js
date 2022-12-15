const express = require("express");
const app = express();
const port = 8080;
let students = {
  top: {
    version_top: 26,
    students: 10,
    names: [
      "Felipe",
      "Laura",
      "Jailer",
      "Jaime",
      "Juan",
      "Andrés",
      "Nicolas",
      "Carlos",
      "Ivan",
      "Diana",
    ],
  },
};
app.get("/My-first-endpoint", (req, res) => {
  res.status(200).json({
    message: "Curso encontrado satisfactoriamente",
    students: students,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
