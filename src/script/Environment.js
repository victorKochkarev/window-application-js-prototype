class Environment{
    constructor(options){
        this.mainContainer = options.container;

        this.ui = {};
        this.ui.panelList = [];

        this.initUI();
    }

    addPanel(panel){
        this.ui.panelList.push(panel);
    }

    initUI(){
        this.addPanel(new ToolPanel({
            domContainer: this.mainContainer,
            size:new Size({
                width:250,
                height:500
            }),
            position:new Position({
                left:0,
                top:0
            }),
            title:"tools",
            toolList:[
                new LabelToolItem(),
                new ToolItem({name:"Image"}),
                new ToolItem({name:"Some Other Tool"})
            ]
        }));

        this.addPanel(new Panel({
            domContainer: this.mainContainer,
            size:new Size({
                width:250,
                height:500
            }),
            position:new Position({
                left:0,
                top:500
            }),
            title:"properties"
        }));

        this.ui.workspace = new WorkSpace({
            domContainer: this.mainContainer,
            size: new Size({
                width:300,
                height:300
            })
        });
    }
}