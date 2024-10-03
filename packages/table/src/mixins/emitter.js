// eventBusMixin.js
import { computed } from 'vue';
import { emitter } from './eventBus';

export default {
  data() {
    return {
      emitEventList: [],
    };
  },
  computed: {
    tableData() {
      return this.$props.data;
    },
  },

  methods: {
    storeEmitEventNames(name) {
      if (!this.emitEventList.includes(name)) {
        this.emitEventList.push(name);
      }
    },
    dispatch(componentName, eventName, params) {
      let parent = this.$parent;
      while (parent && (!parent.$options.name || parent.$options.name !== componentName)) {
        parent = parent.$parent;
      }
      if (parent) {
        emitter.emit(eventName, params);
      } else {
        console.error(`${componentName} was not found.`);
      }
    },
    broadcast(componentName, eventName, params) {
      const broadcastHelper = children => {
        children.forEach(child => {
          const name = child.$options.name;
          if (name === componentName) {
            emitter.emit(eventName, params);
          }
          if (child.$children.length) {
            broadcastHelper(child.$children);
          }
        });
      };
      broadcastHelper(this.$children);
    },
    $on(eventName, handler) {
      emitter.on(eventName, handler);
      this.storeEmitEventNames(eventName);
    },
    $off(eventName, handler) {
      emitter.off(eventName, handler);
    },
    $emit(eventName, ...args) {
      emitter.emit(eventName, ...args);
    },
  },
  unmounted() {
    this.emitEventList.forEach(name => this.$off(name));
  },
};
