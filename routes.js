'use strict';

module.exports = function(app){
    var RouteToIndex = require('./controller/index');
    var RouteToKota = require('./controller/MasterKota_controller');

    app.route('/').get(RouteToIndex.index);
    
    //KOTA
    app.route('/kota').get(RouteToKota.Kota);
    app.route('/tambahKota').post(RouteToKota.tambahKota);
    app.route('/kota/:idkota').get(RouteToKota.detKota);
    app.route('/kota/').put(RouteToKota.editKota);
    app.route('/kota/').delete(RouteToKota.hapusKota);
    

}