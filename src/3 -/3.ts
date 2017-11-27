class Widget {
    element: HTMLElement;
    clickCount: number = 0;
    extensionMethod: IWidgetExtensionMethod = widgetExtensionMethod;

    registerCallbacks() {
        this.element.onclick = (e: MouseEvent) => {
            console.log('arrow function this', this);
            this.clickCount++;
        };
        this.element.onclick = clickHandler;
    }

    callExtensionMethod() {
        this.extensionMethod(this.clickCount);
    }
}

function clickHandler(this: HTMLElement, e: MouseEvent) {
    console.log('clickHandler this', this);
}

function widgetExtensionMethod(this: Widget, numberParam: number) {
    console.log('widgetExtensionMethod this', this);
    return true;
}

interface IWidgetExtensionMethod {
    (numberParam: number): boolean;
}