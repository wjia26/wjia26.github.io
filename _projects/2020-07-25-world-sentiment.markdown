---
layout: project
title:  "The Twitter Datalake Project - World Sentiment"
shortname: "WorldSentiment"
date:   2020-07-25 16:31:14 +1100
categories: TwitterDataLake
---
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">


[Tableau Dashboard V2](https://public.tableau.com/views/twitter-world-sentiment-analysis-2/WorldSentiment?:language=en-GB&:display_count=y&:origin=viz_share_link){:target="_blank"}|
[Tableau Dashboard V1](https://public.tableau.com/views/twitter-world-sentiment-analysis/WorldSentiment?:language=en-GB&:display_count=y&:origin=viz_share_link){:target="_blank"}


## Preface:
Using my twitter datalake I built from the previous episode and after working out some data quality issues for a solid week - I think it's time to actually put it to good use.

One of the questions I've been curious to explore is the sentiments about certain countries when they get mentioned. How do people feel and what general tone do they use when referencing a specific country in their tweets?

## It's Tableau Time:
<iframe src="https://public.tableau.com/views/twitter-world-sentiment-analysis-2/WorldSentiment?:showVizHome=no&:embed=true"
width="800" height="850"></iframe>

## Discussion:
I have two versions of this analysis - each spanning different timeframes, with the second version including more countries.
I've only embedded the 2nd version here - but feel free to checkout the 1st version as the results were slightly different.

There's definitely not many surprises here. We see alot of the countries who aren't aligned with the West - like Russia,China, North Korea (duh...),and many countries in the Middle East (all the 'stans) be mentioned with negative sentiments.

In my First Analysis China had by far the most negative sentiment - but it seems it has improved in the 2nd cut.

This makes sense because twitter is primarily Western and users of the platform are going to more align with Western Idealogies.
It highlights how even if twitter and all these other social media platforms are meant to increase freedom of speech - it can still have an inherent bias towards an ideology even if it is open. Mainly because it is open to a demographic which share similar experiences to life.

It's not even really a matter of race/ethinicity because although Japan/Korea/Singapore/Indea are Eastern countries - generally when mentioned in a twitter post they are talked about in a positive light. This is because they are, relatively speaking, more inline with Western ideals (capitalism,democracy, freedom of speech, etc.).  

## Dataset:
If you're interested in the dataset, I will find sometime to upload a portion of it to Kaggle for you to use for your own analysis. It contains most of the countries in the world - so there's defintely much more to be explored. 

I will update this post with the link when I get time to upload!

