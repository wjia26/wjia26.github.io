---
layout: project
title:  "ATP Tour Visualized - Aggressive Playing Styles"
shortname: "TennisAggressionATP"
date:   2020-03-01 15:32:14 +1100
categories: TennisTableau
---
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">
<meta property="og:type" content="article" />

[Github repo](https://github.com/wjia26/TennisAnalytics)|
[Tableau Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/ATPTour-PointsAggressionvs_Winners/ATPTour-PointAggressionvs_Winners)

## Preface:
I'm a bit of a tennis nut. In fact I'm probably watching tennis highlights right now as you read this thing. 

Now, I'm quite particular about who I like to watch and which tennis players I take a liking to. I generally prefer a more aggressive brand of tennis. Those who dare take massive cuts at the ball, bum-rush the net and do all sorts of things in order to get it passed the opponent. Players like Marat Safin/Federer/Dustin Brown come to mind. I'm NOT a fan of those who push the ball - waiting for the mistakes of others. I would put Djokovic/Murray and Gilles Simon in this camp. 

I wanted a way to quantify this aggressiveness that I like so much and perhaps see visually why I enjoy certain types of players - which meant I needed access to a sample of points played from each player throughout time.

I stumbled across this awesome project called the [MatchChartingProject](https://github.com/JeffSackmann/tennis_MatchChartingProject) a couple months back.
It contains a subset of matches played from 1970-2020 - providing data at the point-by-point level. 

Let's put it to good use.

## Method:
1. Pull data from [github repo](https://github.com/JeffSackmann/tennis_MatchChartingProject).
2. Write Logic and aggregate in [Python](https://github.com/wjia26/TennisAnalytics). In the github you can see I had to transform the data and clean it a bit to get it fit for purpose.
3. Visualize through Tableau.

## The Final Product:
<iframe src="https://public.tableau.com/views/ATPTour-PointsAggressionvs_Winners/ATPTour-PointAggressionvs_Winners?:showVizHome=no&:embed=true"
width="850" height="850"></iframe>

## Analysis:
On the y-axis you have the % of points won by aggression and on the x-axis we have % won by winner. As you can see it's nicely correlated.
I've also plotted the average aggression and winner percentages as two intersecting dotted-lines. Winning by aggression consists of either forcing an error or hitting a winner.

Now let's understand what the quadrants mean. 
1. Top right means that the player hit's high amount of winners and is aggressive in rallies
2. Bottom right means that the player is generally passive but still manages to hit alot of winners.
3. Bottom left means that the player is passive and doesn't hit alot of winners
4. Top left means that the player doesn't outright hit winners, but gives the opponent alot of pressure.

There's also some cluster analysis which I did in Tableau which uses k-means clustering to group players up into groups. Hyper-Aggressors to Pushers.

Looking at where the players are located on this graph it starts to make a bit more sense (only if you watch tennis on the regular). 
Roger Federer is classified as an aggressor - with neighbours including Marin Cilic and Tsonga. All of which I enjoy to watch. 

Some extreme cases include players like Dustin Brown and Benoit Paire. Who are both confirmed nut-cases. Just take a look at some of their highlights.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ewdkNxC4XV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/xu9q_jGiwk8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Dustin is more consistentally aggressive whereas Benoit sort of suddenly comes out of nowhere and bangs a winner.

### On the Boring end of things:
Djokovic, Murray and Nadal are fairly close together - grouped as Defenders. Typical as they don't really take too many risks and play it safe. This is sort of the reason why I like Federer so much. To have that amount of success playing entertaining and aggressive tennis. 


### Big Servers
Ivo Karlovic is probably up there because he serves and volleys most of the time. He also has a massive serve which sets up his 2nd shot to be a winner. I don't think he has the luxury of playing defensive being that lanky. 

### Ye Olde Serve Volleyers:
You sort of see them bunched up near the top right. Edberg/Sampras/Rafter/Becker. All had big games and always looked to come to the net to finish the opponent off.
Apparently Mark Phillippoussis had a huge game aswell. 


### ~~Pushers~~ Counterpunchers:
Medvedev/Coria/Hewitt/Ferrer all belong here. There main strength is putting the ball back in play in any circumstance. Not the best eye candy but always make for some tense 10hour matches. 

### The Dichotomy of a Tennis Player through time:
If you use the Year Bracket filter to see the spread throughout time. You can see that there were more stark differences in how people played back in the day as opposed to now. 

Nowadays players are becoming more the same (except for a hand few) so there's less of a dichotomy.


<!-- 
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/ -->
