---
layout: project
title:  "ATP Tour Visualized - Tennis throughout Time"
shortname: "TennisAggressionATP3"
date:   2020-04-10 15:32:14 +1100
categories: TennisTableau
---



[Github repo](https://github.com/wjia26/TennisAnalytics)|
[Tableau Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/atp_matches_analysis/ATPThroughoutTime-Part1)

## Preface:
We use Jeff Sackmann's [tennis_atp repo](https://github.com/JeffSackmann/tennis_atp). *P.S. The dude is an actual legend for compiling this data.*


## Method:
1. Pull data from [github repo](https://github.com/JeffSackmann/tennis_atp).
2. Write Logic and aggregate in [Python](https://github.com/wjia26/TennisAnalytics). This one just required me to concatenate all the years of data together.
3. Visualize through Tableau.

## The Final Product:
<iframe src="https://public.tableau.com/views/atp_matches_analysis/ATPThroughoutTime-Part1?:showVizHome=no&:embed=true"
width="850" height="850"></iframe>

## Analysis:

### Part I(First tab in Viz): Will Federer still win when he's 50? Did profit-pushing cause Carpet to die?
You can see that the average ATP tennis match length has gone from around **90 minutes** in 1995 to now **115 minutes** in 2020. Makes sense given the shift to more baseline type rallies and the increased defensive abilities of the modern game. 

What's interesting is that Winner's Age's have gone down but then back up recently. I hypothesize that the game pre-1985 wasn't as competitive as it was post-1985 and thus wasn't as physical. It then started to dip due to more competition but then 2008 onwards players started to become hyper-professional and thus could extend their playing time. This also coincides with a period in which the game, from a tactical standpoint, hasn't changed much - so the incumbents of the game could keep winning with the same old techniques. Watching 2009 Nadal vs. Federer is almost like watching 2019 Nadal vs. Federer with some minor tweaks to their form. Whereas a game in 1999 would look vastly different from one in 2009. Even Federer's game was very different as a junior than it is now. Whereas Nadal's game as a junior is fairly similar to his current playstyle. Essentially, players haven't had to adopt a new way of playing - that's why the winning age has increased. 

Another thing is height, players have generally gotten taller from 1975 to 2020 by about 3cm. Seems that most of the best players have a height around the average height.

In terms of Court Types - we see the hardcourt take up the lionshare of tournaments - with carpet dying out in 2009. It is really interesting that at some point Carpet was a popular surface to play on, with about **24% of matches played on it in 1974**. I wonder if people got insane static shocks at the handshake. Perhaps why they decided to phase it out - it was a health hazard.

According to this quora [post](https://www.quora.com/Why-did-tennis-discontinue-the-use-of-carpet-on-the-WTA-and-ATP-tours) the phasing out of carpet coincides with the homogenization of courts which was spurred on because of how longer thrilling rallies were more exciting to watch. It also made bounces more predictable and effectively encouraged a sort of oligopoly between the Big 3 who have dominated tennis for so long. Having 3 big tennis brands bring in audiences every tennis finals is a huge profiting factor for the sport (in terms of endorsements/sponsorships and attendance). Interesting that profit pushing could have actually made some playstyles and court varities extinct.

I guess at the end of the day - Tennis is also in the entertainment industry, with margins to be kept. But it's crazy how profits can influence the rules which influences how regular people like you and me play the sport aswell. 


### Part II(Second tab in Viz): Debunking the Lefty Advantage Myth + Damn Tall People...
Interesting to see that the **Lefties (not political spectrum) had a winning advantage pre-1985**. Could be because that the lefty players were just inherently better - or people just didn't know how to play against them. However this advantage was effectively neutralized post-1985. According to this [article](https://www.washingtonpost.com/sports/tennis/being-a-left-handed-tennis-player-isnt-the-advantage-it-once-was/2016/05/31/fad2abd2-2740-11e6-a3c4-0724e8e24f3f_story.html), it was because of the advances in racket technology that levelled out the playing field, effectively nullifying any southpaw advantages. In fact, it seems that they actually have a lower winning ratio as compared to Right-handers.

Another thing, is that it seems that height **does** matter (on average)... The difference between winners and loser heights seems to be getting a tad wider with the presence of the next-gen giants like Tsitsipas, Medvedev, etc. The Next-gen game seems to be about just pure physical giftedness - players who are tall as trees that can serve big, move well and hit the ball consistently big. Another reason to rep my fellow more modestly heighted players like Nishikori/Fognini and Schwartzmann. These guys actually have to play out of their mind to stay competitive! There are no free points for them. 
