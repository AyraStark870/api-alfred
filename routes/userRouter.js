const { request, response } = require("express");
const express = require("express");

const router = express.Router();


router.get("/", (request, response) => {


});


router.get("/:id", (request, response, next) => {
  try {

     const { id } = request.params;
   // users.forEach(x=>console.log(x))
    // const user = users.filter( x => x.id ===id)
  // console.log(user);
    //   id,
    //   name: "Product 1",
    //   price: 1000,
    // });
  } catch (error) {
    next(error);
  }
});

router.post("/", (request, response) => {
  const body = request.body;

  // Logica del negocio

  response.status(201).json({
    ok: true,
    message: "Created successfully",
    payload: {
      body,
    },
  });
});

router.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { firstName, lastName } = request.body;

  if (id == 99) {
    response.status(404).json({
      ok: false,
      message: "Product not found",
    });
  } else {
    response.status(201).json({
      ok: true,
      message: `Product ${id} updated successfully`
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // Logica para eliminar
  res.status(202).json({
    ok: true,
    message: `Product ${id} deleted successfully`,
  });
});

module.exports = router;
