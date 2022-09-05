## Display data on cards using API

# Here I have used the fetch() method to make a call. Everytime a person clicks on Get Users button, the api is called and displayed.

There is a loading state, which remains true until data is fetched and loading msg is displayed and there also is a state for error,
so that error msg is displayed when data could not be fetched.

As the data is fetched, it is stored in an array and mapped into cards.

TailwindCSS has been used here to make the webpage responsive.
