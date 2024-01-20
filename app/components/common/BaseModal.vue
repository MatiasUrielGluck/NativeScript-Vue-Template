<template>
  <GridLayout
    verticalAlignment="bottom"
    height="455"
    width="100%"
    class="basemodal"
  >
    <GridLayout verticalAlignment="bottom">
      <Button text="Close modal" @tap="closeModal" />
    </GridLayout>
  </GridLayout>
</template>

<script>
import {
  disableBackNavigation,
  enableBackNavigation,
} from "~/helpers/backNavigation";

export default {
  name: "BaseModal",
  methods: {
    closeModal() {
      // this.$rootLayoutController.closeLayer(this.$el.nativeView); // this.$el.nativeView indicates the layer to close
      this.$rootLayoutController.closeLayer(); // closes the last layer
    },
  },

  mounted() {
    disableBackNavigation(() => {
      this.$rootLayoutController.closeLayer();
    });
  },

  beforeDestroy() {
    enableBackNavigation();
  },
};
</script>

<style scoped lang="scss">
.basemodal {
  background: #fff;
  border-radius: 16 16 0 0;
}
</style>
