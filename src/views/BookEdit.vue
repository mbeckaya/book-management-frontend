<template>
  <div class="bookEdit">
    <BookForm mode="edit" />
  </div>
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
