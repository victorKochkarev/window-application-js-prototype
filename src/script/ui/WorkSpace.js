class WorkSpace {
    constructor(options){
        console.log("I am alive");
        this.size = options.size;
        this.dom = {};
        this.dom.container = options.domContainer;
        this.initMainPanel();
        this.refresh();
    }

    initMainPanel(){
        this.dom.panel = document.createElement("div");
        this.dom.panel.className = "workspace";
        this.dom.container.appendChild(this.dom.panel);
    }

    refreshSizeAndPosition(){
        this.dom.panel.style.width = this.size.width + "px";
        this.dom.panel.style.height = this.size.height + "px";

        this.dom.panel.style.top = Math.floor((this.dom.container.clientHeight - this.size.height) / 2) + "px";
        this.dom.panel.style.left = Math.floor((this.dom.container.clientWidth - this.size.width) / 2) + "px";
    }

    refresh(){
        this.refreshSizeAndPosition();
    }
}