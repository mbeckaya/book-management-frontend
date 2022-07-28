<template>
  <section class="bookIndex">
    <BookList />
  </section>
</template>

<script>
import BookList from '@/components/Book/BookList'

export default {
  name: 'BookIndex',
  components: {
    BookList
  }
}
</script>
