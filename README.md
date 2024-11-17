# FAQ-Accordion: <a target="_blank" href="https://faq-challenge-frontend-mentor.netlify.app/">Visit Here</a>
 
<a href="https://faq-challenge-frontend-mentor.netlify.app/" target="_blank">
<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRrMnFwMDM1eGtheGtqaTQxOTk4d2gzaXIzdjFjZ2o5NGlwczFyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7lOKCW4cuuAoXCpzz0/giphy.gif" width="100%" alt="faq-accordion"/>
</a>
 
### FAQ ACCORDION - FRONTEND MENTOR CHALLENGE

## Tech used: ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)

The project is a responsive FAQ (Frequently Asked Questions) page, designed to provide an interactive, user-friendly experience for visitors. 

## What I'm Most Proud Of:

Responsive Design: The FAQ section adjusts well to different screen sizes, ensuring a smooth experience on both mobile and desktop.
Interactive Toggle: The FAQ answers toggle correctly with both mouse clicks and keyboard interactions, improving accessibility.

## What I'd Do Differently:

Refine Animations: Use max-height transitions for smoother answer expansion.
JavaScript Scalability: Refactor the JavaScript to make it more dynamic and adaptable to additional FAQ items.

## Challenges Encountered:

**Responsive Design:**

Challenge: Ensuring the FAQ section looked good on different screen sizes was tricky, especially when adjusting widths and maintaining a clean layout for mobile and desktop views.

Solution: I used CSS media queries to set dynamic widths and adjust the layout based on screen size. I referred to YouTube tutorials for best practices on responsive design and learned how to structure the container to scale properly across devices.

**Interactive Toggle:**

Challenge: Implementing the accordion-style toggle with smooth transitions while ensuring only one FAQ answer was visible at a time was difficult. I also wanted the toggle to work with both mouse clicks and keyboard interactions.

Solution: I used JavaScript to add a click event listener to the buttons. I looked up accordion patterns in YouTube tutorials and applied them to toggle the class for visibility. To improve accessibility, I added keyboard support (e.g., Enter key), which I learned through ChatGPT's guidance.

**Using .focus() for Keyboard Interactivity:**

Challenge: Making the first button focusable on page load, especially with dynamic content like FAQ sections, was tricky to implement correctly.

Solution: I used the DOMContentLoaded event to ensure the button gained focus as soon as the page was loaded. To get the implementation right, I referred to YouTube tutorials on how to manage focus in interactive web elements, and I used ChatGPT to clarify the syntax and logic.




