import { computed as r, resolveComponent as f, openBlock as o, createElementBlock as n, createElementVNode as i, normalizeClass as b, unref as y, normalizeStyle as v, createCommentVNode as l, renderSlot as m, createVNode as g } from "vue";
import "./button.vue_vue_type_style_index_0_lang.js";
const k = ["disabled"], S = { class: "uv-button-content" }, z = {
  key: 0,
  class: "uv-button-content-icon-left"
}, C = {
  key: 1,
  class: "uv-button-content-loading"
}, h = {
  key: 2,
  class: "uv-button-content-icon-right"
}, B = {
  name: "SButton"
}, q = /* @__PURE__ */ Object.assign(B, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    bgColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    square: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: Number,
      default: 16
    },
    iconPosition: {
      type: String,
      default: "left"
    }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const e = t, u = r(() => [
      "uv-button",
      e.type ? e.disabled ? "" : `uv-button-${e.type}` : "",
      e.disabled ? `uv-button-${e.type}-disabled` : "",
      e.round ? "uv-button-round" : "",
      e.square ? "uv-button-square" : "",
      e.size ? `uv-button-size-${e.size}` : "",
      e.block ? "uv-button-block" : ""
    ]), a = () => {
      c("click");
    };
    return (s, p) => {
      const d = f("uv-icon");
      return o(), n("div", null, [
        i("button", {
          class: b(y(u)),
          disabled: t.disabled,
          style: v({ backgroundColor: t.bgColor, color: t.color }),
          onClick: a
        }, [
          i("div", S, [
            t.icon && t.iconPosition === "left" ? (o(), n("div", z)) : l("", !0),
            t.loading ? (o(), n("div", C)) : l("", !0),
            m(s.$slots, "default"),
            t.icon && t.iconPosition === "right" ? (o(), n("div", h, [
              g(d, {
                name: t.icon,
                color: t.iconColor,
                size: t.iconSize
              }, null, 8, ["name", "color", "size"])
            ])) : l("", !0)
          ])
        ], 14, k)
      ]);
    };
  }
});
export {
  q as default
};
