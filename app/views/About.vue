<template>
  <Page actionBarHidden="true">
    <RootLayout>
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
        <Label class="info">
          <FormattedString>
            <Span class="fas" :text="title" />
          </FormattedString>
        </Label>

        <Button text="Go home" @tap="onHome" />
        <Button text="Open modal" @tap="openModal" />
      </FlexboxLayout>
    </RootLayout>
  </Page>
</template>

<script>
import BaseModal from "~/components/common/BaseModal.vue";

export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },

  computed: {
    message() {
      return `About page`;
    },
  },

  methods: {
    onHome() {
      this.$router.goto("/home");
    },

    openModal() {
      this.$rootLayoutController.openLayer(BaseModal);
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
