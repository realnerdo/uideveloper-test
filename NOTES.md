## Demo

Here you can see the demo online: [http://realnerdo.github.io/uideveloper-test/](http://realnerdo.github.io/uideveloper-test/)

## Notes

First, let me say that I enjoyed making this, it was fun. :D
I like widgets, the idea of a small experience focused in one task (Purchase a product in one click).

### Inspiration

Like most designers, I'm browsing dribbble, behance, Muzli and many other sites everyday. This time I decided to make it with the diffuse shadow trend. I like shadows when you use them like that. I took inspiration from this post from Muzli: [Long shadow is dead. Welcome Diffuse shadows](https://medium.com/muzli-design-inspiration/long-shadow-is-dead-welcome-diffuse-shadows-6a1f2ee9a6fe#.2srwr2ey0)

I also loved the background of this dribbble shot: [Product Item Card](https://dribbble.com/shots/2226739-Day-002-Product-Item-Card/attachments/413975)

### Design

I came up with this design:

![Selz Widget](dist/img/screen.png)

And here's the Sketch file in case you want to take a look: [Dropbox Link](https://www.dropbox.com/s/59zlfy8r2u3rvn7/Selz%20Widget.sketch?dl=0)

When I was designing this I was noticing that the credit card logos were taking a lot of space and they could be distracting or make the design too crowded for the user to focus on the "Buy it now" button. I wanted the purchase button to be on the bottom left corner so it's easily clickable. So I put the small logos above the button with the leged "100% SSL Secure. We accept" and the "Powered by Selz" legend as well. There wasn't a guideline for a quantity field, but I decided to add it to the design becasue I wanted the user to be able to buy more than one product right there and then.

I noticed that when the responsive layout changed to portrait, the credit card logos and the legends were too distracting so I move them below the purchase button using flex order in css. I also opted for including both sizes of the product image and show the correct one with a breakpoint and "display:none" in css.Some browser versions load this images when they're not displaying but browsers are getting smarter. Today your browser (depending on the version) might skip the image loading if it can determine it's not useful. I could use other method like a figure tag and add breakpoints as media attributes but I liked "display:none" in my css to have the responsiveness controll in my sass variables. 

### Technologies I used:

- **Gulp** This makes my life a lot easier. I like to automate everything I can, uglify code, prettify code, browserify code, etc.
- **Jade** I'm very quick at opening and closing html tags, but I'm a lot faster when I use jade.
- **Sass** The same feeling goes to sass, the ability to create mixins, functions, variables, etc., keeps everything fun.
- **Browseify** I use this when I don't use bower, both of them are cool, but if I'm already using npm for gulp and dev stuff, I might as well be using browserify for my packages like jquery, handlebars, etc.
- **Handlebars** It's just a lot cleaner to make themes and templates without any programming logic in the templates.
- **JQuery** I can totally code in pure vanilla Javascript, but for this and to make it quick I prefered to use the good old JQuery
- **SVG** I decided to search for my own svg icons and make my own sprite, with a gulp task, so I can have a little more control.

### Final thoughts

I enjoyed this test, I love UI and UX. It took me a little bit longer than usual to finish it because I was experimenting a lot. I was browsing your [demo store](http://store.sampotts.me/) and I like how it looks, it's kind of my style as you can see in my [portfolio](http://realnerdo.com). I think I can make great themes with great UI for Selz. Whatever I have to learn I can do it with no problem.

Thank you for reading and your time. I'm looking forward for your response.

Regards,

Asael Chavez
