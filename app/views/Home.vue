<template>
  <Page>
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

      <Button text="About" @tap="onAbout" />
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return `Counter is ${this.$store.state.count}`;
    },
  },

  methods: {
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
</style>
