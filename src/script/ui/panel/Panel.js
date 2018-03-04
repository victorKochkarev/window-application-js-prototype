class Panel{
    constructor(options){
        this.dom = {};
        this.dom.container = options.domContainer;
        this.size = options.size;
        this.position = options.position;
        this.title = options.title;
        this.initMainPanel();
        this.initHeader(options.title);

        this.refresh();
    }

    initMainPanel(){
        this.dom.panel = document.createElement("div");
        this.dom.panel.className = "panel";
        this.dom.container.appendChild(this.dom.panel);
    }

    initHeader(){
        this.dom.header = document.createElement("div");
        this.dom.header.className = "panelHeader";
        this.dom.header.addEventListener("click", (e) => {
            alert(this.title);
        });
        this.dom.title = document.createElement("div");
        this.dom.title.className = "panelHeaderTitle";
        this.dom.panel.appendChild(this.dom.title);
        this.dom.panel.appendChild(this.dom.header);
    }

    refreshSizeAndPosition(){
        this.dom.panel.style.width = this.size.width + "px";
        this.dom.panel.style.height = this.size.height + "px";

        this.dom.panel.style.top = this.position.top + "px";
        this.dom.panel.style.left = this.position.left + "px";
    }

    refreshHeader(){
        this.dom.title.innerText = this.title;
    }

    refresh(){
        this.refreshSizeAndPosition();
        this.refreshHeader();
    }
}