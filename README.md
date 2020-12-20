# Landing Page Udacity Project

This project is as part of Udacity's Front-End Development Nanodegree Program. This project makes use of HTML, CSS and Javascript. Javascript is basically used to add dynamicity to the website. The website is equipped to handle any number of content that might be dynamically added to it. The code generates a Navigation item for each section that might get added to the page. 

## Table of Contents

* [Getting Started](#gettingstarted)
* [Working](#working)
* [Built with](#builtwith)
* [Author](#author)

## Getting Started

The project has some HTML and CSS styling to display a static version of the Landing Page project. Apart from these it includes a Javascript code to add interactivity to the page. To launch this website, you can simply clone this repository and open the **'index.html'** file in it.

## Working 

### Index.html
It represents the structure of the Landing Page. At the begining of the body tag you'll find the header tag which comprises of nav element with the class 'navbar__menu', though there is nothing within these tags, but this is where the navigational links will be added dynamically upon runtime. Further you'll find 5 sections, these are dummy sections right now created using placeholder texts but could be replaced with real content at any later point in time. These sections each comprise of attributes such as 'id', 'class' and 'data-nav' which will be used later in the Javascript code.

### Styles.css
This file is responsible for the look and the feel of the webpage. It has various stylings and hover effects to make the webpage look more appealing to the user. Its main highlights are the stylings to mark the navigation header for the active element, which is reflected from the section currently in the viewport.

### App.js
This file consists the Javascript code that makes this webpage interacitve and capable of handling dynamicity. There are a total of four things that this code acheives. First is dynamically building out the navigation bar by looping over the number of sections in the HTML file. Second is to find the section or the part of the page that is currently visible, this is calculated by using the scrolled distance and the size of each section element and the result is then shown in the navigation bar. Thirdly the code listens for clicks on the navigation and scrolls the page smoothly over to the respective header section that was clicked. Finally, the code hides the navigation bar if the user stops scrolling for 3 secs and brings it back up when the user scrolls again.

## Built with

* HTML
* CSS
* JavaScript

## Author

* Kaushik M. Shetty
