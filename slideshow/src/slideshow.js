// This is all the images to be showed in the slideshow
import weird from './images/weird.jpg';
import pinkfl from './images/pinkfl.jpg';
import shrek from './images/shrek.jpeg';
import bear from './images/bear.jpeg';
 
// Arrows for the slideshow
import leftArrow from './images/angle-double-left.svg';
import rightArrow from './images/angle-double-right.svg';

//Dot icon under the slideshow
import dot from './images/circle.svg';
 
const slideshow = (function () {
 
    // An array of all the images to include in the slideshow
    const imagesArray = [weird, pinkfl, shrek, bear];

    // Get the slideshow element to query on demand
    const slideshowDiv = document.querySelector('#slideshow');

    // Plug the arrows to the board
    const leftArrowImg = slideshowDiv.querySelector('#left-arrow');
    leftArrowImg.src = leftArrow;

    const rightArrowImg = slideshowDiv.querySelector('#right-arrow');
    rightArrowImg.src = rightArrow;

    // Handles UI changes for active dots
    function setActiveDot(dot) {
        // Query the dom to find the active dot
        const activeDot = document.querySelector('img.active');

        // If there is not, just set the new one active, otherwise swap them
        if (activeDot === null) dot.classList.add('active');
        else {
            activeDot.classList.remove('active');
            dot.classList.add('active');
        }
    }
 
    // Given an index, sets slideshow to that image
    function setImage(index) {

        // Have a look at the length of the pictures array
        const arrayLength = imagesArray.length;

        // If user is trying to perform an illegal action, do nothing
        if (index < 0) return
        else if (index === arrayLength) index = 0;

        // Otherwise, update the data-picture attribute
        // And change the background to the new image
        slideshowDiv.setAttribute('data-picture', index);
        slideshowDiv.style.backgroundImage = `url(${imagesArray[index]})`;

        //Activate the proper dot
        const dotsList = Array.from(document.querySelectorAll('#dots img'));
        const theOneTrueDot = dotsList[index];
        setActiveDot(theOneTrueDot);
 
    }

    // This function returns the current picture displayed
    function extractCurrentPicture() {
        return Number(slideshowDiv.getAttribute('data-picture'));
    }
 
    // Adds events for the arrows
    function arrowEvents() {

        //Left arrow event
        leftArrowImg.addEventListener('click', function() {
            setImage((extractCurrentPicture() - 1));
        });

        //Right arrow event
        rightArrowImg.addEventListener('click', function() {
            setImage((extractCurrentPicture() + 1));
        });
 
    }
    
    // Creates dots under the slideshow
    function createDots() {

        // Create the container for the dots
        const dotsDiv = document.createElement('div');
        dotsDiv.setAttribute('id','dots');

        //This creates as many dots as there are images
        for (let i = 0; i < imagesArray.length; i++) {

            const newDot = document.createElement('img');
            newDot.src = dot;
            newDot.setAttribute('data-picture', i);

            newDot.addEventListener('click', function () {
                setActiveDot(newDot);
                setImage(i);
            }); 

            dotsDiv.appendChild(newDot);
        }

        // This would normally place this at the end of the page
        // Swap it out with insertBefore when you have other elements in.
        document.querySelector('body').appendChild(dotsDiv);
    }
    
    //Gets everything working when the page loads
    function initializeCarousel() {
    createDots();
    setImage(0);
    arrowEvents();
    }

    initializeCarousel();
})();
 
export default slideshow;