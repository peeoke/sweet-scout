# SweetScout

### Project Description
An application designed to find your perfect sweet treat.

Project Title: SweetScout

Team Members: 
- Ysabella Dela Cruz (ysabella.delacruz@sjsu.edu)
- Kelly Dang (kelly.dang01@sjsu.edu)

Functionality:
  Through this application we aim to remedy the universal issue of deciding where to eat. As witnessed through personal experiences, we have both struggled to decide on the types of foods and drinks to get, and have wasted a lot of time trying to determine our treat. The application would randomly generate a specific food/drink, depending on what the user is looking for. The result of this is that the users would save a lot of time deciding on what food/drink to get and would now have a decision made for them. 

Application: 
  Our application will utilize both web APIs and web development. 

Approach:
  To collect the data for our application, will use the Google Maps API. We will first querey the Google Maps API for the food locations within a user's vicinity. We will also enable users to keep track of their favorite orders by entering the order name, price, and description. The final feature will include a randomizer to give the user a suggestion to explore. To deal with the server-side logic, we will use the Flask package to provide multiple pages. For the frontend of our application we will utilize React to build an interactive user-interface.

### Running the Application
Starting from the root directory, run the following command to install packages used to run our backend and frontend concurrently.
```
npm i
```
Now, cd into the frontend directory to install frontend dependencies.
```
cd ../frontend
npm i
```
Finally, cd back into the root directory and run the application.
```
cd ..
npm run dev
```
  
