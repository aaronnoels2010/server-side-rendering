<template>
  <div :id="id" class="dropdown" >
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="dropdownClicked">
        <span>{{ currentValue }}</span>
        <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <button v-for="(item, index) of items" :key="index" class="dropdown-item button is-white" @click="dropdownValueClicked">
          {{item}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'Dropdown',
  mounted () {
    this.currentValue = this.items[0]
    this.$emit('valueClicked', this.items[0])
    this.id = new uuidv4()
  },
  data () {
    return {
      currentValue: '',
      id: ''
    }
  },
  props: {
    items: []
  },
  methods: {
    dropdownClicked () {
      const dropDownClassName = document.getElementById(this.id).className
      if (dropDownClassName && dropDownClassName.includes('is-active')) {
        document.getElementById(this.id).className = document.getElementById(this.id).className.replaceAll(' is-active', '')
      } else {
        document.getElementById(this.id).className += ' is-active'
      }
    },
    dropdownValueClicked (event) {
      this.currentValue = event.target.innerText
      this.$emit('valueClicked', this.currentValue)
      const activeDropDowns = document.getElementsByClassName('dropdown is-active')
      for (const activeDropDown of activeDropDowns) {
        activeDropDown.className = activeDropDown.className.replaceAll(' is-active', '')
      }
    }
  }
}
</script>

<style scoped>

</style>
