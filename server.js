/** load library express */
const express = require(`express`)

/** instance "app" object */
const app = express()

/** define port for the server */
const PORT = `1000`

/** set view engine to ejs */
app.set(`view engine`, `ejs`)

/**load library express-session */
const session = require(`express-session`)

/**session config */
app.use(session({
    secret:`Ikan Bakar`,
    resave:false,
    saveUninitialized: false

}))


/** load routes */
const telur = require(`./route/telur.route`)
const pack = require(`./route/pack.route`)
const member = require(`./route/member.route`)
const admin = require(`./route/admin.route`)
const auth = require(`./route/auth.route`)
const transaksi = require(`./route/transaksi.route`)
const cart = require(`./route/cart.route`)
/** define prefix for route obat */
app.use(`/telur`, telur)
app.use(`/pack`, pack)
app.use(`/member`,member)
app.use(`/admin`,admin)
app.use(`/transaksi` , transaksi)
app.use(`/cart`, cart)




/** running web server based on defined PORT */
app.listen(PORT, () => {
    console.log(`Server Jualan Telur mu Berjalan Di Port ${PORT}`);
})


/**define prefix for route auth */
app.use(`/auth`, auth)