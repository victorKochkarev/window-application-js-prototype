class Node{
    constructor(options){
        this.parentNode = options.parentNode;
        this.name = options.name;
        this.size = options.size;
        this.position = options.position;

        this.childNodeList = [];
    }

    propertyList(){
        let result = [];
        result.push(
            new NodeProperty({
                name: "Name",
                value: this.name,
                type: "string"
            })
        );
        result.push(
            new NodeProperty({
                name: "Size",
                value: this.size,
                type: "size"
            })
        );
        result.push(
            new NodeProperty({
                name: "Position",
                value: this.position,
                type: "position"
            })
        );
        return result;
    }
}