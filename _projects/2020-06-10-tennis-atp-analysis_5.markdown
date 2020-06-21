---
layout: project
title:  "ATP Tour Visualized - Nishikori the Backhand Assassin"
shortname: "TennisBestShots2"
date:   2020-06-10 15:32:14 +1100
categories: TennisTableau
---
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">


[Github repo](https://github.com/wjia26/TennisAnalytics)|
[Tableau Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/ATPTourPlayerShotSelection/FinishingShotOverTime)

## Preface:
Pretty similar to my previous project where I find out who has the best shots. In this one I identify players tendencies to end points with a particular shot and highlight that have tendencies that lie way outside the norm.

*Note: The term "Finishing Shot" is used to describe a shot that is either a winner or induces a forced error for the opponent. I will also use the abbreviations FH/BH to denote Forehand/Backhand.*


## Method:
We use Jeff Sackmann's [MatchChartingProject](https://github.com/JeffSackmann/tennis_MatchChartingProject). *P.S. The dude is an actual legend for compiling this data.*

1. Pull data from [github repo](https://github.com/JeffSackmann/tennis_atp).
2. Write Logic and aggregate in [Python](https://github.com/wjia26/TennisAnalytics). 
3. Visualize through Tableau.

## The Final Product:
<iframe src="https://public.tableau.com/views/ATPTourPlayerShotSelection/FinishingShotOverTime?:showVizHome=no&:embed=true"
width="800" height="850"></iframe>

### Finishing Shots Over Time (1st Tab):
This shows you the trend of how players have liked to finishing shots off over time. One noteable trend is the increase of players employing the inside-out FH. The NY Times has an excellent piece on this [phenonemon](https://www.nytimes.com/2015/09/07/sports/tennis/inside-out-forehand-is-now-the-most-devastating-shot.html). 

It probably has to do with players movement becoming so adept that they can run around the backhand to produce an insanely angled forehand which rips the opponent away from the court. With balls bouncing higher than ever, due to heavy topspin and the slowness of the courts - players would find hitting the Inside-Out much more natural rather than waiting to cop a high backhand, which is such an awkward shot to hit with pace. Hitting a high inside-out forehand is sort of like a topspinned smash with surprisingly high margin for error because you're hitting the ball from so high above the net. In the article Federer is even quoted saying that: *"If you ask guys what their favorite shot is, a lot would say the inside-out forehand.”*

### Finishing Shot Distribution(2nd Tab):
Here we explore the different shot distributions of players in the dataset. The grey line for each bar indicates the average for all players in the tour, so a bar thats above the average would indicate a higher tendency than the average player to hit a particular shot. Let's go through a couple of examples.

First one I'd like to point out is **Jack Sock** - go ahead and filter "Player Making Shot=Jack Sock". Look at that guys Inside out Forehand Percentage. It's a staggering 40%. That means if Jack Sock hit's an unreturnable shot - it's 40% likely it going to be an Inside-Out forehand. That's insane. It also turns out that hitting Backhand winners are like brussel sprouts for Jack. I think he's more of a Meat (Forehand) and Potatoes (Serve) sort of guy. He hits almost double the amount of IO FH than the average player on the ATP tour. What's dangerous about this style of play is that it gets predictable and players can start targetting areas of your game which have gaping holes in them.  
<iframe width="560" height="315" src="https://www.youtube.com/embed/pj77mJJ5sUM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
I love this comment I found on this youtube video. Definitely epitomizes his affinity for the Forehand.
{% include image.html url="\assets\projects\TennisBestShots2\JackSockYTComment.JPG" description="So True..." width=350 %}

Another one is **Nishikori**. I think in our previous analysis, we saw Nishikori having one of the **best backhands of all time**. And looking at his shot distribution it's no wonder the uniqlo ambassador loves to finishing shots from that side. He consistentally finishes higher than average on all BH shots. However, unlike Jack on the forehand he hasn't sacrificed his other half of the game nearly as much. I do think however, it is harder to neglect the forehand than it is the backhand. 

With Nishikori there's just something about the way he hit's through the shot that makes it seem to solid and brutally quick. He also deals with the high ball quite well given he's not the tallest of players and also able have people on a string by pull them in all sorts of directions.
<iframe width="560" height="315" src="https://www.youtube.com/embed/7rXMiqucnxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Finishing Shot Dist. Table (3rd Tab):
Have a play around to see if any of your favourite players favour a particular shot!
### Unforced Errors Table (4th Tab):
In this one lower is better. A couple of statistics stick out here. First one is **Rafa's Crosscourt forehand**. It is by far the most consistent in the current era at about a 4.7% error rate. 2nd best would be Djokovic at 6.7% - already a 2% differential. The insane amount of topspin gives him the high margin of error - furthermore, Nadal often uses the crosscourt as a setup shot to pull players out of the court before employing the Inside Out Forehand killshot.



