import { cn } from '@/lib/utils';
import { CalendarGridRow, useForwardProps } from 'radix-vue';
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwardedProps = useForwardProps(delegatedProps); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CalendarGridRow;
    /** @type { [typeof __VLS_components.CalendarGridRow, typeof __VLS_components.CalendarGridRow, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ((__VLS_ctx.cn('flex', props.class))) }, ...(__VLS_ctx.forwardedProps), }));
    const __VLS_2 = __VLS_1({ ...{ class: ((__VLS_ctx.cn('flex', props.class))) }, ...(__VLS_ctx.forwardedProps), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    var __VLS_7 = {};
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cn: cn,
            CalendarGridRow: CalendarGridRow,
            forwardedProps: forwardedProps,
        };
    },
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CalendarGridRow.vue.js.map