﻿// Define a "Person" class that tracks its own name and children, and has a method to add a new child
class Person {
    children: KnockoutObservableArray<string>;
    constructor(name: string, theChildren: string[]) {
        this.children = ko.observableArray(theChildren);
    }
    addChild() {
        this.children.push("New child");
    }
}

// The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
var viewModel1 = {
    people: [
        new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Person("Charles", ["Cayenne", "Cleopatra"])
    ],
    showRenderTimes: ko.observable(false)
};

ko.applyBindings(viewModel1); 