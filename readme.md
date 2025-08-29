### 1. what  is the difference  between getElementById,getElementByClassName,and querySelector/querySelectorAll?
getElementByID ():-
the getElementById()  method is the most specific and fastest way to select  a single element . by its unique id attribute. fast of all it is designed  for unique id  so, it will only ever return one element.
syntax : document.getElementById('id-name')
 ```
<div>
<h1 id="programming_2"> programming Hero batch 12</h1>
<h1 id="programming_3"> programming Hero is a best platform</h1>
<h1 id="programming"> programming Hero</h1>
<h1 id="programming_4">i am learning programming</h1>
<h1 id="programming_5"> Document Object Model</h1>
</div>
if i want to get attribute   programming Hero .
then i use the getElementById().
const data=document.getElementById("programming");
console.log(data.innerText);
 ```
getElementByClassName() :-
the getElementByClassName()  select all elements that have a specific class name .it return a collection because multiple element  can shared the same class name . i can access element  within the collection using an index
syntax :- document.getElementByClassName("class_name");
```
<p class='demo'> this is p tag</p>
<h4 class='demo'>this is heading tag </h4>
<p class='demo'>hyper text markup language</p>
document.getElementByClassName('demo');
```
querySelector():-
in javascript the querySelector() method that enables us to search and return the fast element within the document it find that element match with any of specified css selector . it return a single element .however if no matching element is found it return null.
syntax: document.querySelector('');
```
<h1 id='tittle'>Hello World</h1>
<p class='message'>this is paragraph tag</p>
<p class='message'>i am learning web development</p>
document.querySelector('.message');
document.querySelector(#tittle);
```
querySelectorAll():-
in javascript querySelectorAll()  select the first element from the code. mainly this method returns the first element as a nodeList(like an array).
```
<div>
<li class='fruit'>Apple<li>
<li class='fruit'>Banana<li>
<li class='fruit'>Mango<li>
<li class='fruit'>orange<li>
</div>
document.querySelectorAll(.fruit);
```
### 2. how do you create insert a new element into the DOM?

in javascript , using the  appendChild() method  for adding a new element to a web page's Document object model (DOM).this method add a new child element to a specific parent element .the new element  is added as the last child of the parent element .
```
const newDiv =document.createElement('div');
newDiv.textContent ='i am a developer'
document.body.appendChild('newDiv');
```

### 3. what is Bubbling and how does it work?

in javascript Bubbling is a method of Event Propagation.when we click on an element in the HTML DOM such as a button  the event  is targeted not only a button but also on it parent element ,grandparents ,finally the entire document object . simply put when, an event occurs on a child element the event is the first handled on that child element . then ,it flow upwards like a bubble towards its parent element and continue to be handled  until it reaches the root document.
```
<section id="outer_section">
<div id ='inner_div'>
<button class="my_button">click me</button>
</div>
</section>
document.getElementById("my_button").addEventListener('click',function(){
    console.log("button was clicked")
});
document.getElementById("inner_div").addEventListener('click',function(){
    console.log("div was clicked")
});
document.getElementById("outer_section").addEventListener('click',function(){
    console.log("section was clicked")
});
when Click the button ,
fast the event is triggered directly on the button
then the event bubbling up from the button to its parent element ,inner_div then inner_div its goes up to its parent outer_section finally ,it reaches the top of the document .
```
### 4. what is Event Delegation in javascript? why is it useful?
in javascript Event Delegation is a technique that allows you to manage event on the parent element instead of on each individual child element
when an event occur on  a child element ,it first triggers on that element and then bubbles up to its parent , grandparent ,and so on aii the way  to the root of the document .
event delegation is a powerful and efficient technique for several key reasons.

improve performance: attaching  one event listener to a parent element  and listing for event on its  children is called event delegation.
dynamic elements: event delegation is useful for dynamically added element because the parent listener is already in place . it automatically handles event for new child elements.so, you do not manually attach listeners to each new item as its created.
simplified code : event delegation simplifies your code by allowing  you to write  one function to handle event for multiple element.

### what is the difference between preventDefault() and stopPropagation() method?

preventDefault():-
1. prevent the browser's default action.
2.the element itself.
3.canceling an action before (it happens stopping a train form leaving the station)
stopPropagation();-
1.prevents the event form bubbling up the dom tree.
2.the event's flow to other elements.
3.prevent a ripple effect form spreading out.