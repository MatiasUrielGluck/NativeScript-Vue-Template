<template>
  <Page actionBarHidden="true" @loaded="onLoad">
    <RootLayout>
      <FlexboxLayout
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Label class="info" @tap="onIncrement">
          <FormattedString>
            <Span class="fas" text.decode="&#xf135; " />
            <Span :text="message" />
          </FormattedString>
        </Label>

        <Button text="Load pokemons" class="btn" @tap="onLoadPokemons" />

        <Button
          text="About"
          class="btn"
          @tap="onAbout"
          :isEnabled="hasPokemons"
        />

        <Button
          text="Open modal"
          class="btn"
          @tap="openModal"
        />

        <Button
          text="LocalStorage Test"
          class="btn"
          @tap="$router.goto('/localStorageTest')"
        />
      </FlexboxLayout>
    </RootLayout>
  </Page>
</template>

<script>
import BaseModal from '~/components/common/BaseModal.vue';

export default {
  data: {
    usernameTxt: "",
  },

  computed: {
    message() {
      return `Counter is ${this.$store.state.count}`;
    },

    hasPokemons() {
      return this.$store.state.pokemons.length > 0;
    },

    hasUsername() {
      return this.$localStorage.getItem("username") !== undefined;
    },
  },

  methods: {
    onLoad() {
      console.log("Home loaded");
    },

    onLoadPokemons() {
      if (this.$store.state.pokemons?.length > 0) return;
      this.$store.dispatch("fetchAllPokemons");
    },

    onIncrement() {
      this.$store.commit("increment");
    },

    onAbout() {
      this.$router.goto("/about", {
        transition: "slideTop",
        props: {
          title: "Who we are",
        },
      });
    },
    setName() {
      this.$localStorage.setItem("username", this.usernameTxt);
    },

    async openModal() {
      await this.$rootLayoutController.openLayer(BaseModal)
    }
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}

.btn {
  padding: 8 16;
  color: #ffffff;
  background: #000eff;
}
</style>
