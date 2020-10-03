---
layout: project
title:  "ATP Tour Visualized - How Pressure affects Win-rate"
shortname: "TennisAggressionATP2"
date:   2020-03-20 15:32:14 +1100
categories: TennisTableau
---
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">


[Github repo](https://github.com/wjia26/TennisAnalytics)|
[Tableau Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/ATPTour-AggressionandPressure/HowPressureinfluencesAggressionandWin-rate)

## Preface:
Part Two of using the data from the [MatchChartingProject](https://github.com/JeffSackmann/tennis_MatchChartingProject). 


## Method:
1. Pull data from [github repo](https://github.com/JeffSackmann/tennis_MatchChartingProject).
2. Write Logic and aggregate in [Python](https://github.com/wjia26/TennisAnalytics). In the github you can see I had to transform the data and clean it a bit to get it fit for purpose.
3. Visualize through Tableau.

## The Final Product:
<iframe src="https://public.tableau.com/views/ATPTour-AggressionandPressure/HowPressureinfluencesAggressionandWin-rate?:showVizHome=no&:embed=true"
width="850" height="850"></iframe>

## Analysis:
There are two visualizations in this dashboard.
1. Aggressive playing styles throughout time.
2. How win-ratio and aggression get affected by pressure points.

### 1. Aggressive Playing styles throughout time.
There are four metrics I plot to measure Aggressiveness:
1. %Won by Rally Aggression - This means out of the Rallies played, what is the percentage that are won by Aggression. Winning by Aggression means either hitting a winner or causing a forced error.
2. %Won by Rally Winner - Percentage of Rally points won by hitting a clean Winner.
3. %Won by an Unreturnable serve. 
4. The Average rally Count. 

Data for these graphs are aggregated from all players in this dataset. There should be enough points each year to give a somewhat accurate representation of the playstyles of that year. I've chosen to cut years prior to 1983 because the data was too noisy and would most likely not be representative.

You can see that Rally Aggression and Winners have trended downwards. This could be attributed to the increased levels of defense, the slowing of modern day courts and changing technology of tennis gear. This has shifted players to become power baseliners with solid defense in favour of the ye olde traditional aggressive mindset of finishing points off at net. Watching the difference in game play between 2000 and 2008 and you can see how much tennis has changed. 

#### 2000 Wimbledon Final - Pete Sampras d. Pat Rafter
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/rA2RoFiY9_A' frameborder='0' allowfullscreen></iframe></div>

#### 2008 Australian Open Final - Novak Djokovic d. Jo-Wilfried Tsonga
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/N9RJ0I9Ivhs' frameborder='0' allowfullscreen></iframe></div>

Another trend you might be able to spot is the run up in Unreturnable serves from 1988 to 1995. Pete Sampras definitely would have had something to do with this - but more broadly people started to serve way faster with more lighter head heavy rackets. Courts were also still really fast back in the day.


### 2. Switching to the 2nd sheet: How Pressure influences Aggression and win-rate.
In this one we plot the deviation away from a players overall win-rate and aggressiveness when they get exposed to a pressure situation. In this way we can normalize for how good the player is. If not , we'd just keep seeing Djokovic, Federer and Nadal to have the best metrics. 

Pressure Points are Game/Set or Match Points.

Pressure situations can present themselves when the player is a Server or Returner and when the player is attempting to win or save the pressure point. Example: If the Player is in the serving position and attempting to save the point that essentially means they are trying to save break point as a server.

The solid lines mark zero deviation away from the players regular metrics where as the dotted line represent the average for the entire cohort of players.

In the Return case - when a player is attempting to save a pressure point they play 3.7% more aggressive and win 1.4% less.
When a player is attempting to win a pressure point they play 2.4% less aggressive and win 3.1% more

In the Serve case - when a player is attempting to save a pressure point they play 1.9% more aggressive and win 2.6% less.
When a player is attempting to win a pressure point they play 1.7% less aggressive and win 1.8% more

Seems that both cases yield similar effects with returning under pressure affecting the player more. 
Sounds like playing to win has more of a positive effect on win-rate but causes the player to play more conservatively on average. 

#### Verifying my suspicions that Djokovic goes all out when he's trying to save pressure points. 
Search for Novak Djokovic under the filters: Returner and Save.
The guy has a 10.7% increased aggressiveness when he's down. His win-rate is 1.2% lower than his usual - however it is still above the player average of 1.4% lower.
No wonder Federer has nightmare's about going 40-15 Match point against him.

#### 2011 US Open Semifinal - Novak Djokovic d. Roger Federer

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/BpO4s99UVCE?start=5097' frameborder='0' allowfullscreen></iframe></div>

I cry everytime I watch this one... along with 2010 US Open and 2019 Wimbledon.
