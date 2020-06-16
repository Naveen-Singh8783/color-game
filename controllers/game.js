const User = require('../models/user');

exports.getGame = (req, res, next) => {
    if(req.session.round === 1){
        const roundn = "Round-1";
        res.render('./game.ejs',{
            round: roundn,
            pageTitle: "round-1"     
        });
    }else if(req.session.round === 2){
        const roundn = "Round-2";
        res.render('./game.ejs',{
            round: roundn,
            pageTitle: "round-2"
            
        });
    }else if(req.session.round === 3){
        const roundn = "Round-3";
        res.render('./game.ejs',{
            round: roundn,
            pageTitle: "round-3"
            
        });
    }else if(req.session.round === 4){
        const roundn = "Round-4";
        res.render('./game.ejs',{
            round: roundn,
            pageTitle: "round-4"
            
        });
    }else if(req.session.round === 5){
        const roundn = "Round-5";
        res.render('./game.ejs',{
            round: roundn,
            pageTitle: "round-5"
            
        });
    }else if(req.session.round === 6){
        const roundn = "Round-6";
        res.render('./game.ejs',{
            round: roundn,
            pageTitle: "round-6"
            
        });
    }else {
        res.render('/404.ejs',{
            pageTitle: "Page Not Found!"
        });
    }
    
}

exports.postGame = (req,res, next) =>{
    const round = req.body.round;
    let check;
    if(req.body.red){
        check = 1;
    }else if(req.body.green){
        check = 2;
    }else if(req.body.yellow){
        check = 3;
    }else if(req.body.white){
        check = 4;
    }else if(req.body.black){
        check = 5;
    }else if(req.body.blue){
        check = 6;
    }else if(req.body.pink){
        check = 7;
    }else if(req.body.violet){
        check = 8;
    }else if(req.body.brown){
        check = 9;
    }else{
        check = 10;
    }


    if(round === 'Round-1'){
        req.session.round = 2;
        if(check === req.session.second){
            req.session.totalpoint = req.session.totalpoint + 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-2');
            })   

        }else{
            req.session.totalpoint = req.session.totalpoint - 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-2');
            }) 

        }   
    }else if(round === 'Round-2'){
        req.session.round = 3;
        if(check === req.session.second){
            req.session.totalpoint = req.session.totalpoint + 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-3');
            })   

        }else{
            req.session.totalpoint = req.session.totalpoint - 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-3');
            }) 

        } 
    }else if(round === 'Round-3'){
        req.session.round = 4;
        if(check === req.session.second){
            req.session.totalpoint = req.session.totalpoint + 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-4');
            })   

        }else{
            req.session.totalpoint = req.session.totalpoint - 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-4');
            }) 

        } 
    }else if(round === 'Round-4'){
        req.session.round = 5;
        if(check === req.session.second){
            req.session.totalpoint = req.session.totalpoint + 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-5');
            })   

        }else{
            req.session.totalpoint = req.session.totalpoint - 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-5');
            }) 

        } 
    }if(round === 'Round-5'){
        req.session.round = 6;
        if(check === req.session.second){
            req.session.totalpoint = req.session.totalpoint + 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-6');
            })   

        }else{
            req.session.totalpoint = req.session.totalpoint - 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/round-6');
            }) 

        } 
    }if(round === 'Round-6'){
        req.session.round = -1;
        if(check === req.session.second){
            req.session.totalpoint = req.session.totalpoint + 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/score');
            })   

        }else{
            req.session.totalpoint = req.session.totalpoint - 10;
            const temp = req.session.first;
            req.session.first = req.session.second;
            req.session.second = req.session.first + temp;
            return req.session.save(err =>{
                console.log(err);
                res.redirect('/game/score');
            }) 

        } 
    }
    
    if(req.session.round === -1){
        res.redirect('/game/score');
    }
    
}

exports.getFinal = (req, res, next) => {
    const Username = req.session.name;
    res.render('./final.ejs',{
        score: req.session.totalpoint,
        pageTitle: "Score",
        Username: Username
    });
}

exports.postFinish = (req, res, next) =>{
    const user = new User({
        name: req.session.name,
        totalpoint: req.session.totalpoint
    })
    return user.save()
    .then(result =>{
        req.session.destroy(err => {
            console.log(err);
            res.render('./thank.ejs',{
                pageTitle: "Thank You!"
            });
          });

    })
    .catch(err => console.log(err));
    
}

exports.postPlayAgain = (req, res, next) =>{
    req.session.round = 1;
    req.session.first = 0;
    req.session.second = 1;
    req.session.totalpoint = 0;
    return req.session.save(err => {
        console.log(err);
        res.redirect('./game/round-1');
    })
}

