let mainEnvironment;

let app = {};


app.init = function(){
    mainEnvironment = new Environment({
        container: document.getElementById("mainStage")
    });
};