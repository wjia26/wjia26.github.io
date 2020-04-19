---
layout: post
title:  "AB Testing - Tips"
date:   2020-04-19 12:32:14 +1100
categories: Reflections
---

{% include image.html url="https://images.ctfassets.net/zw48pl1isxmc/4QYN7VubAAgEAGs0EuWguw/165749ef2fa01c1c004b6a167fd27835/ab-testing.png" description="A vs. B who wins?" width=400 %}

Just wanted to share some of my experiences doing AB Testing and optimizations in the app space.
My current company has for the best part of a year or so, has adopted an AB testing framework with Optimizely being at the tool of choice. 
It's been cool to see the experimentation mindset grow and be able to finally quantify how changes can impact the services we provide to our customers. 
I have a few learnings that might be useful to people conducting tests - espeically those in the early stages of putting together an experimentation plan.

## 1. Understand the product you'll be testing - thoroughly
Ensure that Product gives you what the changes will be and how they think it will improve the product. You will need to spend sometime playing around with a demo
to get a feel of where and how you should be tracking your customers. This will allow you to ask questions to Product to get to the root of why this feature is important.
Providing some quant. figures is also really great to bolster the hypothesis that the test will outperform in some metric. 

## 2. Have a place to log your results:
Confluence is probably the best way to do this. Any company wide doc system should do though. Doing this allows everyone to go back retroactively to see what things have
worked and what hasn't. If there's a test done already for the type of change Product is going to implement - you can use it as evidence to iterate upon your design.

## 3. Not all companies need to AB test.
AB testing really is only useful for established players with a large enough customer base who interact with the product. 
Such established players have already carved out their niche and stakeholders already have concrete OKR's that they need hit.
Plus AB testing relies on experiments having a large enough sample size for each variation and a high enough conversion rate for any test to be meaningful.
Not to mention the slight overhead it will put on your development efforts.
The key thing here is that it is ~~optimization~~ we're looking at doing - not ~~transformation~~. 
If you're a startup that's still pivoting every couple of months then AB testing isn't going to do much - you should first try to find your niche and when you get big enough
only then consider running tests. 

## 4. Get an AB testing tool (or build one):
If you're serious about doing testing you should spend time building one out or spending $$$ in getting a tool like Optimizely.
I can attest that manually sifting through data - filtering outliers and calculating statistical significance is not the most fun thing to do after you've done it like 5 times.
Getting a tool means freeing up Data peoples time to craft more precise experiments.

## 5. Still understand the math behind AB Testing - even if you have a tool:
Understanding the stats behind AB testing will give you intuition behind how factors like conversion rates,sample size, number of variations and time all interplay with each other.
As an Analyst you'll still need to provide the parameters to conducting a successful test - this means knowing how long to run it for and approximating the traffic required to get meaningful results/
My personal AB-testing handbook has been [Evan Miller's website](https://www.evanmiller.org/ab-testing/). He is extremely rigorous with his explanations and will give you the foundations for how to properly conduct test.

## 6. Be precise in your metrics definitions and ensure tracking logic is correct:
This is probably the most important thing as an Analyst to do. Your job is to take a vague statement like "Improve User Experience on Search"
and working with Product to translate it into 3-5 key numbers that are measureable from a technical standpoint. 
From those 3-5 numbers you should pick one that matters most to that Product - this will be your primary metric.
You will then need to consult with developers to find out if it's an easy thing to implement - if you have an server-side implementation that is. 
There have been times where I've received push back to track certain things because it was just a technical pain to implement. You'll have to work out whether or not
it's crucial to have it there - most of the times, if it's not your primary metric you can afford to let it go.

## 7. Getting all teams involved.
First experimentation to work well in a company - it has to be ingrained into the culture. That doesn't mean testing every possible thing under the sun.
That will seriously piss off the development team. But it's about educating everyone to why it is important and when to run such experiments.
The first couple of experiments will always be a pain and take ages to setup - you might even doubt whether or not it's useful. 
But once everyone gets used to it, developers have implemented it in a way that's scalable and Product starts realizing the benefits to seeing 
what effect they are having on short term metrics - you'll start getting buy in.

## 8. Be absolutely non-biased when discussing results.
Sometimes people will have biases to expecting a certain variation to work out over the control. This may influence how you are discussing the results when presenting 
back to stakeholders - particularly if it the results are not to expectation. Given that your event tracking is correct and methodology sound, you should always just
tell it like it is. If somethings not working out or not significant a difference you need to just say that. Inconclusive or unexpected experiments that go against the hypothesis
are will always come about - you shoudn't feel obliged to doubt the results just because it's going against people's biases. You have to be the arbiter of a harsh reality sometimes.



