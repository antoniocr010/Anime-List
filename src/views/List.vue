<template>
  <div class="list">
    <div class="cards">
      <div alt="Anime Poster" class="img-post"></div>
      <div class="resume">
        <h3>Pesquise seu anime favorito!</h3>
        <p>
          Jikan é uma API REST. Ele vasculha o site para satisfazer a
          necessidade de de uma Api. A palavra Jikan se traduz literalmente como
          Tempo em Japonês (時間). E é disso que essa API economiza. ;)
        </p>
      </div>
    </div>
    <h3 class="n-of">JIKAN É UMA API MYANIMELIST NÃO OFICIAL.</h3>
    <form class="search-box" @submit.prevent="Handlesearch">
      <input
        type="search"
        class="search-tipe"
        placeholder="Pesquise seu anime..."
        maxlength="60"
        v-model="search_query"
      />
    </form>
    <div class="movie-list">
      <div class="movie" v-for="anime in animes" :key="anime.mal_id">
        <router-link :to="'/detail/' + anime.mal_id" class="movie-link">
          <div class="card">
            <img :src="anime.image_url" alt="anime" class="anime" />
            <div class="type">{{ anime.type }}</div>
          </div>
          <div class="title">
            <h3>{{ anime.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//import {getAnimeList} from '../services/api'
export default {
  data() {
    return {
      search_query: null,
      animes: {},
    };
  },
  methods: {
    async Handlesearch() {
      await axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${this.search_query}`)
        .then((resp) => {
          this.animes = resp.data.results;
          console.log(resp.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  .cards {
    position: relative;
    max-width: 1620px;
    justify-content: center;
    margin: 0 auto;
    .img-post {
      width: 100%;
      height: 140px;
      background-image: linear-gradient(#36393bd9, rgba(255, 255, 255, 0)),
        url('../assets/anime-list.jpg');
      background-size: cover;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .resume {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.75);
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding-bottom: 6px;
      z-index: 1;
    }
    h3 {
      color: #fff;
      text-align: center;
      padding: 5px;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 1rem;
    }
    p {
      color: #fff;
      font-weight: 500;
      text-align: center;
      font-size: 14px;
    }
  }
  .n-of {
    text-align: center;
    padding-top: 8px;
    color: #313131;
  }
  .search-box {
    display: flex;
    justify-content: center;
    padding: 6px;
    align-items: center;

    .search-tipe {
      appearance: none;
      background: none;
      border: none;
      outline: none;
      background-color: #dfd7d7;
      box-shadow: 0px 3px 4px #333333;
      display: block;
      width: 100%;
      max-width: 590px;
      padding: 12px;
      border-radius: 8px;
      color: #313131;
      font-size: 16px;
      transition: 0.4s;
      font-family: 'Londrina Solid', cursive;
      text-transform: uppercase;

      &:focus,
      &valid {
        color: #fff;
        background-color: #313131;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      }
    }
  }
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    margin: 5px 5px;
    max-width: 1620px;
    margin: 0 auto;
    width: 100%;
    justify-content: center;

    .movie {
      max-width: 14%;
      flex: 1 1 60%;
      padding: 10px 7px;
      @media (max-width: 1024px) {
        max-width: 20%;
        flex: 1 1 60%;
      }
      @media (max-width: 768px) {
        max-width: 33%;
        flex: 1 1 60%;
      }
      @media (max-width: 400px) {
        max-width: 48%;
        flex: 1 1 60%;
      }
      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: 0.2s;

        width: 100%;
        align-content: center;

        &:hover {
          transform: scale(1.12);
        }
        .card {
          position: relative;
          flex-direction: column;
          height: 100%;

          .anime {
            display: block;
            width: 100%;
            height: 240px;
            border-radius: 10px 10px 0px 0px;
          }
        }
      }
      .type {
        position: absolute;
        padding: 6px 25px;
        color: #fff;
        border-radius: 20px;
        background-color: rgb(255, 3, 3);
        bottom: 12px;
        left: 3px;
        text-transform: uppercase;
      }
    }
    .title {
      background-color: #41b883;
      padding: 5px 5px;
      flex: 1 1 100%;
      border-radius: 0px 0px 10px 10px;
      color: rgb(13, 13, 187);
      text-align: center;

      h3 {
        font-size: 16px;
      }
    }
  }
}
</style>
