import { ref, onMounted } from 'vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['navigate-to-map', 'navigate-to-relocation']);
const displayText = ref('');
const fullText = 'Hello IPAC Consulting! 👋🏻';
const currentIndex = ref(0);
const typeText = () => {
    if (currentIndex.value < fullText.length) {
        displayText.value += fullText[currentIndex.value];
        currentIndex.value++;
        setTimeout(typeText, 150);
    }
};
onMounted(() => {
    typeText();
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-8 space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl sm:text-5xl font-bold text-primary") }, });
    (__VLS_ctx.displayText);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("cursor") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-[minmax(150px,auto)]") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Card;
    /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("transition-all duration-300 hover:-translate-y-1 lg:col-span-2") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("transition-all duration-300 hover:-translate-y-1 lg:col-span-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CardHeader;
    /** @type { [typeof __VLS_components.CardHeader, typeof __VLS_components.CardHeader, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.CardTitle;
    /** @type { [typeof __VLS_components.CardTitle, typeof __VLS_components.CardTitle, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("text-xl") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.CardContent;
    /** @type { [typeof __VLS_components.CardContent, typeof __VLS_components.CardContent, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("italic") }, });
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.Card;
    /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("transition-all duration-300 hover:-translate-y-1") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("transition-all duration-300 hover:-translate-y-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.CardHeader;
    /** @type { [typeof __VLS_components.CardHeader, typeof __VLS_components.CardHeader, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.CardTitle;
    /** @type { [typeof __VLS_components.CardTitle, typeof __VLS_components.CardTitle, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("text-xl") }, }));
    const __VLS_38 = __VLS_37({ ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.CardContent;
    /** @type { [typeof __VLS_components.CardContent, typeof __VLS_components.CardContent, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("flex-grow") }, }));
    const __VLS_44 = __VLS_43({ ...{ class: ("flex-grow") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.Card;
    /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ class: ("transition-all duration-300 hover:-translate-y-1") }, }));
    const __VLS_50 = __VLS_49({ ...{ class: ("transition-all duration-300 hover:-translate-y-1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.CardHeader;
    /** @type { [typeof __VLS_components.CardHeader, typeof __VLS_components.CardHeader, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.CardTitle;
    /** @type { [typeof __VLS_components.CardTitle, typeof __VLS_components.CardTitle, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ class: ("text-xl") }, }));
    const __VLS_62 = __VLS_61({ ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65;
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.CardContent;
    /** @type { [typeof __VLS_components.CardContent, typeof __VLS_components.CardContent, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ class: ("flex-grow") }, }));
    const __VLS_68 = __VLS_67({ ...{ class: ("flex-grow") }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_nonNullable(__VLS_71.slots).default;
    var __VLS_71;
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex justify-center gap-4") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, variant: ("default"), }));
    const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, variant: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    let __VLS_78;
    const __VLS_79 = {
        onClick: (...[$event]) => {
            __VLS_ctx.emit('navigate-to-relocation');
        }
    };
    let __VLS_75;
    let __VLS_76;
    __VLS_nonNullable(__VLS_77.slots).default;
    var __VLS_77;
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.Button;
    /** @type { [typeof __VLS_components.Button, typeof __VLS_components.Button, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onClick': {} }, variant: ("secondary"), }));
    const __VLS_82 = __VLS_81({ ...{ 'onClick': {} }, variant: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    let __VLS_86;
    const __VLS_87 = {
        onClick: (...[$event]) => {
            __VLS_ctx.emit('navigate-to-map');
        }
    };
    let __VLS_83;
    let __VLS_84;
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['sm:text-5xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['cursor'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['lg:grid-cols-2'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['auto-rows-[minmax(150px,auto)]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:-translate-y-1'];
    __VLS_styleScopedClasses['lg:col-span-2'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['italic'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:-translate-y-1'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:-translate-y-1'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-4'];
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
            Button: Button,
            emit: emit,
            displayText: displayText,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Intro.vue.js.map