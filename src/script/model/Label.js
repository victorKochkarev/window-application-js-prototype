class Label extends Node{
    constructor(options){
        super(options);
        this.text = options.text;
        this.fontSize = options.fontSize;
    }

    propertyList(){
        let result = super.propertyList();
        result.push(
            new NodeProperty({
                name: "Text",
                value: this.text,
                type: "string"
            })
        );
        return result;
    }
}