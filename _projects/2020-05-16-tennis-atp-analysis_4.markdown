---
layout: project
title:  "ATP Tour Visualized - Who has the best forehand?"
shortname: "TennisBestShots"
date:   2020-05-16 15:32:14 +1100
categories: TennisTableau
---



[Github repo](https://github.com/wjia26/TennisAnalytics)|
[Tableau Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/ATPTourWhohasthebestshots/ShotmakingAbilitybyShotType)

## Preface:
In this project I wanted to confirm some of my suspicions about players best shots through data. You always see people argue about who has the greatest forehand - is it Federer, is it Nadal, is it Del Potro? But none of these claims are backed by **quantitative** metrics. Bar the insane highlights videos, who actually has the best forehand from a statistical sense?

I try to answer this question with some evidence, as well as some more interesting questions along the way.


## Method:
We use Jeff Sackmann's [MatchChartingProject](https://github.com/JeffSackmann/tennis_MatchChartingProject). *P.S. The dude is an actual legend for compiling this data.*

1. Pull data from [github repo](https://github.com/JeffSackmann/tennis_atp).
2. Write Logic and aggregate in [Python](https://github.com/wjia26/TennisAnalytics). 
3. Visualize through Tableau.

## The Final Product:
<iframe src="https://public.tableau.com/views/ATPTourWhohasthebestshots/ShotmakingAbilitybyShotType?:showVizHome=no&:embed=true"
width="800" height="950"></iframe>

## Analysis:
This visualization gives us the ability to sort by any shot type from either side. We can tell who has the best and worst shots of that category. More details about what metric I've used can be read in the description.

### So who actually has the best forehand of all time?
Take a look at the 2nd tab and sort by forehand descending. From an all time perspective - that would be **Pete Sampras**. However, I think given that the game has changed so much since - let's perhaps look at a more modern timeframe - so we're not comparing two different timeframes. Let's ignore some of the previous generation of players like Pete Sampras/Agassi/Courier etc. I sort of just do this manually in my head - can't be bothered creating a grouping for the different generations. You could potentially filter on Year=2004-onwards. However, it's not too accurate as it will always cut out a proportion of a players matches. 

After removing previous gen players out, we can see that big man **Del Potro** gets the top spot - sorry Federer/Nadal fans... I think it's only fair to pay him a small tribute by watching some of his greatest ***hits*** - ohhhh aren't I funny...

<iframe width="560" height="315" src="https://www.youtube.com/embed/ApiUw6YEqr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Alright, what about on the backhand side?
Repeat the exercise for the Backhand side. Doing that yields **Mr. Gasquet** the top spot. With Andre Agassi getting the Top Spot from an All time perspective.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RuDifmMuXm0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Now what about the best Inside-Out FH?
Gotcha covered my friend! Go to the first tab and sort by FH, Inside-out. It's **Fernando Verdasco!** Although he is closely followed up by Nadal and Federer. Who both have devastating Inside Outs.

### Now go away and play around with the data!
Okay enough questions - feel free to play around with the sorting to answer any of your own "best player to have X shot" questions. In the meanwhile, I'll compile a summary list for you to look at. 

You can even look at the worst players in the list! An interesting one is **Ivo Karlovic's backhand** (if you would even call it one...) - supposedly the worst in this dataset. There is a 25% chance the guy will lose the point on his own accord if he plays that shot. Even he [himself regrets](https://www.atptour.com/en/news/ivo-karlovic-one-regret-wimbledon-2018) not learning the double handed backhand which would have given him my stability on the shot. 

### Summary stats (Top 3 from 1-3)
Look at only modern era players (i.e. ignoring the Mcenroes/Sampras/Agassi's etc.) - so that we're comparing same era. We have:
- **Best Forehand Overall:** Del Potro, Nadal, Federer (No Surprises here!)
- **Best Backhand Overall:** Gasquet, Safin, Nadal (Nadal has a really underrated Backhand!) 

- **Best Forehand Cross Court:** Raonic, Del Potro, Berdych (coincedentally all bigmen? - perhaps it's to do with the serve-forehand setup??)
- **Best Forehand Down the Line:** Nadal, Dimitrov, Del Potro
- **Best Forehand Down the Middle:** Roberto Bautista Agut, Khachanov, De Minaur
- **Best Forehand Inside In:** Karen Khachanov, Zverev, Gasquet
- **Best Forehand Inside Out:** [Fernando Verdasco](https://www.youtube.com/watch?v=JXj4HAYTD3M), Nadal, Federer

- **Best Backhand Cross Court:** [Nadal](https://www.youtube.com/watch?v=2ei3z32VqYQ), Safin, Gasquet
- **Best Backhand Down the Line:** Zverev, Nishikori, Monfils
- **Best Backhand Down the Middle:** Ivo Karlovic, Hewitt, Nadal
- **Best Backhand Inside In:** N/A (Data points are too low to be accurate)
- **Best Backhand Inside Out:** [Nishikori](https://www.youtube.com/watch?v=-cr2ncIWYAE&t=88s), Gasquet, Maamoun
