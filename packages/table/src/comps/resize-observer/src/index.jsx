import { defineComponent, h } from "vue";
import {
    addResizeListener,
    removeResizeListener,
} from "../../../utils/resize-event";
export default defineComponent({
  name: "vue-dom-resize-observer",
  props: {
      tagName: {
          type: String,
          required: true,
      },
      id: {
          type: [String, Number],
          default: null,
      },
  },
  methods: {
      resizeListener(contentRect) {
        console.log('resizeListener dom-resize-change')
          const { left, top, width, height } = contentRect;
          this.$emit("dom-resize-change", {
              key: this.id,
              left,
              top,
              width,
              height,
          });
      },
  },
  mounted() {
      addResizeListener(this.$el, this.resizeListener);
  },
  destroyed() {
      removeResizeListener(this.$el, this.resizeListener);
  },
  render() {
      return h(this.tagName, {}, [this.$slots.default?.()])
  },
});
