<template>
  <span :class="nameClass" @click="activeBtn">{{ title }}</span>
</template>

<script>
export default {
  name: "btn",
  props: {
    title: String,
    id: String,
    tabCompetence: Array
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    nameClass() {
      if (this.active) {
        return "btn selected";
      } else {
        return "btn";
      }
    }
  },
  methods: {
    activeBtn() {
      this.active = !this.active;
      if (this.tabCompetence.includes(this.id)) {
        const i = this.tabCompetence.indexOf(this.id);
        this.$emit("update:tabCompetence", this.tabCompetence.splice(i, 1));
      } else {
        this.$emit("update:tabCompetence", this.tabCompetence.push(this.id));
      }
    }
  }
};
</script>

<style></style>
