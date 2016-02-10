# Selz UI Developer Test

Design and build a product widget that displays the following information: 

- Image (responsive)
- Title
- Description
- Price (and regular price)
- Quantity left
- Button using localised linktext
- Payment logos based on flags

## JSONP endpoint
To grab the widget's item data, you can use the following endpoint from our embed code:

```
https://selz.com/embed/itemdata?itemurl=http://selz.co/1rvbgi3&callback=callback
```

## Guidelines

#### Design

- The design is a blank canvasdist - we're keen to see what you come up with

#### Development

- Your code must be semanticly correct, free of bloat and accessible with comments where necessary
- Make sure your code is well formatted - you can use tabs or soft tabs, just as long as it's well formatted and easily read
- Use variable and class names that are meaningful 
- You can use jQuery or "vanilla" JavaScript - bonus points for using the later
- You can use LESS or SASS but please include the source files (in /src)
- Your widget must work on latest Chrome/Opera/Safari/Firefox and IE10+
- You must consume the data from the JSONP endpoint above
- You can use our SVG sprite or create your own
- The widget must be responsive
- You don't have to use Gulp or Grunt to build and compress your output but it would be good to see - if you do, please include your gulpfile.js or Gruntfile
- We've included a suggested folder structure

## Example
Here's our current product widget:

![Example Widget](https://cldup.com/F0xluFG_CL-3000x3000.png)

## Submitting
To submit your test, fork this repository and then when you're ready do a pull request and we'll check it out.

If you have any questions, drop me an email to [sam@selz.com](mailto:sam@selz.com)