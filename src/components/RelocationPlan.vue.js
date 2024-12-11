import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const planItems = [
    {
        title: "Relocation Timeline",
        content: "I have no current commitments and can relocate to Woodstock immediately based on the start date. If the position begins on January 1st, I am prepared to move at least one week in advance to ensure I'm settled and ready to begin.",
        size: "large",
        icon: "⏰"
    },
    {
        title: "Housing Arrangements",
        content: "I've researched housing options in Woodstock and have shortlisted several apartments close to the office. I'm ready to secure accommodation immediately upon offer acceptance.",
        size: "medium",
        icon: "🏠"
    },
    {
        title: "Anticipated Challenges",
        content: "I do not foresee any significant challenges with the relocation. My previous experience moving cities has equipped me to handle logistics efficiently.",
        size: "small",
        icon: "✅"
    },
    {
        title: "Flexibility and Commitment",
        content: "My schedule is fully flexible, and I'm committed to making this transition as seamless as possible. I'm eager to join the team and contribute from day one.",
        size: "small",
        icon: "💪"
    },
    {
        title: "Motivation for Moving to Woodstock",
        content: "I'm attracted to Woodstock's vibrant community and its balance of small-town charm with professional growth opportunities. I'm excited to contribute to and become part of the local community.",
        size: "medium",
        icon: "🌇"
    },
    {
        title: "Additional Information",
        content: "If there are any other details you'd like to know or if I can assist in any way during your decision-making process, please let me know.",
        size: "small",
        icon: "ℹ️"
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center min-h-screen px-4 py-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center w-full gap-8 max-w-7xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-3xl font-bold sm:text-4xl text-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2 text-muted-foreground") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-grow w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(150px,auto)]") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.planItems))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Card;
        /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: (([
                    'transition-all duration-300 hover:-translate-y-1 h-full',
                    {
                        'sm:row-span-2': item.size === 'large',
                        'sm:col-span-2 lg:col-span-2': item.size === 'medium',
                        'flex flex-col': true
                    }
                ])) }, }));
        const __VLS_2 = __VLS_1({ ...{ class: (([
                    'transition-all duration-300 hover:-translate-y-1 h-full',
                    {
                        'sm:row-span-2': item.size === 'large',
                        'sm:col-span-2 lg:col-span-2': item.size === 'medium',
                        'flex flex-col': true
                    }
                ])) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CardHeader;
        /** @type { [typeof __VLS_components.CardHeader, typeof __VLS_components.CardHeader, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("pb-3") }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ("pb-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.CardTitle;
        /** @type { [typeof __VLS_components.CardTitle, typeof __VLS_components.CardTitle, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("flex items-center gap-2 text-lg") }, }));
        const __VLS_14 = __VLS_13({ ...{ class: ("flex items-center gap-2 text-lg") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-2xl") }, });
        (item.icon);
        (item.title);
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.CardContent;
        /** @type { [typeof __VLS_components.CardContent, typeof __VLS_components.CardContent, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("flex-grow") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("flex-grow") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-muted-foreground") }, });
        (item.content);
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['sm:text-4xl'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-muted-foreground'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['sm:grid-cols-2'];
    __VLS_styleScopedClasses['lg:grid-cols-3'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['auto-rows-[minmax(150px,auto)]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:-translate-y-1'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['sm:row-span-2'];
    __VLS_styleScopedClasses['sm:col-span-2'];
    __VLS_styleScopedClasses['lg:col-span-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['pb-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['text-muted-foreground'];
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
            Card: Card,
            CardContent: CardContent,
            CardHeader: CardHeader,
            CardTitle: CardTitle,
            planItems: planItems,
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
//# sourceMappingURL=RelocationPlan.vue.js.map