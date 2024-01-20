<template>
  <GridLayout rows="*, auto" columns="*" class="overlay">
    <GridLayout row="0" verticalAlignment="top" @tap="closeModal"> </GridLayout>
    <GridLayout
      row="1"
      verticalAlignment="bottom"
      height="455"
      width="100%"
      class="basemodal"
    >
      <GridLayout verticalAlignment="bottom">
        <Button text="Close modal" @tap="closeModal" />
      </GridLayout>
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
.overlay {
  background-color: #0000008c;
  opacity: 0.7;

  animation-name: shadecover;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.basemodal {
  background: #fff;
  opacity: 1;
  border-radius: 16 16 0 0;
}

@keyframes shadecover {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #0000008c;
  }
}
</style>
