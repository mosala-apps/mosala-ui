<template>
  <div>
    <shared-section-title title="Découvrez nos offres" class="dark-color" />
        <section class="custom-container">
          
          <div class="services">
            <div class="card__services">
              <div class="card__services-head">
                <img :src="htmlIcon" alt="html" />

                <h4>Conception des sites web Responsives et adaptaples</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
            <div class="card__services">
              <div class="card__services-head">
                <img :src="codingIcon" alt="coding" />
                <h4> Dévéloppement des API</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
            <div class="card__services">
              <div class="card__services-head">
                <img :src="mobileDevIcon" alt="mobile" />

                <h4>Conception des applications mobiles</h4>
              </div>
              <p>
                Congodev est un professionnel de la conception et du
                développement de sites Web. Concentré pour livrer les
                conceptions les plus créatives quà atteindre les attentes des
                clients.
              </p>
            </div>
          </div>
    
        </section>
  </div>
</template>

<script>
import codingIcon from '~/assets/icons/coding.svg'
import htmlIcon from '~/assets/icons/html.svg'
import mobileDevIcon from '~/assets/icons/mobile.svg'
export default {
  data() {
    return {
      codingIcon,
      htmlIcon,
      mobileDevIcon
    }
  },

}
</script>
<style lang="scss" scoped>
  @import '@/assets/main.scss';

 
  

  .services{
    background-color:$white-color;
    min-height:500px;
    display:flex;
    justify-content:space-evenly;
    flex-direction: column;
    gap: 2rem;
    align-items:center;
    font-family: $font-regular;
    @include media-query-respond-to(medium) {
      & {
        flex-direction: row;
        gap: 4rem;
      }
    
  }
    .card__services{
      height:247px;
      width:100%;
      background-color:#ffff;
      border-radius:10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      padding:2%;
      transition: all .3s ease-in-out;
      transform: scale(1);
      &:hover{
        box-shadow: 0px 4px 4px rgba(233, 7, 7, 0.912);
        transform: perspective(1)
      }
      .card__services-head{
        display:flex;
        align-items:center;
        img{
          width:50px;
          height:50px;
           
        }
      }
      h4{
        font-family: $font-bold;
        font-size:20px;
        line-height:1.5;
         position:relative;
          left:10px;
          right:0;
          top:0;
      }
      p{
        font-size:14px;
        line-height:2;
        text-align:justify;
      
      }
    }
  }
  .services-bottom{
    margin:0;
    padding:0;
     display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    position:relative;
    top:1180px;
    .card__services{
      width:408px;
       margin:0 1.5%;
    }
  }
</style>