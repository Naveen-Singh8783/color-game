

exports.getIndex = (req , res, next) => {
    res.render('./index.ejs',{
        pageTitle: "color-game"
    });
}

exports.postIndex = (req, res, next) => {
        req.session.name = req.body.name;
        req.session.first = 0;
        req.session.second = 1;
        req.session.totalpoint = 0;
        req.session.round = 1;
        if(req.session.name){
            return req.session.save(err => {
                res.redirect('/game/round-1');
            }) 
        }else{
            res.redirect('/');
        }
        
}