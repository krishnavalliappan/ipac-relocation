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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center min-h-screen px-4 py-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center w-full max-w-4xl mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-3xl font-bold sm:text-4xl text-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2 text-sm sm:text-base text-muted-foreground") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Card;
    /** @type { [typeof __VLS_components.Card, typeof __VLS_components.Card, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-full") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CardContent;
    /** @type { [typeof __VLS_components.CardContent, typeof __VLS_components.CardContent, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("p-4") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("p-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative aspect-[4/3] sm:aspect-[16/9] bg-muted/30 rounded-lg overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("absolute inset-0 w-full h-full") }, viewBox: ("0 0 100 100"), preserveAspectRatio: ("none"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M 15,30 C 25,35 35,40 50,45 S 70,50 85,60"), ...{ class: ("stroke-2 road-path stroke-primary fill-none") }, "stroke-dasharray": ("4 2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute z-10 text-base sm:text-2xl") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0") }, });
    for (const [stop] of __VLS_getVForSourceType((__VLS_ctx.stops))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((stop.name)), ...{ class: ("absolute z-20 transform -translate-x-1/2 -translate-y-1/2") }, ...{ style: (({ left: `${stop.position.x}%`, top: `${stop.position.y}%` })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative cursor-pointer group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-background/95 rounded-lg p-1.5 sm:p-2 shadow-sm hover:shadow-md transition-all") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-1 sm:gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm sm:text-lg") }, });
        (stop.emoji);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs font-bold sm:text-base") }, });
        (stop.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u006c\u0065\u0066\u0074\u002d\u0031\u002f\u0032\u0020\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0031\u002f\u0032\u0020\u002d\u0062\u006f\u0074\u0074\u006f\u006d\u002d\u0036\u0020\u0073\u006d\u003a\u002d\u0062\u006f\u0074\u0074\u006f\u006d\u002d\u0038\u0020\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u002d\u0030\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0067\u0072\u006f\u0075\u0070\u002d\u0068\u006f\u0076\u0065\u0072\u003a\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u002d\u0031\u0030\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0032\u0030\u0030\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0070\u0072\u0069\u006d\u0061\u0072\u0079\u002f\u0031\u0030\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u006c\u0067\u0020\u0070\u002d\u0031\u0020\u0073\u006d\u003a\u0070\u002d\u0031\u002e\u0035\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0065\u0078\u0074\u002d\u005b\u0031\u0030\u0070\u0078\u005d\u0020\u0073\u006d\u003a\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0074\u0065\u0078\u0074\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0077\u0068\u0069\u0074\u0065\u0073\u0070\u0061\u0063\u0065\u002d\u006e\u006f\u0077\u0072\u0061\u0070\u0020\u007a\u002d\u0033\u0030") }, });
        (stop.comment);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0") }, });
    for (const [note, index] of __VLS_getVForSourceType((__VLS_ctx.roadNotes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u0074\u0065\u0078\u0074\u002d\u005b\u0038\u0070\u0078\u005d\u0020\u0073\u006d\u003a\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002f\u0039\u0030\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u0020\u0070\u0078\u002d\u0031\u002e\u0035\u0020\u0073\u006d\u003a\u0070\u0078\u002d\u0032\u0020\u0070\u0079\u002d\u0030\u002e\u0035\u0020\u0073\u006d\u003a\u0070\u0079\u002d\u0031\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0020\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0031\u002f\u0032\u0020\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0079\u002d\u0031\u002f\u0032\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0063\u006f\u006c\u006f\u0072\u0073\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0073\u006d\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u006d\u0064") }, ...{ style: (({ left: `${note.position.x}%`, top: `${note.position.y}%` })) }, });
        (note.text);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u0062\u006f\u0074\u0074\u006f\u006d\u002d\u0032\u0020\u0072\u0069\u0067\u0068\u0074\u002d\u0032\u0020\u0074\u0065\u0078\u0074\u002d\u005b\u0031\u0030\u0070\u0078\u005d\u0020\u0073\u006d\u003a\u0074\u0065\u0078\u0074\u002d\u0078\u0073\u0020\u0073\u0070\u0061\u0063\u0065\u002d\u0079\u002d\u0031\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002f\u0039\u0030\u0020\u0070\u002d\u0031\u002e\u0035\u0020\u0073\u006d\u003a\u0070\u002d\u0032\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u006c\u0067") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
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
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['sm:text-4xl'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['sm:text-base'];
    __VLS_styleScopedClasses['text-muted-foreground'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['aspect-[4/3]'];
    __VLS_styleScopedClasses['sm:aspect-[16/9]'];
    __VLS_styleScopedClasses['bg-muted/30'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['stroke-2'];
    __VLS_styleScopedClasses['road-path'];
    __VLS_styleScopedClasses['stroke-primary'];
    __VLS_styleScopedClasses['fill-none'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['sm:text-2xl'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['bg-background/95'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-1.5'];
    __VLS_styleScopedClasses['sm:p-2'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['sm:gap-2'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['sm:text-lg'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['sm:text-base'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-bottom-6'];
    __VLS_styleScopedClasses['sm:-bottom-8'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['bg-primary/10'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['sm:p-1.5'];
    __VLS_styleScopedClasses['text-[10px]'];
    __VLS_styleScopedClasses['sm:text-xs'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['z-30'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['text-[8px]'];
    __VLS_styleScopedClasses['sm:text-xs'];
    __VLS_styleScopedClasses['bg-background/90'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-1.5'];
    __VLS_styleScopedClasses['sm:px-2'];
    __VLS_styleScopedClasses['py-0.5'];
    __VLS_styleScopedClasses['sm:py-1'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['hover:bg-background'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-2'];
    __VLS_styleScopedClasses['right-2'];
    __VLS_styleScopedClasses['text-[10px]'];
    __VLS_styleScopedClasses['sm:text-xs'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['bg-background/90'];
    __VLS_styleScopedClasses['p-1.5'];
    __VLS_styleScopedClasses['sm:p-2'];
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