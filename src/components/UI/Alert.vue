<template>
  <div
      v-if="message"
      class="alert"
      :class="[variant === 'success' ? 'alert-success' : 'alert-danger']"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true
    },
    variant: {
      type: String
    }
  }
}
</script>