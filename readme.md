###  what  is the difference  between getElementById,getElementByClassName,and querySelector/querySelectorAll?
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
### how do you create insert a new element into the DOM?



### what is Bubbling and how does it work?



### what is Event Delegation in javascript? why is it useful?





### what is the difference between preventDefault() and stopPropagation() method?