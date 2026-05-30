const mangoose = require('mangoose');

const MenuItemSchema = new mangoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:fault
    },
    ingrediends:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;