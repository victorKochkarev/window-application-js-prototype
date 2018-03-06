class Environment{
    constructor(options){
        this.mainContainer = options.container;

        this.ui = {};
        this.ui.panelList = [];

        this.initUI();
    }

    initUI(){
        this.ui.panelList.push(new ToolPanel({
            domContainer: this.mainContainer,
            size:{
                width:250,
                height:500
            },
            position:{
                left:0,
                top:0
            },
            title:"tools",
            toolList:[
                new LabelToolItem(),
                new ToolItem({name:"Image"}),
                new ToolItem({name:"Some Other Tool"})
            ]
        }));

        this.ui.panelList.push(new Panel({
            domContainer: this.mainContainer,
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
    }
}