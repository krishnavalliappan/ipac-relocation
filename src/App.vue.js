import Intro from './components/Intro.vue';
import TravelMap from './components/TravelMap.vue';
import RelocationPlan from './components/RelocationPlan.vue';
import ToggleDark from './components/ToggleDark.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const scrollToMap = () => {
    const mapElement = document.getElementById('travel-map');
    mapElement?.scrollIntoView({ behavior: 'smooth' });
};
const scrollToRelocation = () => {
    const relocationElement = document.getElementById('relocation-plan');
    relocationElement?.scrollIntoView({ behavior: 'smooth' });
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
    __VLS_styleScopedClasses['snap-container'];
    __VLS_styleScopedClasses['snap-container'];
    __VLS_styleScopedClasses['snap-section'];
    __VLS_styleScopedClasses['snap-container'];
    __VLS_styleScopedClasses['snap-section'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("snap-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed z-50 top-4 right-4 sm:top-6 sm:right-6") }, });
    // @ts-ignore
    [ToggleDark,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ToggleDark, new ToggleDark({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("snap-section") }, });
    // @ts-ignore
    [Intro,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Intro, new Intro({ ...{ 'onNavigateToMap': {} }, ...{ 'onNavigateToRelocation': {} }, }));
    const __VLS_6 = __VLS_5({ ...{ 'onNavigateToMap': {} }, ...{ 'onNavigateToRelocation': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_10;
    const __VLS_11 = {
        onNavigateToMap: (__VLS_ctx.scrollToMap)
    };
    const __VLS_12 = {
        onNavigateToRelocation: (__VLS_ctx.scrollToRelocation)
    };
    let __VLS_7;
    let __VLS_8;
    var __VLS_9;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("relocation-plan"), ...{ class: ("snap-section") }, });
    // @ts-ignore
    [RelocationPlan,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(RelocationPlan, new RelocationPlan({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("travel-map"), ...{ class: ("snap-section") }, });
    // @ts-ignore
    [TravelMap,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(TravelMap, new TravelMap({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_styleScopedClasses['snap-container'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['top-4'];
    __VLS_styleScopedClasses['right-4'];
    __VLS_styleScopedClasses['sm:top-6'];
    __VLS_styleScopedClasses['sm:right-6'];
    __VLS_styleScopedClasses['snap-section'];
    __VLS_styleScopedClasses['snap-section'];
    __VLS_styleScopedClasses['snap-section'];
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
            Intro: Intro,
            TravelMap: TravelMap,
            RelocationPlan: RelocationPlan,
            ToggleDark: ToggleDark,
            scrollToMap: scrollToMap,
            scrollToRelocation: scrollToRelocation,
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
//# sourceMappingURL=App.vue.js.map