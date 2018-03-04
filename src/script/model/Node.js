class Node{
    constructor(options){
        this.parentNode = options.parentNode;
        this.name = options.name;
        this.width = options.width;
        this.height = options.height;
        this.childNodeList = [];
    }
}