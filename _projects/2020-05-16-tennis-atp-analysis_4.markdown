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

<!-- You can see that the average ATP tennis match length has gone from around **90 minutes** in 1995 to now **115 minutes** in 2020. Makes sense given the shift to more baseline type rallies and the increased defensive abilities of the modern game. 

What's interesting is that Winner's Age's have gone down but then back up recently. I hypothesize that the game pre-1985 wasn't as competitive as it was post-1985 and thus wasn't as physical. It then started to dip due to more competition but then 2008 onwards players started to become hyper-professional and thus could extend their playing time. This also coincides with a period in which the game, from a tactical standpoint, hasn't changed much - so the incumbents of the game could keep winning with the same old techniques. Watching 2009 Nadal vs. Federer is almost like watching 2019 Nadal vs. Federer with some minor tweaks to their form. Whereas a game in 1999 would look vastly different from one in 2009. Even Federer's game was very different as a junior than it is now. Whereas Nadal's game as a junior is fairly similar to his current playstyle. Essentially, players haven't had to adopt a new way of playing - that's why the winning age has increased. 

Another thing is height, players have generally gotten taller from 1975 to 2020 by about 3cm. Seems that most of the best players have a height around the average height.

In terms of Court Types - we see the hardcourt take up the lionshare of tournaments - with carpet dying out in 2009. It is really interesting that at some point Carpet was a popular surface to play on, with about **24% of matches played on it in 1974**. I wonder if people got insane static shocks at the handshake. Perhaps why they decided to phase it out - it was a health hazard.

According to this quora [post](https://www.quora.com/Why-did-tennis-discontinue-the-use-of-carpet-on-the-WTA-and-ATP-tours) the phasing out of carpet coincides with the homogenization of courts which was spurred on because of how longer thrilling rallies were more exciting to watch. It also made bounces more predictable and effectively encouraged a sort of oligopoly between the Big 3 who have dominated tennis for so long. Having 3 big tennis brands bring in audiences every tennis finals is a huge profiting factor for the sport (in terms of endorsements/sponsorships and attendance). Interesting that profit pushing could have actually made some playstyles and court varities extinct.

I guess at the end of the day - Tennis is also in the entertainment industry, with margins to be kept. But it's crazy how profits can influence the rules which influences how regular people like you and me play the sport aswell. 


### Part II(Second tab in Viz): Debunking the Lefty Advantage Myth + Damn Tall People...
Interesting to see that the **Lefties (not political spectrum) had a winning advantage pre-1985**. Could be because that the lefty players were just inherently better - or people just didn't know how to play against them. However this advantage was effectively neutralized post-1985. According to this [article](https://www.washingtonpost.com/sports/tennis/being-a-left-handed-tennis-player-isnt-the-advantage-it-once-was/2016/05/31/fad2abd2-2740-11e6-a3c4-0724e8e24f3f_story.html), it was because of the advances in racket technology that levelled out the playing field, effectively nullifying any southpaw advantages. In fact, it seems that they actually have a lower winning ratio as compared to Right-handers.

Another thing, is that it seems that height **does** matter (on average)... The difference between winners and loser heights seems to be getting a tad wider with the presence of the next-gen giants like Tsitsipas, Medvedev, etc. The Next-gen game seems to be about just pure physical giftedness - players who are tall as trees that can serve big, move well and hit the ball consistently big. Another reason to rep my fellow more modestly heighted players like Nishikori/Fognini and Schwartzmann. These guys actually have to play out of their mind to stay competitive! There are no free points for them.  -->
