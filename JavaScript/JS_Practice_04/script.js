// createElement property creates the html elements
const div = document.createElement('div');
div.className="foo"
alert(div.outerHTML);

// remove the class -> remove the classname from an element
div.classList.remove("foo");

// add the class -> add the className from an element
div.classList.add("new-class");
alert(div.outerHTML);

//toggle the class -> if visible is set remove it, otherwise add it
div.classList.toggle("visible");
alert(div.outerHTML);

// contains -> checks the class is contained by the element if it has returns true else returns false
alert(div.classList.contains("foo"));

// replace -> replace the class new-class into class main-container
div.classList.replace("new-class","main-Container");
alert(div.outerHTML);
