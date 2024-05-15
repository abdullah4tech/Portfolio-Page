<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="projects">
      <div class="project">
        <p>hey</p>
      </div>
      <div class="project">
        <img src="" />
      </div>
      <div class="project">
        <img src="" />
      </div>
      <div class="project">
        <img src="" />
      </div>
      <div class="project">
        <img src="" />
      </div>
      <div class="project">
        <img src="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
  }

  .project{
    border: 1px solid white;
    width: 22em;
    height: 23em;
    border-radius: 15px;
    background-color: rgb(83, 83, 83);
    text-align: center;
    text-justify:distribute;
    backdrop-filter: blur(20px);
    overflow: hidden;
  }
</style>