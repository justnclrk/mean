Assignment: Your Very Own Weather Forecast App Hacker Level!
You may remember the Weather Forecast App from web fundamentals. This time, we're taking it to the next level.

Let's build a weather forecast application where we can input any city and find out the temperature in Fahrenheit. Thankfully there is an API or a set of URLs out there that will tell us the temperature of any city! We will be using the Open Weather API. Open Weather API gives us a set of very useful URLs that are fun to use. For example, navigate to the link   http://api.openweathermap.org/data/2.5/weather?q=London,uk&&appid= (make sure you add your API)... and you will find JSON data about London. In fact, even if you try to navigate to http://api.openweathermap.org/data/2.5/weather?q=California,us%appid=(with your API id)..., the API will find you the same JSON data. This means that we have to validate different users' responses less on our application. Thanks, Open Weather API!

We are going to have a form where our user can enter a city in a form and have the city's temperature displayed on the screen. We will be listening for a form to be submitted so that we can gather what the user has filled out and add it to our URL http://api.openweathermap.org/data/2.5/weather?q=. For example, if the user has typed in 'Los Angeles', we would add this input to http://api.openweathermap.org/data/2.5/weather?q= so that the URL ends up being http://api.openweathermap.org/data/2.5/weather?q=Los Angeles. And do not forget to add the API key at the last part of the URL!

    /*
    	When the user clicks the button, the page should update with the information from the Open weather Api
    */
You probably already have this completed from earlier in the bootcamp. Now let's make this more advanced.

Once the page loads, if this is the first time a user has visited the page and they have never successfully queried the OpenWeather Service, display a welcome sign.
If the user has already visited the page and successfully queried the OpenWeather Service, display the data from the view from the last search they made.
Hint: Take a look at the localStorage API https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage