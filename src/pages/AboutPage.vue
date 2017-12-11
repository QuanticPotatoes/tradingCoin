<template>
    <v-container>
        <h3 class="my-3">About page</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto cum debitis eligendi et eveniet facere fugiat illo incidunt libero, maxime nihil, non nulla omnis quis sint sunt velit voluptates.
        </p>
        <p>
            Lorem {{ message }} ipsum dolor sit amet, consectetur adipisicing elit. A fugiat, in incidunt iure praesentium reiciendis sapiente voluptate. Cum cumque delectus dignissimos iure, laboriosam nesciunt numquam odit, quis quisquam sapiente suscipit?
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque beatae deleniti ea earum impedit officia tenetur ut voluptas voluptatem. Aliquam atque, culpa dolorem eos libero possimus quaerat rem repellendus.
        </p>
        <v-text-field
              name="input-2"
              label="Label Text"
              value="Input text"
              class="input-group--focused"
            ></v-text-field>
    </v-container>
</template>

<script>
    export default {
      data() {
        return {
            message: "salut"
        };
      },

      mounted() {
          this.message
      },
    };
</script>
