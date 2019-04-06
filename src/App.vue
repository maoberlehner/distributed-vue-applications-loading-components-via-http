<template>
  <div
    class="o-container o-container--s o-vertical-spacing o-vertical-spacing--xl"
    :class="$style.main"
  >
    <h1>Distributed Vue.js Applications Part 1: Loading Components via HTTP</h1>
    <MyComponent/>
  </div>
</template>

<script>
import externalComponent from './utils/external-component';

const MyComponent = () => externalComponent(`http://localhost:8200/MyComponent/MyComponent.c9c0abb8e999d0e5654e.umd.min.js`);

export default {
  name: `App`,
  components: {
    MyComponent,
  },
};
</script>

<style lang="scss">
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xl,
} from ~@avalanche/object-vertical-spacing';
</style>

<style lang="scss" module>
@import './assets/scss/settings/**/*';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}
</style>
