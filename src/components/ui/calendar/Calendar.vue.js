import { cn } from '@/lib/utils';
import { CalendarRoot, useForwardPropsEmits } from 'radix-vue';
import { computed } from 'vue';
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNextButton, CalendarPrevButton } from '.';
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CalendarRoot;
    /** @type { [typeof __VLS_components.CalendarRoot, typeof __VLS_components.CalendarRoot, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ((__VLS_ctx.cn('p-3', props.class))) }, ...(__VLS_ctx.forwarded), }));
    const __VLS_2 = __VLS_1({ ...{ class: ((__VLS_ctx.cn('p-3', props.class))) }, ...(__VLS_ctx.forwarded), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const [{ grid, weekDays }] = __VLS_getSlotParams(__VLS_thisSlot);
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.CalendarHeader;
        /** @type { [typeof __VLS_components.CalendarHeader, typeof __VLS_components.CalendarHeader, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
        const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.CalendarPrevButton;
        /** @type { [typeof __VLS_components.CalendarPrevButton, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
        const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.CalendarHeading;
        /** @type { [typeof __VLS_components.CalendarHeading, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
        const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.CalendarNextButton;
        /** @type { [typeof __VLS_components.CalendarNextButton, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
        const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
        __VLS_nonNullable(__VLS_12.slots).default;
        var __VLS_12;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0") }, });
        for (const [month] of __VLS_getVForSourceType((grid))) {
            const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.CalendarGrid;
            /** @type { [typeof __VLS_components.CalendarGrid, typeof __VLS_components.CalendarGrid, ] } */
            // @ts-ignore
            const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ key: ((month.value.toString())), }));
            const __VLS_33 = __VLS_32({ key: ((month.value.toString())), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
            const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.CalendarGridHead;
            /** @type { [typeof __VLS_components.CalendarGridHead, typeof __VLS_components.CalendarGridHead, ] } */
            // @ts-ignore
            const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
            const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
            const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.CalendarGridRow;
            /** @type { [typeof __VLS_components.CalendarGridRow, typeof __VLS_components.CalendarGridRow, ] } */
            // @ts-ignore
            const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
            const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
            for (const [day] of __VLS_getVForSourceType((weekDays))) {
                const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.CalendarHeadCell;
                /** @type { [typeof __VLS_components.CalendarHeadCell, typeof __VLS_components.CalendarHeadCell, ] } */
                // @ts-ignore
                const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ key: ((day)), }));
                const __VLS_51 = __VLS_50({ key: ((day)), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
                (day);
                __VLS_nonNullable(__VLS_54.slots).default;
                var __VLS_54;
            }
            __VLS_nonNullable(__VLS_48.slots).default;
            var __VLS_48;
            __VLS_nonNullable(__VLS_42.slots).default;
            var __VLS_42;
            const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.CalendarGridBody;
            /** @type { [typeof __VLS_components.CalendarGridBody, typeof __VLS_components.CalendarGridBody, ] } */
            // @ts-ignore
            const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({}));
            const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
            for (const [weekDates, index] of __VLS_getVForSourceType((month.rows))) {
                const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.CalendarGridRow;
                /** @type { [typeof __VLS_components.CalendarGridRow, typeof __VLS_components.CalendarGridRow, ] } */
                // @ts-ignore
                const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ key: ((`weekDate-${index}`)), ...{ class: ("mt-2 w-full") }, }));
                const __VLS_63 = __VLS_62({ key: ((`weekDate-${index}`)), ...{ class: ("mt-2 w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                for (const [weekDate] of __VLS_getVForSourceType((weekDates))) {
                    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.CalendarCell;
                    /** @type { [typeof __VLS_components.CalendarCell, typeof __VLS_components.CalendarCell, ] } */
                    // @ts-ignore
                    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ key: ((weekDate.toString())), date: ((weekDate)), }));
                    const __VLS_69 = __VLS_68({ key: ((weekDate.toString())), date: ((weekDate)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.CalendarCellTrigger;
                    /** @type { [typeof __VLS_components.CalendarCellTrigger, ] } */
                    // @ts-ignore
                    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ day: ((weekDate)), month: ((month.value)), }));
                    const __VLS_75 = __VLS_74({ day: ((weekDate)), month: ((month.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
                    __VLS_nonNullable(__VLS_72.slots).default;
                    var __VLS_72;
                }
                __VLS_nonNullable(__VLS_66.slots).default;
                var __VLS_66;
            }
            __VLS_nonNullable(__VLS_60.slots).default;
            var __VLS_60;
            __VLS_nonNullable(__VLS_36.slots).default;
            var __VLS_36;
        }
        __VLS_nonNullable(__VLS_5.slots)['' /* empty slot name completion */];
    }
    var __VLS_5;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-y-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['sm:flex-row'];
    __VLS_styleScopedClasses['sm:gap-x-4'];
    __VLS_styleScopedClasses['sm:gap-y-0'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['w-full'];
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
            CalendarRoot: CalendarRoot,
            CalendarCell: CalendarCell,
            CalendarCellTrigger: CalendarCellTrigger,
            CalendarGrid: CalendarGrid,
            CalendarGridBody: CalendarGridBody,
            CalendarGridHead: CalendarGridHead,
            CalendarGridRow: CalendarGridRow,
            CalendarHeadCell: CalendarHeadCell,
            CalendarHeader: CalendarHeader,
            CalendarHeading: CalendarHeading,
            CalendarNextButton: CalendarNextButton,
            CalendarPrevButton: CalendarPrevButton,
            forwarded: forwarded,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Calendar.vue.js.map