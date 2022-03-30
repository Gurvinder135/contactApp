const express = require("express");
const router = express.Router();

const {
  addContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controller/controller");

router.post("/addcontact", addContact);
router.post("/updatecontact:id", updateContact);
router.delete("/:phonenumber", deleteContact);
router.get("/", getContact);

module.exports = router;
