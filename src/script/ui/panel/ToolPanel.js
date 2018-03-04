class ToolPanel extends Panel{
    constructor(options){
        super(options);
        this.toolList = options.toolList;

        this.renderToolPanel();
    }

    renderToolPanel(){
        for(let i = 0; i < this.toolList.length; i++){
            let toolItem = this.toolList[i];
            this.renderToolItem(toolItem, i);
        }
    }

    renderToolItem(toolItem, position){
        let panelItem = document.createElement("div");
        panelItem.className = "panelToolItem";
        panelItem.style.top = position * 75 + 40 + "px";
        panelItem.innerHTML = toolItem.name;
        this.dom.panel.appendChild(panelItem);
    }

    refresh(){
        super.refresh();
    }
}