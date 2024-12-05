import { cn } from '@/lib/utils';
import { CalendarHeading, useForwardProps } from 'radix-vue';
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CalendarHeading;
    /** @type { [typeof __VLS_components.CalendarHeading, typeof __VLS_components.CalendarHeading, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ((__VLS_ctx.cn('text-sm font-medium', props.class))) }, ...(__VLS_ctx.forwardedProps), }));
    const __VLS_2 = __VLS_1({ ...{ class: ((__VLS_ctx.cn('text-sm font-medium', props.class))) }, ...(__VLS_ctx.forwardedProps), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const [{ headingValue }] = __VLS_getSlotParams(__VLS_thisSlot);
        var __VLS_7 = {
            headingValue: (headingValue),
        };
        (headingValue);
        __VLS_nonNullable(__VLS_5.slots).default;
        __VLS_nonNullable(__VLS_5.slots)['' /* empty slot name completion */];
    }
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
            CalendarHeading: CalendarHeading,
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
//# sourceMappingURL=CalendarHeading.vue.js.map