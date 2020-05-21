const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

require ('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const promoSchema = new Schema({
	name : {
		type : String ,
		required : true
	},
	image :{
		type :String ,
		required :true
	},
	label :{
		type : String,
		default : ''
	},
	price :{
		type : Currency,
		min: 0,
		required : true
	},
	description :{
		type :String,
		required : true
	},
	featured :
	{
		type : Boolean,
		default : false
	}
});


var Promos = mongoose.model('Promo',promoSchema);

module.exports = Promos;