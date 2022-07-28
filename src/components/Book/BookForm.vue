<template>
  <section class="bookForm p-3">
    <div class="row">
      <div class="col-12 col-sm-8 col-xl-4">
        <h2 v-if="mode === 'create'">Create a book</h2>
        <h2 v-if="mode === 'edit'">Edit a book</h2>

        <Alert :message="message" variant="success"/>
        <Alert
            v-for="(error, index) in errors"
            :key="index"
            :message="error" variant="danger"
        />

        <div class="mb-3">
          <label class="form-label" htmlFor="title">Title</label>
          <input
              v-model="title"
              type="text"
              id="title"
              class="form-control"
              placeholder="Title"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" htmlFor="author">Author</label>
          <input
              v-model="author"
              type="text"
              id="author"
              class="form-control"
              placeholder="Author"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" htmlFor="publisher">Publisher</label>
          <input
              v-model="publisher"
              type="text"
              id="publisher"
              class="form-control"
              placeholder="Publisher"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" htmlFor="price">Price (Optional)</label>
          <input
              v-model="price"
              type="text"
              id="price"
              class="form-control"
              placeholder="Price (Optional)"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" htmlFor="pages">Pages (Optional)</label>
          <input
              v-model="pages"
              type="text"
              id="pages"
              class="form-control"
              placeholder="Pages"
          />
        </div>

        <div class="mb-3">
          <div class="form-check form-check-inline">
            <input
                v-model="isHandback"
                type="radio"
                id="yesHandback"
                class="form-check-input"
                value="true"
            >
            <label for="yesHandback">Handback (Yes)</label>
          </div>
          <div class="form-check form-check-inline">
            <input
                v-model="isHandback"
                type="radio"
                id="noHandback"
                class="form-check-input"
                value="false"
            >
            <label for="noHandback">Handback (No)</label>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check form-check-inline">
            <input
                v-model="isPaperback"
                type="radio"
                id="yesPaperback"
                class="form-check-input"
                value="true"
            >
            <label for="yesPaperback">Paperback (Yes)</label>
          </div>
          <div class="form-check form-check-inline">
            <input
                v-model="isPaperback"
                type="radio"
                id="noPaperback"
                class="form-check-input"
                value="false"
            >
            <label for="noPaperback">Paperback (No)</label>
          </div>
        </div>

        <button
            @click="handleSave"
            class="btn btn-primary"
        >
          Save
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Alert from '@/components/UI/Alert'
import bookMixin from '@/mixins/bookMixin'

export default {
  name: 'BookForm',
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  mixins: [bookMixin],
  components: {
    Alert
  },
  data() {
    return {
      errors: [],
      message: '',
      title: '',
      author: '',
      publisher: '',
      price: null,
      pages: null,
      isHandback: false,
      isPaperback: false
    }
  },
  async mounted() {
    if (this.mode === 'edit') {
      try {
        const response = await this.fetchOneBookMixin(this.$route.params.id)
        this.title = response.data.title
        this.author = response.data.author
        this.publisher = response.data.publisher
        this.price = response.data.price
        this.pages = response.data.pages
        this.isHandback = response.data.isHandback
        this.isPaperback = response.data.isPaperback
      } catch (err) {
        console.log(err)
      }
    }
  },

  methods: {
    validateRequired() {
      if (this.title.length < 2 || this.title.length > 25) {
        this.errors.push('The title must have between 2 and 25 characters')
      }

      if (this.author.length < 2 || this.author.length > 25) {
        this.errors.push('The author must have between 2 and 25 characters')
      }

      if (this.publisher.length < 2 || this.publisher.length > 25) {
        this.errors.push('The author must have between 2 and 25 characters')
      }

      if (typeof this.isHandback === 'undefined') {
        this.errors.push('The handback is required')
      }

      if (typeof this.isPaperback === 'undefined') {
        this.errors.push('The paperback is required')
      }
    },
    validateOptional() {
      if (this.price > 0 && (this.price < 0.99 || this.price > 300.00)) {
        this.errors.push('The price must be greather than 0.99 and lower than 300.00 numbers')
      }

      if (this.pages > 0 && (this.pages < 1 || this.pages > 2000)) {
        this.errors.push('The pages must be greather than 1 and lower than 2000 numbers')
      }
    },
    validate() {
      this.errors = []

      this.validateRequired()
      this.validateOptional()

      return this.errors.length === 0
    },
    async handleSave() {
      this.message = ''

      if (this.validate()) {
        const payload = {
          title: this.title,
          author: this.author,
          publisher: this.publisher,
          isHandback: this.isHandback,
          isPaperback: this.isPaperback
        }

        // Optional
        if (this.price > 0) payload.price = this.price
        if (this.pages > 0) payload.pages = this.pages

        try {
          if (this.mode === 'create') {
            await this.createOneBookMixin(payload)
            this.message = 'The book was created successfully'
          } else if (this.mode === 'edit') {
            await this.updateOneBookMixin(this.$route.params.id, payload)
            this.message = 'The book has been updated successfully'
          }
        } catch (error) {
          error.response.data.errors.forEach((err) => {
            this.errors.push(`${err.param}: ${err.msg}`)
          })
        }
      }
    }
  }
}
</script>