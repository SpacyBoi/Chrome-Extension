What the application do?
=======================

My application(Chrome extension) is an extension that helps people with their procrastination problems. 

In my application, there are three main components, my "Main Chrome Extension Screen" and two features called "Schedule" and "Reminder" 

"Main Chrome Extension Screen" is what the default pop-up of the extension be, when first opening the extension, that is the screen that will show up. It has three buttons inside, they are the following "Reminder", "Schedule", and another button for another feature that I have yet to make. 

The files that are related to "Main Chrome Extension screen" are: 
- Hello.html 
- Index.html 
- Manifest.json 
- Coom.css
- Content.js 
- b-efficient-logo_50_75_1_75.png
There are some extra files that are empty so you can ignore them like the background.js 

My first feature: 

My first feature is a schedule that can be open via an live server. It is a functioning schedule that a user can use. It isn't the best schedule, but with my current abilities that is all I can achieve. 

If you take a look at my "Hello.html" file, under the second button you may see I have inserted a live server link to the href. When the hello.html is opened via a Live Server, by clicking on the button it would redirect to the schedule link with no errors. However, when opening the extension version, by pressing the button it instead shows an error within the extension. 

My second feature: 

My second feature is a Reminder feature where when a user input a specific time for the reminder, this input would be active on the extension until the specified time is reached, which then would remind the user to get back to work at that time from a ringtone. After which, the input would be put to archive. 

My friend had mostly done the work for this feature as it requires a lot of Javascript. He had coded most of the feature. 

Now, the problematic thing is that this reminder feature is also another chrome extension itself. I want to combine my Main Chrome Extension Screen with this extension to make it into one single extension. To do that, I've redirected the files for the reminder feature into my Main Chrome Extension Screen folder, however, now there are two manifest.json files. I know there cannot be two manifest.json files, hence i tried combining the two into one, which is now the current "manifest.json" file attached here. However, I am not sure if it would work, so If I need to attach my original "reminder feature's manifest.json file" then please tell me

Here are the files that are for the Reminder features: 

_locales/en: message.json

Audios: all the mp3 

Scripts: dependencies.min.js, extension.min.js

Style: extension.min.css

Views: base.html, list.html, list.item.html, reminder.html, repeat.html, setting.defaultReminder.html, settings.html, settings.sound.html

Others: Index.html 

Note: I didn't include the original manifest.json file for this feature because I combined it, but Im not sure if it works, so we should discuss it next time. 

Finally, I have one more feature, which is the site blocker. This basically ensures the user to not go into any website by restricting them from seeing the website's contents. However, I have not included this one yet as it is not complete. 


How to run it?
=======================

To run the extension, basically download the whole folder which contains everything inside, and then go to chrome extension, enable developer mode, and them click load unpacked. Afterwards, click main chrome extension screen folder and load that. You should then see the extension on the top right corner. 

What needs to be fixed
=======================

There are two things that needs to be fixed: 

1. Check if the combined manifest.json file works or not. 
2. Fix the problem of the buttons not working within the extension 

Things that I need help with: 
1. redirecting to the next page of the chrome extension(basically how to move from main chrome extension screen to the reminder feature using buttons).
2. Improve my codes in general.  


