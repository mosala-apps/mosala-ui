<template>
    <div class="section-title" :class="[borderColor, textColor]">
		<h2>{{ title }}</h2>
		<h6>{{subTitle}}</h6>
		</div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
        type:String,
        default :()=>''
    },
	subTitle: {
        type:String,
        default :()=>''
    },
    borderColor: {
        type:String,
        default :()=>'border-primary'
    },
    textColor: {
        type:String,
        default :()=>''
    }
  },
  
};
</script>
<style lang="scss">
@import '@/assets/main.scss';

.dark-color{
    color: $dark-color !important;
}
.white-color{
    color: $white-color !important;
}
.primary-color{
    color: $primary-color !important;
}
.secondary-color{
    color: $secondary-color !important;
}

.border-primary{
    color: $primary-color;
}
.border-secondary{
    color: $secondary-color;
}
.border-dark{
    color: $dark-color;
}
.border-white{
    color: $white-color;
}

.section-title{
	margin: 0;
	padding: 0;
    padding-top: 5rem;
  

h2{
	position: relative;
	text-align: center;
    transition: all .3s ease-in;
	font-weight: 700;
	font-size: 1.6rem;

    &::after{
		content:"";
	    position: absolute;
        left: 55rem;
		top: 4rem;
		width: 4rem;
		height: .8rem;
		background-color:$primary-color;
		border-radius:20px;
	}
	&::before{
		position: absolute;
		right: 0;
        left: 49rem;
		top: 4.5rem;
		content:"";
		display: block;
		width: 16rem;
		height: 2px;
		background-color:$primary-color;
	}
}
h6{
	text-align: center;
	font-family: "karla";
}
@include media-query-respond-to(medium){

h2{
	position: relative;
	text-align: center;
    transition: all .3s ease-in;
	font-weight: 700;
	font-size: 32px;

}
h6{
	text-align: center;
	font-family: "karla";
}
}
}
</style>