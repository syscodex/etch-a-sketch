

# Etch A Sketch

Welcome to my Etch A Sketch project, a part of the Odin Project's curriculum. This project involves creating a simple drawing application using HTML, CSS, and JavaScript. The application features a grid of square divs where users can hover over them to draw and interact with the grid.

## Features

- **Dynamic Grid:** The grid is created dynamically using JavaScript, with a default size of 16x16 squares.
  
- **Flexbox Layout:** The grid squares are arranged using flexbox to create a neat and responsive layout.

- **Hover Effect:** Each grid square changes color when the mouse hovers over it, creating a pixelated trail effect.

- **User-Defined Grid Size:** A PROMPT at the top allows users to input the number of squares per side for a new grid, up to a maximum of 100. The existing grid is removed, and a new grid is generated in the same total space.

## Usage

1. Open `index.html` in your web browser to view the Etch A Sketch application.

2. Hover over the grid squares to draw on the sketch pad.

3. Click the "Change Grid Size" button to enter the desired number of squares per side for a new grid.

## Additional Features (Extra Credit)

- **Random RGB Values:** Each interaction with a square randomizes its RGB value entirely, providing a diverse and colorful drawing experience.

- **Progressive Darkening:** Each interaction adds 10% more black to the square, aiming to achieve a completely black square after ten interactions. Although I think it still has a bug it only applies for the black color. Need to get back to it next month.

