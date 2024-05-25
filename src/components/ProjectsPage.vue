<template>
  <div class="container">
    <div class="project_heading">
      <h1>Projects</h1>
      <p>I've completed numerous small projects throughout the years, but these are the ones I'm especially proud of. If
        any of them catch your eye, I'd love to hear your thoughts and suggestions for improvement.
      </p>
    </div>
    <div class="projects">
      <div class="project">
        <div class="icon">
          <img src="https://git-hub-profile-nine.vercel.app/favicon.ico" />
        </div>
        <div class="project_info">
          <h3>Github Finder</h3>
          <p>ChatGPT
            The website allows users to search for and view GitHub profiles.
          </p>
        </div>
      </div>
      <div class="project">
        <div class="icon">
          <img src="https://todo-list-psi-teal.vercel.app/favicon.ico" />
        </div>
        <div class="project_info">
          <h3>Todo List</h3>
          <p>
            A todo list management system
          </p>
        </div>
      </div>
      <div class="project">
        <div class="icon">
          <img src="https://blog-site-mu-sooty.vercel.app/favicon.ico" />
        </div>
        <div class="project_info">
          <h3>Blog Site</h3>
          <p>
            A blog page which you can create a blog, delete and even bookmark.
          </p>
        </div>
      </div>
      <div class="project">
        <div class="icon">
          <img src="https://weather-app-kappa-seven-52.vercel.app/favicon.ico" />
        </div>
        <div class="project_info">
          <h3>Weather App</h3>
          <p>
            A web app which can check the weather of any country
          </p>
        </div>
      </div>
      <div class="project">
        <div class="icon">
          <img src="https://vus-js-fetch-api.vercel.app/favicon.ico" />
        </div>
        <div class="project_info">
          <h3>Fetch API</h3>
          <p>
            The website is a Vue.js app that fetches and displays random user information using an API.
          </p>
        </div>
      </div>
      <div class="project">
        <div class="icon">
          <img src="https://calculatorjs-five.vercel.app/favicon.ico" />
        </div>
        <div class="project_info">
          <h3>Calculator</h3>
          <p>
            Simple calculator mad with HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  margin-top: 30px;
  color: grey;
  margin-top: 100px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}

.project {
  width: 25.5em;
  height: 8em;
  padding: 1.5em;
  border-radius: 15px;
  background-color: #1D1D21;
  text-align: center;
  text-justify: distribute;
  backdrop-filter: blur(20px);
  overflow: hidden;
  transition: outline .5s none;
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: left;
}

.project:hover{
  outline: 1px solid #49494b;
}

.project_heading{
  display: flex;
  flex-direction: column;
  width: 40em;
  margin-right: 600px;
  gap: 20px;
  text-align: left;
}

.project_heading h1{
  font-size: 2.5rem;
}

.project .icon img{
  width: 3em;
}

.project .icon{
  background-color: #27272A;
  width: 60px;
  padding: 5px;
  border-radius: 7px;
  height: 60px;
}

.project_info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


</style>