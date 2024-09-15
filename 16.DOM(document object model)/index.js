alert("Hello");

/*
document
#document
document.fi
undefined
document.firstElementChild
<html lang=​"en" dir=​"ltr">​<head>​…​</head>​<body>​<h1>​Hello​</h1>​<input type=​"checkbox">​<button style=​":​active color:​red;​">​Click Me​</button>​<ul>​<li class=​"list">​…​</li>​<li class=​"list">​…​</li>​<li class=​"list">​…​</li>​</ul>​</body>​</html>​
document.firstElementChild.firstElementChild
<head>​…​</head>​
document.firstElementChild.firstElementChild.lastChild
#textassignedSlot: nullbaseURI: "file:///D:/Web%20D%201/16.DOM(document%20object%20model)/DOM+Challenge+Starting+Files/DOM%20Challenge%20Starting%20Files/index.html"childNodes: NodeList []data: "\n\n  "firstChild: nullisConnected: truelastChild: nulllength: 4nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n\n  "ownerDocument: documentparentElement: headparentNode: headpreviousElementSibling: linkpreviousSibling: linktextContent: "\n\n  "wholeText: "\n\n  "[[Prototype]]: Text
document.firstElementChild.firstElementChild.lastChild
#text
document.firstElementChild.firstElementChild.lastElementChild
<link rel=​"stylesheet" href=​"styles.css">​
document.lastChild.lastElementChild.lastElementChild
<ul>​<li class=​"list">​…​</li>​<li class=​"list">​…​</li>​<li class=​"list">​…​</li>​</ul>​
document.lastChild.lastElementChild.lastElementChild.lastElementChild
<li class=​"list">​::marker​"Aditya"</li>​
doc
VM564:1 Uncaught ReferenceError: doc is not defined
    at <anonymous>:1:1
(anonymous) @ VM564:1
document.getElementsByTagName("li")
HTMLCollection(3) [li.list, li.list, li.list]0: li.list1: li.list2: li.listlength: 3[[Prototype]]: HTMLCollection
document.getElementsByTagName("li").[2]
VM669:1 Uncaught SyntaxError: Unexpected token '['
document.getElementsByTagName("li")[2]
<li class=​"list">​…​</li>​::marker​"Aditya"</li>​
document.getElementsByTagName("li")[2].sty
undefined
document.getElementsByTagName("li")[2].style.color='purple';
'purple'
*/