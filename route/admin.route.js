/** load express js */
const express = require(`express`)

/** create object of express */
const app = express()

/** load obat controller */
const adminController = require(`../controller/admin.controller`)

/** allow route to read urlencoded data */
app.use(express.urlencoded({ extended: true }))


/** create route for access obat's data */
app.get("/", adminController.showDataAdmin)

/** create route for show add obat view */
app.get("/add", adminController.showAddPage)

/** create route for process of add new obat */
app.post("/add", adminController.processInsert)

/** create route for show edit obat view */
app.get("/edit/:id", adminController.showEditPage)
/** :id -> name of paramter URL */

/** create route for process edit obat */
app.post("/edit/:id", adminController.processUpdate)
/** :id -> name of paramter URL */

/** create route for process delete obat */
app.get("/delete/:id", adminController.processDelete)
/** :id -> name of paramter URL */



/** export object "app" to another file */
module.exports = app
