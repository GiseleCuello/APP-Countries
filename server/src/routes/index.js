const { Router } = require("express");
const postApiCountries = require("../../Controllers/postApiCountries");
const getCountries = require("../../Controllers/getCountries");
const getCountryById = require("../../Controllers/getCountryById");
const getCountryByName = require("../../Controllers/getCountryByName");
const createActivity = require("../../Controllers/postActivity");
const getActivities = require("../../Controllers/getActivities");

const router = Router();

router.post("/", postApiCountries);
router.get("/", getCountries);
router.post("/activity", createActivity);
router.get("/activity", getActivities);
router.get("/name", getCountryByName);
router.get("/:id", getCountryById);

module.exports = router;
