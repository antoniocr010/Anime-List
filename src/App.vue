<template>
  <div id="nav">
    <router-link to="/">
      <header>
        <h1>
          <strong>Vue Anime <span>List</span></strong>
        </h1>
      </header>
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background:  #36393bd9;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  max-width: 1620px;
  justify-content: center;
  margin: 0 auto;
  h1 {
    color: #41b883;
    text-transform: uppercase;
    font-family: 'Rowdies', cursive;
    span {
      color: rgb(214, 186, 28);
    }
  }
}
</style>
