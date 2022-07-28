<template>
  <section class="bookEdit">
    <BookForm mode="edit" />
  </section>
</template>

<script>
import BookForm from '@/components/Book/BookForm'

export default {
  name: 'BookEdit',
  components: {
    BookForm
  }
}
</script>
