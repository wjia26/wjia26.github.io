---
layout: project
title:  "Spotify API Analysis"
date:   2020-01-04 15:32:14 +1100
categories: Spotify API Tableau
---
Link to (Github repo)[https://github.com/wjia26/SpotifyAPIAnalysis]
Link to (Tableau Dashboard)[https://public.tableau.com/profile/william8331#!/vizhome/SpotifyMyTracks/TopTracks]

## Preface:
I'd been seeing alot of awesome apps being built using the Spotify API so I decided to give it a go for myself. As an avid Spotify user, I was really curious to better understand my own listening behaviour - because as they say, music is a reflection of self.

Fortunately, the Spotify API is super simple to use and has a pre-existing python wrapper called spotipy which you can easily install via pip. The wrapper handles all the boilerplate code for authentication and calling the RESTful API.

For this specific part of the project I simply just wanted to visualize some of my top tracks through tableau and get some data points around the features which make up these tracks. Spotify does a wonderful job of labelling each track with such features like: Valence, Tempo, Loudness, Major/Minor, Energy and etc. Check out the [docs](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/) for more information.

## Method:
1. Read docs to find what juicy information I can gather.
2. Pull data via Spotipy.
3. Visualize through Tableau.
4. Write up a funky analysis piece.

## Analysis:
### Taking a look at the (Tracks Analysis Dashboard)[https://public.tableau.com/profile/william8331#!/vizhome/SpotifyMyTracks/TopTracks]
It seems like my Genre's are sort of all over the shop. The main suspects are Classical,Rap,hip-hop and k-pop. It really surprises me that there are so many k-pop tracks in my Long Term favourites. I guess alot of the tracks are pretty addictive to listen to over and over again. 

The Average Track Popularity score of 42.2 makes sense because I'm not really a mainstream music ~pleb~ listener. For reference most of Kanye's stuff hovers around 85 Popularity.

I've also seen some pretty interesting stuff around my Classical Genre listening habits. Valence scores seem to be pretty low. It seems that I really like depressing russian music and concertos played in the minor key. I also feel like Spotify too accurate when it comes to classical music. For example: Shouldn't the Average Acousticness basically be near 1? And there are some classical tracks do have pretty high energy but still get classified as low energy. Again Spotify's definition of certain features are quite broad.

The most popular Key Signature seems to be G. Which makes sense, because most pop songs use this listener friendly key signature.

### Taking a look at the (Comparison Analysis Dashboard)[https://public.tableau.com/profile/william8331#!/vizhome/SpotifyMyTracks/TopTracksDiffAnalysis]
In this dashboard I decided to see how my listening habits change as the time range get's larger. I use the Short Term Time Range as a base. 

You can definitely see I've been listening to much more classical nowadays. 

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
