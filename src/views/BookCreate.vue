<template>
  <div class="bookCreate">
    <BookForm mode="create" />
  </div>
</template>

<script>
import BookForm from '@/components/Book/BookForm'

export default {
  name: 'BookCreate',
  components: {
    BookForm
  }
}
</script>
