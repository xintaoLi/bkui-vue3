import { onMounted, watch } from 'vue';
import { setTheme } from './core';

export default props => {
  watch(
    () => props.theme,
    () => {
      setTheme(props.theme);
    },
    { immediate: true },
  );
  onMounted(() => {
    // const instance = getCurrentInstance();
    // const { renderer } = VxeUI;
    // if (instance) {
    //   const components = instance.appContext.components;
    //   Object.values(components).forEach(component => {
    //     // if (component.name) {
    //     //   renderer.add(component.name, { renderDefault: component });
    //     // }
    //   });
    // }
  });
};
