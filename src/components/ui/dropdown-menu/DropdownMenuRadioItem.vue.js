import { cn } from '@/lib/utils';
import { DotFilledIcon } from '@radix-icons/vue';
import { DropdownMenuItemIndicator, DropdownMenuRadioItem, useForwardPropsEmits, } from 'radix-vue';
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emits = defineEmits();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.DropdownMenuRadioItem;
    /** @type { [typeof __VLS_components.DropdownMenuRadioItem, typeof __VLS_components.DropdownMenuRadioItem, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute left-2 flex h-3.5 w-3.5 items-center justify-center") }, });
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.DropdownMenuItemIndicator;
    /** @type { [typeof __VLS_components.DropdownMenuItemIndicator, typeof __VLS_components.DropdownMenuItemIndicator, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.DotFilledIcon;
    /** @type { [typeof __VLS_components.DotFilledIcon, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ class: ("h-4 w-4 fill-current") }, }));
    const __VLS_15 = __VLS_14({ ...{ class: ("h-4 w-4 fill-current") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    var __VLS_19 = {};
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-3.5'];
    __VLS_styleScopedClasses['w-3.5'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['fill-current'];
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
            DotFilledIcon: DotFilledIcon,
            DropdownMenuItemIndicator: DropdownMenuItemIndicator,
            DropdownMenuRadioItem: DropdownMenuRadioItem,
            forwarded: forwarded,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=DropdownMenuRadioItem.vue.js.map