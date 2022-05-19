<template>
  <div class="bookIndex">
    <BookList />
  </div>
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
