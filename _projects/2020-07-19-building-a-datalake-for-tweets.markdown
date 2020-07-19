---
layout: project
title:  "The Twitter Datalake Project - The Beginning"
shortname: "TwitterDataLakePart1"
date:   2020-07-19 16:31:14 +1100
categories: TwitterDataLake
---
<link rel="canonical" href="{{ site.url }}{{ page.url | replace:'index.html',''}}">


[Lambda Function repo](https://github.com/wjia26/twitter-datalake-lambda-function)|
[Exploratory Code repo](https://github.com/wjia26/twitter-sentiment-analysis)|
[Tableau Dashboard](https://public.tableau.com/views/TweetSentiment_15950740930430/TweetSentiment?:language=en-GB&:display_count=y&:origin=viz_share_link)

## Preface:
I haven't worked much with twitter data before - so I thought it'd be a good idea to see what sort of insights I could glean from people's tweet behaviour about different subjects. After mulling about it for a while and doing some of my own research - I realize there weren't too many places which provided access to regularly updated datasets without the need to query the twitter api. The Twitter API has a rate limit and also a limit of 7 days lookback for tweets. Meaning that if you want access to something that happened in 2016 - you'd have to pay for premium API access.

My Goal with this project is to **provide easy to use access to some popular tweet datasets** that people might want to look at and analyse for their own projects. My vision is that there will be a portal for people to download csv's of tweets from specific search tags which will get updated on a weekly/monthly basis (depending on my AWS costs). No need to know how to code/use api's. It will also provide Historical access from July 2020 onwards.

To do I'd have to build up a repository of tweets by querying twitter regularly and storing it in a scalable and affordable way. 


## Architecture:
I'm building this on top of the **AWS Stack**. I will use **AWS Lambda** to pull data into **S3 Buckets** at a regular interval then use **AWS Glue** to form it into a table which can then be queried via **Athena**.

This was the most cost efficient way I could think about doing this project. AWS Lambda and S3 are ridiculously cheap to operate - especially given the low amounts of calling I will be doing. AWS Glue and Athena are however uncharted territory for me though - so I'll just have to use it first and see how much I get billed (hopefully I don't go bankrupt). The costing for these services is less straightforward than Lambda and S3 (which are just based on number of requests/storage). I can't imagine it being too much because of my small use case.

## Step 1: Exploring the twitter api and it's python package (tweepy):
I usually like to start off my projects by prototyping something using a jupyter notebook before I package it up in an application.
Code can be accessed [here](https://github.com/wjia26/twitter-sentiment-analysis).
Most of it's pretty self-explanatory - I will put some comments in later when I feel like doing the dreaded documentation.
For this one I used the tweepy package which is really easy to use and I also wack on abit of sentiment analysis using NLTK's vader model. It provides the sentiment as a score between -1 and 1 for a given sentence. 

For every search query string: Let's say "#RogerFederer" - I pipe it to it's relevant folder and name it with the max twitter id. So that next time it runs, it can start from the previous twitter id, hence reducing duplicates.

I chunk the file ingestion for every 1000 rows. You can go bigger if you'd like but just play around with the rate limiting the api has and if it starts to error out if you go too big. I found this was the sweet spot for me. Having fewer but bigger files is more performant than having alot of small files in your datalake.

Initially I was going to ingest files as parquet. From what I read it gives a significant performance/cost advantage over using csv's. However, I couldn't get it to output properly into the S3 bucket. So I stuck to using csv's to just be able to ship the product quicker. I'm not really pulling in THAT much data so costs shouldn't be too much of a problem - future Will's problem anyway!

## Step 2: Putting it up on AWS Lambda:
{% include image.html url="/assets/projects/TwitterDataLakePart1/LambdainAction.JPG" description="SERVERLESS!" width=800 %}

Main Challenge here is the **DAMN DEPENDENCIES!!!**. I think the proper way to do this is to install docker, develop your stuff in that environment, then push that build up to Lambda. However, because my application was so small I thought it'd be easier just to manually plonk the dependencies into a folder and just zip it up - rather than learn docker and get frustrated - some day when I get time maybe...

With this, you have to make sure the libraries you are downloading into the application folder are compatible with the Amazon Linux AMI OS and NOT your local. That means downloading the linux versions of your packages - if you are using windows to develop (like I was).

I also hit some roadblocks with getting the Vader model to work on NLTK aswell. Mainly because it requires you to point NLTK to the Model downloaded. Instructions are [here](https://smirnov-am.github.io/using-nltk-library-with-aws-lambda/)

After going through some hoops - I hooked it up to an EventBridge cron job which polls every 3minutes for data!

{% include image.html url="/assets/projects/TwitterDataLakePart1/S3_Datalake.JPG" description="mmmmm.....data" width=800 %}

Datalake done? WRONG!


## Step 3: Querying through Athena:
{% include image.html url="/assets/projects/TwitterDataLakePart1/Querying_Twitter_Datalake_Athena.JPG" description="Let the querying begin" width=800 %}

Once you've got your S3 buckets flowing with data - how do you query it and get datasets? All the csv's are dispersed all over the place.
I guess we better **Glue** them together - hahahaha, i'm so funny. Anyways I used AWS Glue to create the schema on demand using the opencsv SerDe to do the job. I'm still not exactly sure what a SerDe is - but i think it's meant to interpret the data and format it into a table from some parameters you give it. For example I told my SerDe what the escape characters are/etc. 

Once you run the AWS Glue crawler - only then will you see a table in Athena ready for you to query. AWS Glue has essentially turned all of your disjointed csv's into a consolidated table with the right partitions (based on folder hierarchy).

## Step 4: Let's Suss out the data!
<iframe src="https://public.tableau.com/views/TweetSentiment_15950740930430/AlltheSentiments-Grouped?:showVizHome=no&:embed=true"
width="800" height="850"></iframe>

After a week of my datalake being populated - it's time to see what the data looks like. I prefer to use tableau to do this sort of exploratory visualization.

## Looking at the 3rd Tab "All the Sentiments - Grouped":
You can see some groups of twitter hashtags have more positive sentiment than others. It seems that tweets about Rich People, Politics and FastFood are more negative than Pets, Fashion and Tennis. 

## Looking at the 2nd Tab "All the Sentiments":
This ranks all the search queries and their Average Sentiments. It's interesting to see alot of the non-western alliance countries like Russia,Turkey and China rank the lowest. This proves that twitter is definitely pro-democratic/pro-countries-who-are-friends-with-USA - which shares similar sentiment to what we read in the news. This is something we'll try to explore more of in the future.
What's hilarious is that you find "NickKyrgios" randomly positioned amongst all these notorious countries. I guess there's just something about him which antagonises people. Mark Zuckerberg also isn't doing too flash aswell.

On the upper end of the rankings we find things like CSGO/Fashion Brands/aswell as the more personable celebrities of our times like Nadal/Murray and Buffett. I will be adding more celebrities to the job list as the times come. Please let me know who would be interesting to track.

## Next Steps...
Next steps in the project would be to expose the datasets on a webpage when I start getting more and more data. Then might look to create a small app which tracks something interesting and refreshes on a daily basis. 




