<template>
  <div class="is-flex is-flex-grow-1 is-justify-content-center is-align-items-center">
    <img class="rotate-center spinner-color" src="~/assets/icons/spinner.svg">
    <h1 class="is-size-1 ml-5">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'spinner',
  props: {
    text: String
  }
}
</script>

<style scoped>
.rotate-center{-webkit-animation:rotate-center 1s ease-out infinite;animation:rotate-center 2s ease-out infinite}
@-webkit-keyframes rotate-center{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-center{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}

.spinner-color {
  filter: invert(30%) sepia(1%) saturate(3%) hue-rotate(316deg) brightness(92%) contrast(93%);
}
</style>
