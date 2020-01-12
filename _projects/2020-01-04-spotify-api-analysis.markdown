---
layout: project
title:  "Spotify API Analysis"
shortname: "SpotifyAPIAnalysis"
date:   2020-01-03 15:32:14 +1100
categories: Spotify API Tableau
---

{% include image.html url="/assets/projects/SpotifyAPIAnalysis/displayimg.JPG" description="Tableau is actually pretty sweet for viz's" width=700 %}

[Github repo](https://github.com/wjia26/SpotifyAPIAnalysis)|
[Tableau Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/SpotifyMyTracks/TopTracks)

## Preface:
I'd been seeing alot of awesome apps being built using the Spotify API so I decided to give it a go for myself. As an avid Spotify user, I was really curious to better understand my own listening behaviour - because as they say, music is a reflection of self.

Fortunately, the Spotify API is super simple to use and has a pre-existing python wrapper called [spotipy](https://spotipy.readthedocs.io/) which you can easily install via pip. The wrapper handles all the boilerplate code for authentication and calling the RESTful API.

For this specific part of the project I simply just wanted to visualize some of my top tracks through tableau and get some data points around the features which make up these tracks. Spotify does a wonderful job of labelling each track with such features like: Valence, Tempo, Loudness, Major/Minor, Energy and etc. Check out the [docs](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/) for more information.

## Method:
1. Read docs to find what juicy information I can gather.
2. Pull data via Spotipy.
3. Visualize through Tableau.
4. Write up a funky analysis piece.

## Analysis:
### Taking a look at the [Tracks Analysis Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/SpotifyMyTracks/TopTracks)
This Dashboard is fully interactive and contextual filters can be applied by clicking on each different dimensions on each graph. For Example if you want to see what the Features are for all my top Rap Tracks are you can click on the rap segment in the Top Genre Viz. This will apply a filter to the rest of the components on this dashboard.

It seems like my Genre's are sort of all over the shop. The main suspects are Classical,Rap,hip-hop and k-pop. It really surprises me that there are so many K-pop tracks in my Long Term favourites. Damn BTS and their catchy tracks...

The Average Track Popularity score of 42.2 makes sense because I'm not really a mainstream music ~~pleb~~ listener. For reference, most of Kanye's stuff hovers around the 85 Popularity mark.

I've also seen some pretty interesting stuff around my Classical Genre listening habits. Valence (which is Spotify's score for whether a track has sad/angry/depressed or happy/lively qualities) scores seem to be pretty low. It seems that I really like depressing Russian Classical music and concertos played in the minor key.

I also feel like Spotify isn't too accurate when it comes to classical music. For example: There are some tracks which I know have pretty high energy but still get classified as low energy. Most of the Paganini concertos are pretty lit but according to Spotify are lethargic and have the same energy as some of the chill-hop music I listen to in the background whilst I work. I think they probably need to step up their game in the Classical Music classification department.

I mean just look at Ray Chen shred one of my faves: The Tartini Sonata by Paganini (According to Spotify it has a **0.23** Energy score...)
<iframe width="560" height="315" src="https://www.youtube.com/embed/orWePX13N3M?start=661" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Let's deep-dive on how Spotify analyzes this particular track:
{% include image.html url="/assets/projects/SpotifyAPIAnalysis/PaganiniIsLowEnergy.JPG" description="Surely Violin is an instrument..." width=600 %}

Sometimes however, Spotify gets it pretty spot on. Like for example I listen to this Artist called [Nitro-Fun](https://www.youtube.com/watch?v=mdaCDsN1FJ0) (sort of like 8-bit/Electronic music) whose tracks are like an audio representation of ADHD. Spotify has correctly classified his tracks to have the highest energy amongst all my top tracks - which I whortheartedly agree with.

### Taking a look at the [Comparison Analysis Dashboard](https://public.tableau.com/profile/william8331#!/vizhome/SpotifyMyTracks/TopTracksDiffAnalysis)
In this dashboard I decided to see how my listening habits change as the time range get's larger. I use the Short Term Time Range as a base and calculate the relative difference from that and the Medium/Long Time Range Statistics. For example, in the Top Genres Difference Viz: Medium Term shows -15 in Classical. This means that relative to the Short Term Count, my Medium Term Top Tracks contained 15 less Classical Tracks than my Short Term Top Tracks.

This makes it much easier to see delta's between time ranges - as opposed to flicking through the filters in the first dashboard and trying to remember the values each time. 

You can definitely see I've been listening to more classical music in the short term and my affinity for all things Hallyu-Wave has sort of died down. This has had an increasing affect on the overall Acousticness/Instrumentalness and a decreasing effect on the Tempo of the music I listen to.

Coincidentally I actually have been feeling alot more mellow in these past few weeks and my ability to concentrate on tasks that matter has improved a tad. Perhaps it's all the Mendellsohn I've been listening to. 

## Moving Forward 
It would be interesting to see the how these feature-metrics for my top tracks change over time. This would probably involve writing up some sort of scheduled job every couple of days to see how my behaviour changes. Using AWS Lambda + S3 could be a cheap way to go about doing this. 

In addition, I could probably do some cluster analysis and map out each track on a 2D-plane and see how it plays out over time. 


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
