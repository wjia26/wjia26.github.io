---
layout: project
title:  "The Twitter Sentiment Project"
shortname: "TweetVizApp"
date:   2020-08-06 16:31:14 +1100
categories: TweetVizApp
---
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">


Link to the App:[The Tweet Sentiment Project](https://tweetviz.iamwilliamj.com/){:target="_blank"}

## Introduction:
So I did a thing and built a hosted visualization to monitor and analyse tweet sentiment. The App allows you to select from multiple hashtags and allow you to compare the sentiment over time along with other categories I've collected. 

Most of the categories I've picked are related to soccer, the NBA, Countries and Tennis players.

Please feel free to give a whirl and let me know of any feedback.

In due time, I'll make a post detailing how I got it up and running. At a brief summary it's essentially a Lambda Job being run to aggregate results and spit out a word frequency object aswell as the top tweets for that day. This gets dumped into another S3 bucket dedicated to serving the applications data needs.

The App (which is built via Dash-python) then looks at an S3 bucket and pulls down the data thats missing daily.

Using Pre-aggregated results in a dashboard is a must for any datasets that are on the big side. This will make it performant and not needing to excess computation. It comes down to envisioning what you think users want - then implementing a data structure thats minimalist for the application to run ontop of.

## Analysis:
So two interesting things happened over the past week. One being Arsenal winning the FA Cup and Two being that Melbourne is now in Stage 4 COVID-19 Lockdown. Vastly different sentiments - and I would expect to see this reflected in the applications graphs.
Let's See!

## Melbourne Stage 4 Lockdown
[![](/assets/projects/TweetVizApp/MelbourneStage4Example.JPG)](/assets/projects/TweetVizApp/MelbourneStage4Example.JPG){:target="_blank"}

Circled is Melbourne when the [Stage 4 Announcements](https://www.abc.net.au/news/2020-08-05/melbourne-stage-4-coronavirus-restrictions-vs-world/12518376){:target="_blank"} got made. A big downward hit.

## EPL and FA Cup wins
[![](/assets/projects/TweetVizApp/EPLExample.JPG)](/assets/projects/TweetVizApp/EPLExample.JPG){:target="_blank"}

In the green circled - you can see when [Liverpool won](https://www.youtube.com/watch?v=UAixsyx70AM){:target="_blank"} their first Premier League in like 30years. 

In the red circled - that's when [Arsenal won](https://www.youtube.com/watch?v=1B6Fy6sLt-0){:target="_blank"} the FA Cup against Chelsea.

