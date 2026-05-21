## performance: PRPL Pattern

- Pushing critical resources efficiently, which minimizes the amount of roundtrips to the server and reducing the loading time.
- Rendering the initial route soon as possible to improve the user experience
- Pre-caching assets in the background for frequently visited routes to minimize the amount of requests to the server and enable a better offline experience
- Lazily loading routes or assets that aren’t requested as frequently

## REACTJS patterns

term: Higher-Order Component (HOC)

1. Component-Based Architecture (Foundation)

2. Hooks Pattern (Modern Core)
   Common hooks
   Custom Hooks (VERY important pattern) (useEffect in function)

3. Controlled vs Uncontrolled Components (controls inside component)

4. Lifting State Up

5. Context API Pattern (Global State Lite) = useContext(data)

6. State Management Patterns
   local state / global state
   Redux Pattern

7. Container / Presentational Pattern (component / list)

8. Render Props Pattern (children, render)
render(data), children as a function children(data)
==> parent
 <!-- <MouseTracker
      render={({ x, y }) => (
        <h1>Mouse at: {x}, {y}</h1>
      )}
    /> -->

## Creational patterns

### Abstract Factory

providing an interface for creating families of related objects
Abstract Factory → family of related products created together
Abstract Factory → multiple related products, factory provides entire family

```js
"use strict";

class AbstractFactory {
  constructor() {}

  createProductA(product) {}

  createProductB(product) {}
}

class ConcreteFactory1 extends AbstractFactory {
  constructor() {
    super();
    facade.log("ConcreteFactory1 class created");
  }

  createProductA(product) {
    facade.log("ConcreteFactory1 createProductA");
    return new ProductA1();
  }

  createProductB(product) {
    facade.log("ConcreteFactory1 createProductB");
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  constructor() {
    super();
    facade.log("ConcreteFactory2 class created");
  }

  createProductA(product) {
    facade.log("ConcreteFactory2 createProductA");
    return new ProductA2();
  }

  createProductB(product) {
    facade.log("ConcreteFactory2 createProductB");
    return new ProductB2();
  }
}

class AbstractProductA {
  constructor() {}
}

class AbstractProductB {
  constructor() {}
}

class ProductA1 extends AbstractProductA {
  constructor() {
    super();
    facade.log("ProductA1 created");
  }
}

class ProductA2 extends AbstractProductA {
  constructor() {
    super();
    facade.log("ProductA2 created");
  }
}

class ProductB1 extends AbstractProductB {
  constructor() {
    super();
    facade.log("ProductB1 created");
  }
}

class ProductB2 extends AbstractProductB {
  constructor() {
    super();
    facade.log("ProductB2 created");
  }
}

function init_AbstractFactory() {
  var factory1 = new ConcreteFactory1();
  var productB1 = factory1.createProductB();

  var factory2 = new ConcreteFactory2();
  var productA2 = factory2.createProductA();
}
```

### Factory Method

Factory Method → Factory method must be implemented by subclass
Factory Method → one product type per method, subclass decides
Factory Method → instantiation logic centralized

```js
"use strict";

class Productt {
  constructor() {}
}

class ConcreteProduct extends Productt {
  constructor() {
    super();
    facade.log("ConcreteProduct created");
  }
}

class Creator {
  constructor() {}

  FactoryMethod() {}

  AnOperation() {
    facade.log("AnOperation()");
    this.product = this.FactoryMethod();
    facade.log(this.product instanceof ConcreteProduct);
  }
}

class ConcreteCreator extends Creator {
  constructor() {
    super();
    facade.log("ConcreteCreator created");
  }

  FactoryMethod() {
    return new ConcreteProduct();
  }
}

function init_FactoryMethod() {
  var factory = new ConcreteCreator();
  factory.AnOperation();
}
```

### Builder

Builder → step-by-step construction of a complex object with chaining

```js
"use strict";

class Director {
  constructor() {
    this.structure = ["Maze", "Wall", "Door"];
    facade.log("Director class created");
  }

  Construct() {
    for (var all in this.structure) {
      let builder = new ConcreteBuilder();
      builder.BuildPart(this.structure[all]);
      builder.GetResult();
    }
  }
}

class Builder {
  constructor() {}

  BuildPart() {}
}

class ConcreteBuilder extends Builder {
  constructor() {
    super();
    facade.log("ConcreteBuilder class created");
  }

  BuildPart(rawmaterial) {
    facade.log("ConcreteBuilder BuildPart()");
    var material = rawmaterial;
    this.product = new Product(material);
  }

  GetResult() {
    facade.log(JSON.stringify(this.product));
    return this.product;
  }
}

class Product {
  constructor(material) {
    facade.log("Product class created");
    this.data = material;
  }
}

function init_Builder() {
  let director = new Director();
  director.Construct();
}
```

### Singleton

classe singleton, client
Singleton → only one instance

- Database connection pool manager
- Cache manager
- Event bus / global mediator
- Thread pool / task scheduler

```js
"use strict";

let _singleton = null;

class Singleton {
  constructor(data) {
    if (!_singleton) {
      this.data = data;
      _singleton = this;
    } else return _singleton;
    facade.log("Singleton class created");
  }

  SingletonOperation() {
    facade.log("SingletonOperation");
  }

  GetSingletonData() {
    return this.data;
  }
}

function init_Singleton() {
  var singleton1 = new Singleton("data1");
  var singleton2 = new Singleton("data2");
  facade.log(singleton1.GetSingletonData());
  facade.log(singleton2.GetSingletonData());
  facade.log(singleton1 instanceof Singleton);
  facade.log(singleton2 instanceof Singleton);
  facade.log(singleton1 === singleton2);
}
```

### Prototype

Créer un nouvel object à partir d'un objet existant
Prototype → clone objects
===> Configuration / Logger / Global Resource Manager

```js
"use strict";

class Prototype {
  constructor(prototype) {}

  Clone() {}
}

class ConcretePrototype1 extends Prototype {
  constructor() {
    facade.log("ConcretePrototype1 created");
    super();
    this.feature = "feature 1";
  }

  setFeature(key, val) {
    this[key] = val;
  }

  Clone() {
    facade.log("custom cloning function");
    let clone = new ConcretePrototype1();
    let keys = Object.keys(this);

    keys.forEach((k) => clone.setFeature(k, this[k]));

    facade.log("ConcretePrototype1 cloned");
    return clone;
  }
}

class ConcretePrototype2 extends Prototype {
  constructor() {
    facade.log("ConcretePrototype2 created");
    super();
  }

  Clone() {
    facade.log("ConcretePrototype2 cloned");
    return clone;
  }
}

function init_Prototype() {
  var proto1 = new ConcretePrototype1();
  proto1.setFeature("feature", "feature 22");
  var clone1 = proto1.Clone();
  facade.log(clone1.feature);
}
```

## Behavioral patterns

### Chain of responsability

Faire circuler des demandes dans une chaine de handlers next() (middlewares) vers le system de Commandes
===> http request middleware process

```js
"use strict";
class Handler {
  constructor() {}
  HandleRequest() {}
}

class ConcreteHandler1 extends Handler {
  constructor() {
    super();
    facade.log("ConcreteHandler1 created");
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  HandleRequest(request) {
    if (request === "run") facade.log("ConcreteHandler1 has handled the request");
    else {
      facade.log("ConcreteHandler1 calls his successor");
      this.successor.HandleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  constructor() {
    super();
    facade.log("ConcreteHandler2 created");
  }

  HandleRequest(request) {
    facade.log("ConcreteHandler2 has handled the request");
  }
}

function init_ChainofResponsibility() {
  let handle1 = new ConcreteHandler1();
  let handle2 = new ConcreteHandler2();
  handle1.setSuccessor(handle2);
  handle1.HandleRequest("run");
  handle1.HandleRequest("stay");
}
```

### Command

action ==> (transformation) création d'un object avec des instructions et des arguments.

- paramétrage de méthodes
- plannig d'exécution
- gérer une file d'attente
- annulation éventuelle
  ===> do/undo command with history tracking

```js
"use strict";

class Invoker {
  constructor() {
    facade.log("Invoker created");
  }

  StoreCommand(command) {
    this.command = command;
  }
}

class Command {
  constructor() {}

  Execute() {}
}

class ConcreteCommand extends Command {
  constructor(receiver, state) {
    super();
    this.receiver = receiver;
    facade.log("ConcreteCommand created");
  }

  Execute() {
    facade.log("ConcreteCommand Execute");
    this.receiver.Action();
  }
}

class Receiver {
  constructor() {
    facade.log("Receiver created");
  }

  Action() {
    facade.log("Receiver Action");
  }
}

function init_Command() {
  var invoker = new Invoker();
  var receiver = new Receiver();
  var command = new ConcreteCommand(receiver);
  invoker.StoreCommand(command);
  invoker.command.Execute();
}
```

### Interpreter

Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

```js
"use strict";

class Context {
  constructor(input) {
    this.input = input;
    this.index = 0;
    this.output = null;
  }

  Lookup(expr) {
    //return this.
  }
}

class AbstractExpression {
  constructor() {}

  Interpret(context) {}
}

class TerminalExpression extends AbstractExpression {
  constructor(name) {
    super();
    this.name = name;
    facade.log("TerminalExpression created");
  }

  Interpret(context) {}
}

class NonterminalExpression extends AbstractExpression {
  constructor() {
    super();
    this.name = "+";
    facade.log("NonterminalExpression created");
  }

  Interpret(context) {
    return terminal1.Interpret() + terminal2;
  }
}

function init_Interpreter() {
  var context = new Context("A+B+A");
  facade.log("Not implemented");
}
```

### Iterator

Parcourir les éléments d'une collection sans révéler sa représentation interne (item.next())
===> iterator.hasNext() iterator.next() traversing collection

```js
"use strict";

class Iterator {
  constructor() {}

  First() {}

  Next() {}

  IsDone() {}

  CurrentItem() {}
}

class ConcreteIterator extends Iterator {
  constructor(aggregate) {
    super();
    facade.log("ConcreteIterator created");
    this.index = 0;
    this.aggregate = aggregate;
  }

  First() {
    return this.aggregate.list[0];
  }

  Next() {
    this.index += 2;
    return this.aggregate.list[this.index];
  }

  CurrentItem() {
    return this.aggregate.list[this.index];
  }
}

class Aggregate {
  constructor() {}

  CreateIterator() {}
}

class ConcreteAggregate extends Aggregate {
  constructor(list) {
    super();
    this.list = list;
    facade.log("ConcreteAggregate created");
  }

  CreateIterator() {
    this.iterator = new ConcreteIterator(this);
  }
}

function init_Iterator() {
  var aggregate = new ConcreteAggregate([0, 1, 2, 3, 4, 5, 6, 7]);
  aggregate.CreateIterator();
  facade.log(aggregate.iterator.First());
  facade.log(aggregate.iterator.Next());
  facade.log(aggregate.iterator.CurrentItem());
}
```

### Mediator (MVC)

Restreint la communication entre les objects via un médiateur
(Front - Formulaires sont gérés grace à une classe unique si possible)
le Médiateur notifie (classes / méthodes)
Mediator → manages communication between objects
===> GUI Component Interaction

```js
"use strict";

class Mediator {
  constructor() {}

  ColleagueChanged(colleague) {}
}

class ConcreteMediator extends Mediator {
  constructor() {
    super();
    facade.log("ConcreteMediator created");
    this.colleague1 = new ConcreteColleague1(this);
    this.colleague2 = new ConcreteColleague2(this);
  }

  ColleagueChanged(colleague) {
    switch (colleague) {
      case this.colleague1:
        facade.log("ConcreteColleague1 has Changed -> change ConcreteColleague2.feature: ");
        this.colleague2.setFeature("new feature 2");
        break;
      case this.colleague2:
        facade.log("ConcreteColleague2 has Changed, but do nothing");
        break;
      default:
        facade.log("Do nothing");
    }
  }
}

class Colleague {
  constructor() {}

  Changed() {
    this.mediator.ColleagueChanged(this);
  }
}

class ConcreteColleague1 extends Colleague {
  constructor(mediator) {
    super();
    facade.log("ConcreteColleague1 created");
    this.mediator = mediator;
    this.feature = "feature 1";
  }

  setFeature(feature) {
    facade.log("ConcreteColleague1 Feature has changed from " + this.feature + " to " + feature);
    this.feature = feature;
    this.Changed();
  }
}
class ConcreteColleague2 extends Colleague {
  constructor(mediator) {
    super();
    facade.log("ConcreteColleague2 created");
    this.mediator = mediator;
    this.feature = "feature 2";
  }

  setFeature(feature) {
    facade.log("ConcreteColleague2 Feature has changed from " + this.feature + " to " + feature);
    this.feature = feature;
    this.Changed();
  }
}

function init_Mediator() {
  var mediator = new ConcreteMediator();
  mediator.colleague1.setFeature("new feature 1");
}
```

### Memento

Rétablir l'état d'un object (historique de l'état)
===> Save/Restore (Undo Snapshots in Editors & Games)

```js
"use strict";

class Originator {
  constructor() {
    facade.log("Originator created");
    this.state = "a";
    facade.log("State= " + this.state);
  }

  SetMemento(Memento) {
    this.state = Memento.GetState();
    facade.log("State= " + this.state);
  }

  CreateMemento(state) {
    return new Memento(state);
  }
}

class Memento {
  constructor(state) {
    this.state = state;
    facade.log("Memento created. State= " + this.state);
  }

  GetState() {
    return this.state;
  }

  SetState(state) {
    this.state = state;
  }
}

class Caretaker {
  constructor() {
    facade.log("Caretaker created");
    this.mementos = [];
  }

  AddMemento(memento) {
    facade.log("Caretaker AddMemento");
    this.mementos.push(memento);
  }

  SetMemento() {
    return this.mementos[this.mementos.length - 1];
  }
}

function init_Memento() {
  let caretaker = new Caretaker();
  let originator = new Originator();
  caretaker.AddMemento(originator.CreateMemento("b"));
  originator.SetMemento(caretaker.SetMemento());
  facade.log(originator.state);
}
```

### Observer

Mécanisme de souscription. Permet à plusieurs objects de souscrire
à un cannal qui écoute et transmet l'état des objects (sujet) qu'ils observent. (publisher / subscriber)
===> DOM Events (Event Listeners)

```js
'use strict';

class Subjectt {
    constructor() {
    }

    Attach (Observer){
        this.observers.push(Observer);
        facade.log('Observer attached')
    }
²²
    Dettach (Observer){
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    Notify (){
        facade.log('Subject Notify')
        for(var i in this.observers){
            this.observers[i].Update(this);
        }
    }
}

class ConcreteSubject extends Subjectt {
    constructor() {
        super()
        this.subjectState = null
        this.observers = []
        facade.log('ConcreteSubject created')
    }

    GetState() {
        return this.subjectState;
    }

    SetState(state) {
        this.subjectState = state;
        this.Notify()
    }
}

class Observer {
    constructor() {
    }

    Update (){
    }
}

class ConcreteObserver extends Observer {
    constructor() {
        super()
        this.observerState = '';
        facade.log('ConcreteObserver created')
    }

    Update (Subject){
        this.observerState = Subject.GetState();
        facade.log('Observer new state: ' + this.observerState)
    }
}

function init_Observer() {
    var observer1 = new ConcreteObserver()
    var observer2 = new ConcreteObserver()
    var subject = new ConcreteSubject()
    subject.Attach(observer1)
    subject.Attach(observer2)
    subject.SetState('state 1')
}
```

### State / automates

Un programme possède un nombre fini d'états. il en de même pour les
transitions. hors il se peut que certains états ne sont plus accessibles

- extraction du comportement lié aux états dans ces classes.
- une classe possède des méthodes qui sont exécutées.
- L'Etat se propose de créer un contexte et de stocker les références
  puis de les transmettres. (Contexte - Etat - Etat concrets)
  ===> Finite State Machines (e.g., UI / Media Player / TCP States)

```js
"use strict";

class Contextt {
  constructor(state) {
    switch (state) {
      case "A":
        this.state = new ConcreteStateA();
        break;
      case "B":
        this.state = new ConcreteStateB();
        break;
      default:
        this.state = new ConcreteStateA();
    }
  }

  Request() {
    this.state.Handle(this);
  }
}

class State {
  constructor() {}

  Handle() {}
}

class ConcreteStateA extends State {
  constructor() {
    super();
    facade.log("ConcreteStateA created");
  }

  Handle(context) {
    facade.log("ConcreteStateA handle");
  }
}

class ConcreteStateB extends State {
  constructor() {
    super();
    facade.log("ConcreteStateB created");
  }

  Handle(context) {
    facade.log("ConcreteStateB handle");
  }
}

function init_State() {
  let context = new Contextt("A");
  context.Request();
}
```

### Strategie

Un context commun d'exécution. (strategy, setStrategy, executeStrategy).
chaques instances sont déclarées dans un certain contexte
Strategy → object chooses among interchangeable algorithms
===> Payment Methods (Strategy Selection at Runtime)

```js
"use strict";

class Contexttt {
  constructor(type) {
    switch (type) {
      case "A":
        this.strategy = new ConcreteStrategyA();
        break;
      case "B":
        this.strategy = new ConcreteStrategyB();
        break;
      default:
        this.strategy = new ConcreteStrategyA();
    }
  }

  ContextInterface() {
    this.strategy.AlgorithmInterface();
  }
}

class Strategy {
  constructor() {}

  AlgorithmInterface() {}
}

class ConcreteStrategyA extends Strategy {
  constructor() {
    super();
    facade.log("ConcreteStrategyA created");
  }

  AlgorithmInterface() {
    facade.log("ConcreteStrategyA algorithm");
  }
}

class ConcreteStrategyB extends Strategy {
  constructor() {
    super();
    facade.log("ConcreteStrategyB created");
  }

  AlgorithmInterface() {
    facade.log("ConcreteStrategyB algorithm");
  }
}

function init_Strategy() {
  let contextA = new Contexttt("A");
  contextA.ContextInterface();
  let contextB = new Contexttt("B");
  contextB.ContextInterface();
}
```

### Template method (parent / enfants)

Une structure initiale. Des sous-classes et de nouvelles méthodes.
classes (abstraites, templateMethods, ClassesContretes qui étendent Abstraite - un client qui utilise la class abstraite)
===> Data Processing Pipelines (e.g., parsing files) classe commune DataProcessor et SubClasses pour les spécificités

```js
"use strict";

class AbstractClass {
  constructor() {}

  TemplateMethod() {
    this.PrimitiveOperation1();
    this.PrimitiveOperation2();
  }

  PrimitiveOperation1() {}

  PrimitiveOperation2() {}
}

class ConcreteClass extends AbstractClass {
  constructor() {
    super();
    facade.log("ConcreteClass created");
  }

  PrimitiveOperation1() {
    facade.log("ConcreteClass PrimitiveOperation1");
  }

  PrimitiveOperation2() {
    facade.log("ConcreteClass PrimitiveOperation2");
  }
}

function init_TemplateMethod() {
  let class1 = new ConcreteClass();
  class1.TemplateMethod();
}
```

### Visitor

crér une classes capable d'accepter ue série de composents utilisable par un client. système de paramètrage.
===> Abstract Syntax Tree (AST) Processing (Compilers / Interpreters)

- File system operations (size, search, permissions)
- UI trees (rendering, layout, accessibility checks)
- Document processing (HTML/XML transformations)

```js
"use strict";

class Visitor {
  constructor() {}

  VisitConcreteElementA(ConcreteElementA) {}

  VisitConcreteElementB(ConcreteElementB) {}
}

class ConcreteVisitor1 extends Visitor {
  constructor() {
    super();
    facade.log("ConcreteVisitor1 created");
  }

  VisitConcreteElementA(ConcreteElementA) {
    facade.log("ConcreteVisitor1 visited ConcreteElementA");
  }

  VisitConcreteElementB(ConcreteElementB) {
    facade.log("ConcreteVisitor1 visited ConcreteElementB");
  }
}

class ConcreteVisitor2 extends Visitor {
  constructor() {
    super();
    facade.log("ConcreteVisitor2 created");
  }

  VisitConcreteElementA(ConcreteElementA) {
    facade.log("ConcreteVisitor2 visited ConcreteElementA");
  }

  VisitConcreteElementB(ConcreteElementB) {
    facade.log("ConcreteVisitor2 visited ConcreteElementB");
  }
}

class ObjectStructure {
  constructor() {
    facade.log("ObjectStructure created");
  }
}

class Element {
  constructor() {}

  Accept(visitor) {}
}

class ConcreteElementA extends Element {
  constructor() {
    super();
    facade.log("ConcreteElementA created");
  }

  Accept(visitor) {
    visitor.VisitConcreteElementA(this);
  }

  OperationA() {
    facade.log("ConcreteElementA OperationA");
  }
}

class ConcreteElementB extends Element {
  constructor() {
    super();
    facade.log("ConcreteElementB created");
  }

  Accept(visitor) {
    visitor.VisitConcreteElementB(this);
  }

  OperationB() {
    facade.log("ConcreteElementB OperationB");
  }
}

function init_Visitor() {
  let visitor1 = new ConcreteVisitor1();
  let visitor2 = new ConcreteVisitor2();
  let elementA = new ConcreteElementA();
  let elementB = new ConcreteElementB();
  elementA.Accept(visitor1);
  elementB.Accept(visitor2);
}
```

## Structural patterns

### Adapter

Convert the interface of some class b into an interface a that some client class c understands.
The AdapterPattern lets classes with incompatible interfaces work together.
cyble, origine, adapter
Adapter → retrofits an existing interface to match another
Adapter → converts interface for one client
Adapter → changes interface
Adapter → converts one interface to another
===> Integrating Third-Party Libraries / APIs

```js
"use strict";

class Target {
  constructor(type) {
    let result;

    switch (type) {
      case "adapter":
        result = new Adapter();
        break;
      default:
        result = null;
    }
    return result;
  }

  Request() {}
}

class Adaptee {
  constructor() {
    facade.log("Adaptee created");
  }

  SpecificRequest() {
    facade.log("Adaptee request");
  }
}

class Adapter extends Adaptee {
  constructor() {
    super();
    facade.log("Adapter created");
  }

  Request() {
    return this.SpecificRequest();
  }
}

function init_Adapter() {
  var f = new Target("adapter");
  f.Request();
}
```

### Bridge

The BridgePattern decouples an abstraction from its implementation so that the two can vary independently.
This is unlike the intent of the AdapterPattern, which exists only to adapt the interface of one class to another.

Séparation de l'abstraction et de l'implementation
abstraction, abstraction affinée, implementateur, implémentateur concret qui étendent l'implémentateur
Bridge → designed from the start to separate abstraction & implementation
Bridge → abstraction delegates to implementation for flexibility
===> UI Toolkit with Multiple Platformss

```js
"use strict";

class Abstraction {
  constructor() {}

  Operation() {
    this.imp.OperationImp();
  }
}

class RefinedAbstraction extends Abstraction {
  constructor() {
    super();
    facade.log("RefinedAbstraction created");
  }

  setImp(imp) {
    this.imp = imp;
  }
}

class Implementor {
  constructor() {}

  OperationImp() {}
}

class ConcreteImplementorA extends Implementor {
  constructor() {
    super();
    facade.log("ConcreteImplementorA created");
  }

  OperationImp() {
    facade.log("ConcreteImplementorA OperationImp");
  }
}

class ConcreteImplementorB extends Implementor {
  constructor() {
    super();
    facade.log("ConcreteImplementorB created");
  }

  OperationImp() {
    facade.log("ConcreteImplementorB OperationImp");
  }
}

function init_Bridge() {
  var abstraction = new RefinedAbstraction();
  var state = Math.floor(Math.random() * 2);
  if (state) abstraction.setImp(new ConcreteImplementorA());
  else abstraction.setImp(new ConcreteImplementorB());

  abstraction.Operation();
}
```

### Composite

Compose objects into tree structures that represent whole-part hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. A leaf has the same interface as a node.
Composite → represents whole-part hierarchies
===> File System Hierarchy (Folders & Files)

```js
"use strict";

class Component {
  constructor() {}

  Operation() {}

  Add(Component) {}

  Remove(Component) {}

  GetChild(key) {}
}

class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
    facade.log("Leaf created");
  }

  Operation() {
    facade.log(this.name);
  }
}

class Composite extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
    facade.log("Composite created");
  }

  Operation() {
    facade.log("Composite Operation for: " + this.name);
    for (var i in this.children) this.children[i].Operation();
  }

  Add(Component) {
    this.children.push(Component);
  }

  Remove(Component) {
    for (var i in this.children) if (this.children[i] === Component) this.children.splice(i, 1);
  }

  GetChild(key) {
    return this.children[key];
  }
}

function init_Composite() {
  var composite1 = new Composite("C1");
  composite1.Add(new Leaf("L1"));
  composite1.Add(new Leaf("L2"));
  var composite2 = new Composite("C2");
  composite2.Add(composite1);
  composite1.GetChild(1).Operation();
  composite2.Operation();
}
```

### Decorator

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality

===> Enhancing UI Components / Streams
Decorator → adds behavior
Decorator → adds behavior dynamically
Decorator → adds behavior to a single object dynamically
Decorator → adds features

```js
"use strict";

class Componentt {
  constructor() {}

  Operation() {}
}

class ConcreteComponent extends Componentt {
  constructor() {
    super();
    facade.log("ConcreteComponent created");
  }

  Operation() {
    facade.log("o o");
  }
}

class Decorator extends Componentt {
  constructor(component) {
    super();
    this.component = component;
    facade.log("Decorator created");
  }

  Operation() {
    this.component.Operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  constructor(component, sign) {
    super(component);
    this.addedState = sign;
    facade.log("ConcreteDecoratorA created");
  }

  Operation() {
    super.Operation();
    facade.log(this.addedState);
  }
}

class ConcreteDecoratorB extends Decorator {
  constructor(component, sign) {
    super(component);
    this.addedState = sign;
    facade.log("ConcreteDecoratorA created");
  }

  Operation() {
    super.Operation();
    facade.log(
      this.addedState + this.addedState + this.addedState + this.addedState + this.addedState,
    );
  }

  AddedBehavior() {
    this.Operation();
    facade.log("|........|");
  }
}

function init_Decorator() {
  var component = new ConcreteComponent();
  var decoratorA = new ConcreteDecoratorA(component, "!!!");
  var decoratorB = new ConcreteDecoratorB(component, ".");
  facade.log("component: ");
  component.Operation();
  facade.log("decoratorA: ");
  decoratorA.Operation();
  facade.log("decoratorB: ");
  decoratorB.AddedBehavior();
}
```

### Facade

Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use. This can be used to simplify a number of complicated object interactions into a single interface.

Ajouter une interface simplifiée et unifiée à un système complexe
Facade → simplifies access for many clients
Facade → simplifies existing system for convenience
===> Complex Subsystems (e.g., Multimedia Libraries, APIs)

```js
"use strict";

class Facade {
  constructor() {
    this.log("Facade class created");
    this.htmlid = null;
  }

  log(text) {
    if (typeof this.htmlid === null) {
      console.log(text);
    } else {
      $("#" + this.htmlid).append(text + "</br>");
    }
  }

  erase() {
    $("#" + this.htmlid).html("");
  }

  test_dp(dp) {
    switch (dp) {
      case "Facade":
        this.htmlid = "test_Facade";
        this.erase();
        this.log("This is the Facade");
        break;
      case "AbstractFactory":
        this.htmlid = "test_AbstractFactory";
        this.erase();
        init_AbstractFactory();
        break;
      case "Builder":
        this.htmlid = "test_Builder";
        this.erase();
        init_Builder();
        break;
      case "Factory":
        this.htmlid = "test_Factory";
        this.erase();
        init_FactoryMethod();
        break;
      case "Prototype":
        this.htmlid = "test_Prototype";
        this.erase();
        init_Prototype();
        break;
      case "Singleton":
        this.htmlid = "test_Singleton";
        this.erase();
        init_Singleton();
        break;
      case "Adapter":
        this.htmlid = "test_Adapter";
        this.erase();
        init_Adapter();
        break;
      case "Bridge":
        this.htmlid = "test_Bridge";
        this.erase();
        init_Bridge();
        break;
      case "Composite":
        this.htmlid = "test_Composite";
        this.erase();
        init_Composite();
        break;
      case "Decorator":
        this.htmlid = "test_Decorator";
        this.erase();
        init_Decorator();
        break;
      case "Flyweight":
        this.htmlid = "test_Flyweight";
        this.erase();
        init_Flyweight();
        break;
      case "Proxy":
        this.htmlid = "test_Proxy";
        this.erase();
        init_Proxy();
        break;
      case "ChainofResponsibility":
        this.htmlid = "test_ChainofResponsibility";
        this.erase();
        init_ChainofResponsibility();
        break;
      case "Command":
        this.htmlid = "test_Command";
        this.erase();
        init_Command();
        break;
      case "Interpreter":
        this.htmlid = "test_Interpreter";
        this.erase();
        init_Interpreter();
        break;
      case "Iterator":
        this.htmlid = "test_Iterator";
        this.erase();
        init_Iterator();
        break;
      case "Mediator":
        this.htmlid = "test_Mediator";
        this.erase();
        init_Mediator();
        break;
      case "Memento":
        this.htmlid = "test_Memento";
        this.erase();
        init_Memento();
        break;
      case "Observer":
        this.htmlid = "test_Observer";
        this.erase();
        init_Observer();
        break;
      case "State":
        this.htmlid = "test_State";
        this.erase();
        init_State();
        break;
      case "Strategy":
        this.htmlid = "test_Strategy";
        this.erase();
        init_Strategy();
        break;
      case "TemplateMethod":
        this.htmlid = "test_TemplateMethod";
        this.erase();
        init_TemplateMethod();
        break;
      case "Visitor":
        this.htmlid = "test_Visitor";
        this.erase();
        init_Visitor();
        break;
      default:
        console.log("nothing to test");
    }
  }
}
```

### Flyweight

Use sharing to support large numbers of
fine-grained objects efficiently

The FlyweightPattern describes how to support a large number of fine grained objects efficiently, by sharing commonalities in state. For example, when designing a word processor application, you might create an object for each character typed. Each Character object might contain information such as the font face, size and weight of each character. The problem here is that a lengthy document might contain tens of thousands of characters, and objects - quite a memory killer! The Flyweight pattern addresses the problem by creating a new object to store such information, which is shared by all characters with the same formatting. So, if I had a ten-thousand word document, with 800 characters in Bold Times-New-Roman, these 800 characters would contain a reference to a flyweight object that stores their common formatting information. The key here is that you only store the information once, so memory consumption is greatly reduced.

classe, factory
stocker et partager la mémoire intrinsec  
Flyweight → shares state for memory efficiency
Flyweight → many shared objects for efficiency
Flyweight → reuse existing shared objects
===> Text Rendering / Character Objects in a Document Editor

```js
"use strict";

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
    facade.log("FlyweightFactory created");
  }

  GetFlyweight(key) {
    if (this.flyweights[key]) {
      return this.flyweights[key];
    } else {
      this.flyweights[key] = new ConcreteFlyweight(key);
      return this.flyweights[key];
    }
  }

  CreateGibberish(keys) {
    return new UnsharedConcreteFlyweight(keys, this);
  }
}

class Flyweight {
  constructor() {}

  Operation(extrinsicState) {}
}

class ConcreteFlyweight extends Flyweight {
  constructor(key) {
    super();
    this.intrinsicState = key;
    facade.log("ConcreteFlyweight created");
  }

  Operation(extrinsicState) {
    return extrinsicState + this.intrinsicState;
  }
}

class UnsharedConcreteFlyweight extends Flyweight {
  constructor(keys, flyweights) {
    super();
    this.flyweights = flyweights;
    this.keys = keys;
    facade.log("UnsharedConcreteFlyweight created");
  }

  Operation(extrinsicState) {
    var key,
      word = "";

    for (var i = 0; i < extrinsicState; i++) {
      //random key
      key = this.keys[Math.floor(Math.random() * this.keys.length)];
      word = this.flyweights.GetFlyweight(key).Operation(word);
    }
    facade.log("UnsharedConcreteFlyweight Operation: ");
    facade.log(word);
  }
}

function init_Flyweight() {
  var flyweights = new FlyweightFactory();
  var gibberish = flyweights.CreateGibberish(["-", "+", "*"]);
  gibberish.Operation(5);
  gibberish.Operation(10);
}
```

### Proxy

Real subject, proxy,
Proxy → same interface, controls access or adds behavior
===> Virtual Proxy for Expensive Resources (Lazy Loading / Access Control)

```js
"use strict";

class Subject {
  constructor() {}

  Request() {}
}

class RealSubject extends Subject {
  constructor() {
    super();
    facade.log("RealSubject created");
  }

  Request() {
    facade.log("RealSubject handles request");
  }
}

class Proxy extends Subject {
  constructor() {
    super();
    facade.log("Proxy created");
  }

  Request() {
    this.realSubject = new RealSubject();
    this.realSubject.Request();
  }
}

function init_Proxy() {
  var proxy = new Proxy();
  proxy.Request();
}
```
