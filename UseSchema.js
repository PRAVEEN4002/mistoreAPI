var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    UserName:String,
    GoogleId:Number,
    Name:String,
    Model:String,
    Color:String,
    Price:Number,
    Image:String,
    Quantity:Number,
})

 mongoose.model('Cart',UserSchema);
 module.exports=mongoose.model('Cart');