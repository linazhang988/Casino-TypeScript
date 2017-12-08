class WebPageInteraction {
    displayElement: any;
    userInputElement: any;
    verifyEntry: boolean = false;

    private static instance: WebPageInteraction;

    private constructor() {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("submit");
    }

    static getInstance() {
        if (!WebPageInteraction.instance) {
            WebPageInteraction.instance = new WebPageInteraction();
            // ... any one time initialization goes here ...
        }
        return WebPageInteraction.instance;
    }


    displayToWebpage(input: string): void {
        this.displayElement = document.getElementById("display");
        this.displayElement.innerHTML += "<br/>";
        this.displayElement.innerHTML += input;
        this.displayElement.innerHTML += "<br/>";

    }

    // setOnClickAttribute(newOnClickValue) : void {
    //     //this.userInputElement.setAttribute("OnClick", newOnClickValue);
    //     this.userInputElement = document.getElementById("submit");
    // }

    setOnClickAttribute() : boolean {
        //this.userInputElement.setAttribute("OnClick", newOnClickValue);
        this.userInputElement = document.getElementById("user_input");
        WebPageInteraction.getInstance().displayToWebpage(this.userInputElement.value);
        return true;
    }
}