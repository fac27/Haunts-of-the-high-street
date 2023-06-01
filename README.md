# Haunts-of-the-high-street

The purpose of this app is for users to be able to view posts of sightings of local haunts on their high street. Users should be able to view everyones posts but only be able to delete their own. Users should be able to sign up and login using the same email and password. 
When going to the home page, you should be able to read other peoples sightings of creatures or ghouls as well as photos (for proof!) or images. 

Our guiding user stories: 
- As a user, I want to: submit information to your site for anyone to see
- As a user, I want to: come back to your site later and see what I posted is still there
- As a user, I want to: be the only person allowed to delete my stuff

## Approach 
Our geneeral approach to this project was to move slow to move fast. We delayed deploying until our second day of working together so that we had a full first day working remotely to tackle the things that we knew well leaving the tasks that we weren't as comfortable with for when we would be working together in person. 

## Facilitation & Collaboration
📣 standups

🎯 project board

⏱️ estimations

🏃‍♂️ sprinting 


## Instillation

Clone the Repo 
```
git clone "https://github.com/fac27/Haunts-of-the-high-street"
```
Install dependencies 
```
npm install 
```
seed the data
```
npm seed
```
Check that you have the correct version of Node 
```
node -v
```
If there are any issues accessing the fly website you can run locally 
```
npm run dev
```

## Aesthetics & UX
We used Miro to create a wireframe which we found that it became easier to layout what the app would look like 
<img width="699" alt="wifreframe" src="https://github.com/fac27/Haunts-of-the-high-street/assets/62698495/c88bfeb0-a4de-4ef5-8711-a5e57cebc61e">

We had lengthy discussions on MVP and making sure we followed an iterative process
<img width="513" alt="mvpvstretch" src="https://github.com/fac27/Haunts-of-the-high-street/assets/62698495/3868f344-8d26-4cc6-88c1-46d1beb1b55b">


We approached CSS for reusablity. After a lengthy discussion re. BEM with our role partners the UX lead decided this was the way forward. 

## database design
![Haunts of the High Street database diagram](https://github.com/fac27/Haunts-of-the-high-street/assets/32879360/b4dd1718-601f-48f0-aac2-93138bd3e5d9)


## Testing
There are x number of tests - to run all tests run the following: 
```
npm test
```

## Deployment 

- setting up
- volumes
- continuous deployemnt via github actions
