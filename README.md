# kidedu

It allows to generate different math exercises for toddler 2-5 years ready to A4 Landscape print.

## Features

On each start, the software automatically generates all types of exercises and fill them tasks randomly.
There are types of exercises:

* Counting. Allow to count different object the same color by set range;
* Counting only animals, birds and humans;
* Dashed shapes ready to draw;
* Dashed digits ready to draw;
* Patters. It is a combination of diffident object, but maximum 3 in a row. They are 2 kinds:
  * The same object but with difference for color, for example, pink and orange triangles;
  * Different objects, for example, panda, green circle and yellow square;

Every page contain many exercises, but only the same type.

## Usage

To start, open the index.html file in your browser and it will randomly generate the exercises. You should just print them and give to your kid!

## Technical Decisions

* I use JavaScript, because of it perfectly aligns my needs: just ready-to-print A4 pages with images and the vanilla one, because of I don't need any complex things;
* I use ES2015 implementation with classes, extending, factories, properties, because of it is very convenient, transparent and allow me write less code;
* I use ready SVG images and created my own SVG images on the fly using embedded SVG functions, in case of I need scale them (in future versions);
