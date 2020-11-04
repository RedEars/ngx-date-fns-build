import { NgModule, Pipe } from '@angular/core';
import subISOWeekYears from 'date-fns/subISOWeekYears';
export class SubISOWeekYearsPipe {
    transform(date, amount) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return subISOWeekYears(date, amount);
    }
}
SubISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubISOWeekYears' },] }
];
export class SubISOWeekYearsPipeModule {
}
SubISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubISOWeekYearsPipe],
                exports: [SubISOWeekYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWlzby13ZWVrLXllYXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdWItaXNvLXdlZWsteWVhcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxlQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFHdkQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixTQUFTLENBQUMsSUFBc0IsRUFBRSxNQUFjO1FBQzlDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7O0FBY3JDLE1BQU0sT0FBTyx5QkFBeUI7OztZQUpyQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdWJJU09XZWVrWWVhcnMgZnJvbSAnZGF0ZS1mbnMvc3ViSVNPV2Vla1llYXJzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N1YklTT1dlZWtZZWFycycgfSlcbmV4cG9ydCBjbGFzcyBTdWJJU09XZWVrWWVhcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YklTT1dlZWtZZWFycyhkYXRlLCBhbW91bnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N1YklTT1dlZWtZZWFyc1BpcGVdLFxuICBleHBvcnRzOiBbU3ViSVNPV2Vla1llYXJzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3ViSVNPV2Vla1llYXJzUGlwZU1vZHVsZSB7fVxuIl19