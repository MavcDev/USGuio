
angular.module('data.services', [])

.factory('Proveedor', function($cordovaSQLite) {
	
	return {
		all: function() {
			var list = [];
			var query = "SELECT codigo_proveedor, nombre_proveedor, telefono, direccion FROM proveedor";
			$cordovaSQLite.execute(db, query, []).then(function(res) {
	       		if(res.rows.length > 0) {
	       			for(i =0;i < res.rows.length;i++){
	       				list.push({codigo: res.rows.item(i).codigo_proveedor, nombre: res.rows.item(i).nombre_proveedor,telefono: res.rows.item(i).telefono , direccion: res.rows.item(i).direccion}); 
	       			}	       			
	       		} 
	       	}, function (err) {
	       		console.error(err);
	       	});
			return list;
		},
		update: function() {
			chats.splice(chats.indexOf(chat), 1);
		},
		insert: function(){
			return 0;
		},
		get: function(chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		}		
	}
})
