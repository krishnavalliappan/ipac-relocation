import { computed } from 'vue';
import { Switch } from '@/components/ui/switch';
import { Icon } from '@iconify/vue';
import { useColorMode } from '@vueuse/core';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const mode = useColorMode({
    attribute: 'class',
    modes: {
        light: 'light',
        dark: 'dark',
    },
});
const isDark = computed(() => mode.value === 'dark');
const toggleTheme = (checked) => {
    mode.value = checked ? 'dark' : 'light';
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Switch;
    /** @type { [typeof __VLS_components.Switch, typeof __VLS_components.Switch, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.isDark)), ...{ class: ("relative transition-colors") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.isDark)), ...{ class: ("relative transition-colors") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:checked': (__VLS_ctx.toggleTheme)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { thumb: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center w-full h-full") }, });
        const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Icon;
        /** @type { [typeof __VLS_components.Icon, ] } */
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ icon: ((__VLS_ctx.isDark ? 'lucide:moon' : 'lucide:sun')), ...{ class: ("w-3 h-3 transition-all duration-200") }, ...{ class: ((__VLS_ctx.isDark ? 'rotate-0' : 'rotate-90')) }, }));
        const __VLS_10 = __VLS_9({ icon: ((__VLS_ctx.isDark ? 'lucide:moon' : 'lucide:sun')), ...{ class: ("w-3 h-3 transition-all duration-200") }, ...{ class: ((__VLS_ctx.isDark ? 'rotate-0' : 'rotate-90')) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    var __VLS_5;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-3'];
    __VLS_styleScopedClasses['h-3'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
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
            Switch: Switch,
            Icon: Icon,
            isDark: isDark,
            toggleTheme: toggleTheme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ToggleDark.vue.js.map