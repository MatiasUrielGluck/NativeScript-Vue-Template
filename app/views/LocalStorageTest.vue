<template>
  <Page actionBarHidden="true">
    <RootLayout>
      <FlexboxLayout
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <FlexboxLayout flexDirection="column" class="info-container">
          <Label
            :key="forceUpdateKey"
            :text="
              this.$localStorage.getItem('username') ||
              this.$localStorage.getItem('lastname')
                ? fullname()
                : 'Enter your info'
            "
          />
          <TextField v-model="usernameTxt" hint="Enter your name..." />
          <TextField v-model="lastnameTxt" hint="Enter your lastname..." />
        </FlexboxLayout>
        <Button text="Set name" class="btn" @tap="setName" />
        <Button text="Set lastname" class="btn" @tap="setLastName" />
        <Button text="Clear name" class="btn" @tap="clearName" />
        <Button text="Clear storage" class="btn" @tap="clearStorage" />
      </FlexboxLayout>
    </RootLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      usernameTxt: this.$localStorage.getItem("username") ?? "",
      lastnameTxt: this.$localStorage.getItem("lastname") ?? "",
      forceUpdateKey: 0,
    };
  },

  methods: {
    setName() {
      this.$localStorage.setItem("username", this.usernameTxt);
      this.forceUpdateKey++;
    },
    setLastName() {
      this.$localStorage.setItem("lastname", this.lastnameTxt);
      this.forceUpdateKey++;
    },
    clearName() {
      this.$localStorage.removeItem("username");
      this.forceUpdateKey++;
    },
    clearStorage() {
      this.$localStorage.clear();
      this.forceUpdateKey++;
    },
    fullname() {
      let result = "Welcome back, ";
      let name = this.$localStorage.getItem("username");
      let lastname = this.$localStorage.getItem("lastname");
      if (name) result += name + " ";
      if (lastname) result += lastname;
      result += "!";
      return result;
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  padding: 8 16;
  color: #ffffff;
  background: #000eff;
}

.info-container {
  text-align: center;

  Label {
    font-size: 24;
    font-weight: 800;
  }
}
</style>
