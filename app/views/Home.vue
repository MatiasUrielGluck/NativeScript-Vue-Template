<template>
  <Page @loaded="onLoad">
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

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
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return `Counter is ${this.$store.state.count}`;
    },

    hasPokemons() {
      return this.$store.state.pokemons.length > 0;
    },
  },

  methods: {
    onLoad() {
      console.log("Home loaded");
    },

    onLoadPokemons() {
      if (this.$store.state.pokemons.length > 0) return;
      this.$store.dispatch("fetchAllPokemons");
    },

    onIncrement() {
      this.$store.commit("increment");
    },

    onAbout() {
      this.$router.goto("/about");
    },
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
