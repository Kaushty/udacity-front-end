# Evaluate a News article with Natural Language Processing
### Udacity Front-End Developer Nanodegree Program Project 4 - Evaluate a News Article Therwith NLP

## Table of Contents
* [Overview](#overview)
* [Instructions](#instructions)
* [Working](#working)
* [Resources](#resources)
* [Author](#author)

## Overview 
A single page app that utilises an external NLP API to evaluate a news article via a URL.
Once the URL has been evaluated the relevant data is parsed and displayed on the UI. 
The app uses Webpack as a build tool to bundle all the assets and dependencies involved in the webapp.
It also uses service workers to display a cached version of the page should the server / internet not be available.

## Instructions 
* Clone or Fork the repository into your local machine.
* Install all the dependencies as mentioned in the package.json file by runing the command `npm install`.
* To lauch the website using Webpack development server, run the command `npm run build-dev`. This command will open the webpage on localhost:8081.
* To build the production version of the website run the command `npm run build-prod`. This will create a new directory named `dist` consisting distribution files for the express server.
* To test the Javascript files present in the client module, run `npm test`. This would run the jest script to verify the functionality of the JS script.
* To launch the webapp on the Node server run the command `npm start`. This would open an instance of the webapp on localhost port 5000.
* To run the NLP API, enter a URL in the input field and press submit.

## Working 
The website runs Natural Language Processing on a News Article using Aylien API. This API returns its findings in the format containing the overall Polarity, Subjectivity, Polarity Confidence and the Subjectivity Confidence of the article.

## Built Using 
* Aylien NLP API 
* Node.js
* Express.js
* Webpack 
* Jest

## Author
Kaushik M. Shetty
