// load model apoteker
const adminModel = require(`../model/admin.model`)

// load crypt
const crypt = require(`../crypt`)
const { request, response } = require("express")

// function untuk menampilkan halaman login
exports.showLogin = (request, response) => {
    try {
        return response.render(`../view/pages/login`)
    } catch (error) {
        let sendData = {
            message: error
        }
        return response.render(`../view/error-page`, sendData)
    }
}

// function untuk proses authentication
exports.authentication = async (request, response) => {
    try {
        // menampung data username & password 
        let username = request.body.username
        let password = request.body.password
        

        // check kecocokan username
        let result = await adminModel.findByCriteria({username: username})

        // cek keberadaan data apoteker
        if(result.length > 0) {
            // mengecek kecocokan passwordnya
            // 123 === deskripsi (nksxnkjkncdjnjvnj)
            console.log(`${password} === ${crypt.deskripsi(result[0].password)}`);
            if (password === crypt.deskripsi(result[0].password)) {
                // login berhasil
                /**menyimpan data useer ke session */

                /**`userData` = label of session */
                request.session.dataUser = result[0]
                

                /**definisi cart di session */
                request.session.cart = []

                return response.redirect(`/telur`)
            } else {
                // login gagal
                return response.redirect(`/auth`)
            }
        } else {
            // data apoteker tidak ada
            return response.redirect(`auth`)
        }

    } catch (error) {
        let sendData = {
            message: error
        }
        return response.render(`../view/error-page`, sendData)
    }
}

/**membuat function utk logout */
exports.logout = async (request,response) => {
    try {
        /**menghapus data user dari session */
        request.session.userData = undefined


        /**kembali ke halaman login */
        return response.redirect(`/auth`)
    } catch (error) {
        let sendData = {
            message: error
        }
        return response.render(`../view/error-page`, sendData)
        
    }
}



