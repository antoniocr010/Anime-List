<template>
  <div class="info-container">
    <div class="info-content">
      <div class="img-info">
        <img
          :src="anime.data.images.webp.large_image_url"
          alt="Anime-Info"
          class="img-info"
        />
      </div>
      <div class="info-perfil">
        <p>
          Tipo: <span>{{ anime.data.type }}</span>
        </p>
        <p>
          Ranking: <span>{{ anime.data.rank }}</span>
        </p>
        <p class="score">
          Pontos: <span> {{ anime.data.score }}</span>
        </p>
        <p>
          classificação: <span>{{ anime.data.rating }}</span>
        </p>
      </div>
    </div>
    <div class="info">
      <h3>{{ anime.data.title }}</h3>
      <p>{{ anime.data.synopsis }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const anime = ref([]);
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`https://api.jikan.moe/v4/anime/${route.params.id}`)
        .then((resp) => resp.json())
        .then((data) => {
          anime.value = data;
          console.log(data);
        });
    });
    return {
      anime,
    };
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  display: flex;
  max-width: 1620px;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 10px;
  background: rgba(0, 0, 0, 0.75);
  @media (max-width: 480px) {
    height: 100%;
  }
  .info-content {
    display: flex;
    margin: 0 auto;
    align-content: center;
    align-items: center;
    .img-info {
      width: 310px;
      padding: 10px;
      border-radius: 10%;
    }
    .info-perfil {
      border-radius: 5px;
      display: flex;
      background: rgba(255, 255, 255, 0.918);
      margin-left: 6%;
      padding: 40px;
      margin-right: 10%;
      @media (max-width: 480px) {
        display: inline-block;
      }
      p {
        padding: 7px;
        padding-bottom: 3px;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        span {
          background-color: rgb(214, 186, 28);
          font-size: 14px;
          font-weight: 600;
          padding: 2px;
          border-radius: 5px;
        }
      }
    }
  }
  .info {
    max-width: 1200px;
    color: #fff;
    margin: 0 auto;
    h3 {
      text-transform: uppercase;
      font-size: 1.8rem;
      text-align: center;
      padding: 10px;
    }
    p {
      font-size: 16px;
    }
  }
}
@media (max-width: 768px) {
  .info-container {
    .info-content {
      display: block;
      .img-info {
        margin: 0 auto;
        padding: 0;
        margin-bottom: 6px;
      }
    }
  }
}
</style>
