const sidebar = document.getElementById('sidebar');

// The childElementCount read-only property returns the number of child elements of this element.
alert(sidebar.childElementCount);

// children property is used to access the children inside an  element
for(const child of sidebar.children){
    alert(child.tagName);
}