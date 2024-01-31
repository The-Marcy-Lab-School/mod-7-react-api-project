# React and 3rd Party API Project

- [React and 3rd Party API Project](#react-and-3rd-party-api-project)
- [Welcome!](#welcome)
- [Overview](#overview)
  - [APIs and Keys](#apis-and-keys)
  - [Deployment](#deployment)
- [Timeline](#timeline)
- [Tech Checklist](#tech-checklist)
  - [Project Fundamentals](#project-fundamentals)
  - [React Fundamentals](#react-fundamentals)
  - [Advanced React](#advanced-react)
  - [Style](#style)
  - [A11y](#a11y)

# Welcome!
Hello everyone, it's been a whirlwind, but believe it or not you know more than enough to get your React project started! You've already built projects just like this one using Vanilla JS, the whole idea behind this one is that you'll see how much faster and farther you can build when you use a tool like React.

# Overview
Your app will have to use a third party API to fetch data, but instead of only 2 fetches, you'll have to make 3! And unlike your previous projects that all took place behind the same url, this time you're going to use client side routing! And while it may not be everywhere, use must use context at least *once* in your app. Also, even if it feels contrived we would like to see at least 2 forms on your site. One controlled and one uncontrolled. We fully understand that *may* be clunky, we just want to see if you can do it.

There are of course more specifics below in the check list, but at its heart, all we're asking for is an app that makes 3 fetches, made with React, and uses client side routing and also context.

## APIs and Keys
Once again, this is not about APIs, so please use a free API and one without keys. **WE STILL WILL NOT ALLOW YOU TO POST PRIVATE API KEYS IN A PUBLIC GITHUB REPO.**

But that doesn't *technically* mean you can't use API keys. If you are absolutely dead set on using a specific API, you know enough to use them *properly* now, it will just require something called a "Proxy Server." You can build one with Express!

Now, is that more complicated? Yes! But if you're up to the challenge, it would be a great opportunity to play around with everything. Just don't get distracted, we're not giving *any* notice to this proxy behavior, we are solely looking at your React skills.

## Deployment
Because we're using client side routing deployment may be a little trickier than usual.  We'd like you to deploy this project, so it's up to you to research the various ways to get your app out there.

# Timeline
This one is up to you! But here's the catch: we'll hold you to it. You've done a bunch of these projects by now, so you should know about how much work you can get done in a week. You know what we're expecting you to get done by the end (3 fetches, multi-page routing, React), so you can work backwards from there.

**Before you start your project, you'll have to submit the deadlines you think you can hit**. Don't go crazy! This exercise is about setting *realistic deadlines for your team*. It's always better to under promise and over deliver. Now, that being said, your timeline has to be approved (you can just do it all in one night), so really think about what you'll do.

Make sure you look over the entire project and think about what will take you time

# Tech Checklist

## Project Fundamentals
- [ ] Used Vite for this project
- [ ] Used React
- [ ] Used React Router for client side routing
- [ ] Used Context at least once
- [ ] Made a fetch to get multiple resources
- [ ] Made a fetch to get a single, specific resource
- [ ] Made a third fetch for whatever you want
- [ ] **Were able to get it deployed in a functional state**


## React Fundamentals
- [ ] Created at least 3 components
- [ ] Have all components in their own files (1 export per file)
- [ ] Passed props to a component at least 3 times
  - [ ] 2nd check box
  - [ ] 3rd check box
- [ ] Used the useState hook at least 3 times
  - [ ] 2nd check box
  - [ ] 3rd check box
- [ ] Used the useEffect hook at least 2 times
  - [ ] 2nd check box
- [ ] Handled at least 2 non submission events with React syntax
  - [ ] 2nd check
- [ ] Handled form submission event properly with React syntax
- [ ] At no point did you ever use any vanilla DOM JS methods
- [ ] Rendered an array of items to the screen at least once

## Advanced React
- [ ] Used the useContext hook at least once
- [ ] Had at least 2 different pages in the application
- [ ] Used the proper `Link` components to navigate between pages
- [ ] Used the useParams hook at least once
- [ ] Demonstrated an working controlled Form
- [ ] Demonstrated an working uncontrolled Form
- [ ] Lifted state up out of a component at least once
  - That is a fancy way of saying that you had the state of a component and then passed down the getter and setter functions for the hook to a child component. You've seen us do this!

## Style
- [ ] Used Flexbox or Grid to style list of components
- [ ] Navigation bar fits cleanly on mobile and desktop
- [ ] Site has a primary color
- [ ] Site has a secondary color
- [ ] Site has an accent color
  - This is for things like buttons, links, etc.
- [ ] A maximum of 2 different fonts were used on any one page
- [ ] Buttons have altered visual states for hover, active, and focus
- [ ] Links have altered visual states for hover, active, and focus
- [ ] Repeated elements have a consistent "card" style
- [ ] Navigation visually indicates what page you are on
  - Think underlines, bolding, etc. this should change as you move around the site

## A11y
- [ ] There is a `main` element on *each* page
- [ ] There is a `nav` element on *each* page
- [ ] The `nav` contains a `ul` of links
- [ ] At least one `h1` element on *each* page
- [ ] At least one `section` is used properly on *each* page
- [ ] Heading tag hierarchy is always correct
- [ ] `div` is never used in place of `ul` and `li`
- [ ] Every `form` `input` has a proper `label`
- [ ] Each `form` is `aria` labelled properly to make it a landmark
- [ ] Every `img` has a unique `alt` (if applicable, get points if no image)
- [ ] All colors have a AAA difference
  - https://color.a11y.com can check your site for you!
- [ ] All buttons look like buttons, all links look like links

