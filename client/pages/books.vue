<template>
  <div class="container">
    <div 
      class="book-wrapper"
      v-for="book in books"
      :key="book.id"
    >
      <Book 
        :ident="book.ident"
        :title="book.title"
        :author="book.author"
        :language="book.language"
        :tag="book.tag"
      />
    </div>
    <!-- /.book-wrapper -->
  </div>
</template>

<script>
import Book from "~/components/book/Books";
import books from "~/components/book/books.json";

export default {
  components: {
    Book
  },
  data() {
    return {
      books
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 60px);
}
</style>