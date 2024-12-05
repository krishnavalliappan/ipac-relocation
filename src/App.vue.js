import Intro from './components/Intro.vue';
import TravelMap from './components/TravelMap.vue';
import RelocationPlan from './components/RelocationPlan.vue';
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("snap-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("snap-section") }, });
    // @ts-ignore
    [Intro,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Intro, new Intro({ ...{ 'onNavigateToMap': {} }, ...{ 'onNavigateToRelocation': {} }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onNavigateToMap': {} }, ...{ 'onNavigateToRelocation': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onNavigateToMap: (__VLS_ctx.scrollToMap)
    };
    const __VLS_7 = {
        onNavigateToRelocation: (__VLS_ctx.scrollToRelocation)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("relocation-plan"), ...{ class: ("snap-section") }, });
    // @ts-ignore
    [RelocationPlan,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(RelocationPlan, new RelocationPlan({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("travel-map"), ...{ class: ("snap-section") }, });
    // @ts-ignore
    [TravelMap,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(TravelMap, new TravelMap({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_styleScopedClasses['snap-container'];
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