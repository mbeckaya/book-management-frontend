<template>
  <section class="bookCreate">
    <BookForm mode="create" />
  </section>
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
