<template>
  <div :id="id" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div>
        <slot name="content"></slot>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script>
import { CloseModal } from '@/utilities/model-utilities'

export default {
  name: 'Modal',
  props: {
    id: String
  },
  methods: {
    closeModal () {
      CloseModal(this.id)
    }
  }
}
</script>

<style scoped>
.modal-content {
  max-width: 640px;
}

.modal img {
  max-height: none;
}
</style>
