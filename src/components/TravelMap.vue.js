import { Card, CardContent } from '@/components/ui/card';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const stops = [
    {
        name: 'Montreal',
        emoji: '👋',
        comment: 'Au revoir, poutine!',
        position: { x: 15, y: 30 }
    },
    {
        name: 'Toronto',
        emoji: '🌆',
        comment: 'The legendary parking lot begins! 🚗💤',
        position: { x: 50, y: 45 }
    },
    {
        name: 'Woodstock',
        emoji: '🎯',
        comment: 'Ready to innovate with IPAC! 🚀💡',
        position: { x: 85, y: 60 }
    }
];
const roadNotes = [
    { text: '⚠️ 401 Traffic Zone', position: { x: 35, y: 30 } },
    { text: '⏰ +2hrs (Traffic)', position: { x: 70, y: 45 } },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-screen flex flex-col max-w-4xl mx-auto px-4 py-4 overflow-y-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-3xl sm:text-4xl font-bold text-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-muted-foreground mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-grow overflow-y-auto pb-4") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Card;
    /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CardContent;
    /** @type { [typeof __VLS_components.CardContent, typeof __VLS_components.CardContent, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("pt-4") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("pt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative h-[calc(100vh-12rem)] bg-muted/30 rounded-lg p-4 overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("absolute inset-0 w-full h-full") }, viewBox: ("0 0 100 100"), preserveAspectRatio: ("none"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M 15,30 C 25,35 35,40 50,45 S 70,50 85,60"), ...{ class: ("road-path stroke-primary stroke-2 fill-none") }, "stroke-dasharray": ("4 2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute text-2xl z-10") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0") }, });
    for (const [stop] of __VLS_getVForSourceType((__VLS_ctx.stops))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((stop.name)), ...{ class: ("absolute transform -translate-x-1/2 -translate-y-1/2 z-20") }, ...{ style: (({ left: `${stop.position.x}%`, top: `${stop.position.y}%` })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative group cursor-pointer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-background/95 rounded-lg p-2 shadow-sm hover:shadow-md transition-all") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-lg") }, });
        (stop.emoji);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold") }, });
        (stop.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary/10 rounded-lg p-1.5 text-xs text-center whitespace-nowrap z-30") }, });
        (stop.comment);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0") }, });
    for (const [note, index] of __VLS_getVForSourceType((__VLS_ctx.roadNotes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("absolute text-xs bg-background/90 rounded px-2 py-1 transform -translate-x-1/2 -translate-y-1/2 hover:bg-background transition-colors") }, ...{ style: (({ left: `${note.position.x}%`, top: `${note.position.y}%` })) }, });
        (note.text);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-2 right-2 text-xs space-y-1 bg-background/90 p-2 rounded-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['sm:text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-muted-foreground'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['pb-4'];
    __VLS_styleScopedClasses['pt-4'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['h-[calc(100vh-12rem)]'];
    __VLS_styleScopedClasses['bg-muted/30'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['road-path'];
    __VLS_styleScopedClasses['stroke-primary'];
    __VLS_styleScopedClasses['stroke-2'];
    __VLS_styleScopedClasses['fill-none'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['bg-background/95'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-bottom-8'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['bg-primary/10'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-1.5'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['z-30'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['bg-background/90'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['hover:bg-background'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-2'];
    __VLS_styleScopedClasses['right-2'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['bg-background/90'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['rounded-lg'];
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
            stops: stops,
            roadNotes: roadNotes,
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
//# sourceMappingURL=TravelMap.vue.js.map