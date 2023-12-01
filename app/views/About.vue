<template>
  <Page actionBarHidden="true">
    <FlexboxLayout
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>

      <Button text="Go home" @tap="onHome" />
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return `About page`;
    },
  },

  methods: {
    onHome() {
      this.$router.goto("/home");
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
