/**fungsi authorization */
exports.cekUser = (request, response, next) => {
    /**fungsi ini digunakan untuk 
     * mengecek data user 
     * yang tersimpan di session
     * jika datanya tersimpan di session, maka boleh utk 
     * mengakses fitur  yg diinginkan
     * 
     * jika data tdk tersimpah 
     * di session maka akan 
     * kembali ke halaman login */

    if(request.session.dataUser === undefined){
        return response.redirect (`/auth`)
    } else{
        //*lanjut ke fitur yg diinginkan
        next()
    }
}