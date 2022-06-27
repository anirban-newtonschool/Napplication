const { nextTick } = require("process");

const auth={
    signIn:function(req,res,next){

        console.log("sign in ");
        next()

    },
    verify:function(){


    }
}

module.exports=auth