// create an element and add to website

// by using creteElement we can create and by appendChild we can add to that parent

// const node = document.createElement("li");
// node.innerHTML = "TS";

// const node1 = document.createElement("li");
// node1.innerHTML = "TS"+"2.0";

// const par = document.getElementById('root');
// par.appendChild(node);

// in append function we can append multiple element
// par.append(node, node1);


// creating the text node

// const node = document.createTextNode("hello boss");

// const parent = document.getElementById("root");
// parent.append(node);



// ****************************Attribute Node ***************************

// const node = document.createAttribute("id");
// node.value = "first";

// const curr = document.querySelector("li");
// curr.setAttributeNode(node);

// from parent we can access like array

// const node = document.createAttribute("id");
// node.value = "first";

// const curr = document.getElementById("root");
// curr.children[1].setAttributeNode(node);



// *************accessing attribute *************
// const element = document.getElementById("root");
// console.log(element.getAttribute("id"));
// element.setAttribute("class","main-list");

// element.removeAttribute("class");


// ******************* Add nodes to the DOM *****************

// prepend function

// const parent = document.getElementById("root"); // arrray

// const element = document.createElement("li"); //data
// element.innerHTML = "TS";

//add to the first
// parent.prepend(element);     //add 

// ******************************insertbefore *******************************

// const parent = document.getElementById("root"); // arrray

// const element = document.createElement("li"); //data
// element.innerHTML = "TS";

// const child2=parent.children[1];

// parent.insertBefore(element,child2);


// *******************replaceChild *********************

// parent.replaceChild(element,child2);


// parent.innerHTML += "<li>TS</li>";


// const parent = document.getElementById("root"); 

// const element = document.createElement("div");
// element.innerHTML = "hello boss good morning kya boolti public";

// parent.insertAdjacentElement("beforebegin",element);


// *************************remove Node *************************

// const node = document.getElementById("root");

// node.removeChild();





