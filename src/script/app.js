let app = {};
app.ui = {};


app.init = function(){
    app.initUI();
};

app.initUI = function () {
    let mainStage = document.getElementById("mainStage");
    app.ui.panelList = [];
    app.ui.panelList.push(new ToolPanel({
       domContainer: mainStage,
       size:{
           width:250,
           height:500
       },
       position:{
           left:0,
           top:0
       },
       title:"tools"
    }));

    app.ui.panelList.push(new Panel({
        domContainer: mainStage,
        size:{
            width:250,
            height:500
        },
        position:{
            left:0,
            top:500
        },
        title:"properties"
    }));
};