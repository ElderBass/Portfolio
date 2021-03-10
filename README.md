# Responsive Portfolio with React

A personal, responsive portfolio made with React, by Seth Zygarlicke.

# Purpose

This is a refactoring of the responsive portfolio we did as our second homework assignment, this time converting that HTML code into a React format. We were tasked with creating a React app with the appropriate file/folder structure and component architecture that would be an identical copy of that first portfolio we made.

# Description

There are three "pages" associated with this repository. The first - Contact - consists of a container holding input forms for Name and Email, and an extra Message box. There is also a Submit button beneath these inputs, however this does not actually function. The second page, called About, consists of a container labeled 'About Me', with a picture of Seth and some descriptive text about him, wrapped around the image. It also contains some links to his relevant social media profiles. The third page, named Portfolio, also has a container holding a series of photos.

All of these pages have been formatted with the Bootstrap grid system to change layouts in response to different screen sizes. For example, the main containers in each of these pages will switch from taking up 75% of the page on large screens, to 67% of the page on medium screens, to 100% of the page (with neat margins, of course) on small screens. 

All of these pages have a Navbar that is also responsive. Namely, the Navbar will show the nav items in their entirety on large screens. However, for medium and small screens the nav items will collapse into a dropdown bar. Every page also contains a footer.

# Technologies

This portfolio was developed as a React app, and as such it ported along all of the React dependencies necessary to run the application. 

An additional package used was "react-router-dom". This allowed us to "route" to different "pages" on the app in order to render different components when a user navigates the site. We specifically used the HashRouter component of this package to make this happen.

The gh-pages package was used to deploy this application to Github pages.


# Links:

https://github.com/ElderBass/React-Portfolio.git

https://elderbass.github.io/React-Portfolio/