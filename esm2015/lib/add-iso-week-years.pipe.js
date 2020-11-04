import { NgModule, Pipe } from '@angular/core';
import addISOWeekYears from 'date-fns/addISOWeekYears';
export class AddISOWeekYearsPipe {
    transform(date, amount) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return addISOWeekYears(date, amount);
    }
}
AddISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddISOWeekYears' },] }
];
export class AddISOWeekYearsPipeModule {
}
AddISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddISOWeekYearsPipe],
                exports: [AddISOWeekYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWlzby13ZWVrLXllYXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9hZGQtaXNvLXdlZWsteWVhcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxlQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFHdkQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixTQUFTLENBQUMsSUFBc0IsRUFBRSxNQUFjO1FBQzlDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7O0FBY3JDLE1BQU0sT0FBTyx5QkFBeUI7OztZQUpyQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBhZGRJU09XZWVrWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkSVNPV2Vla1llYXJzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0FkZElTT1dlZWtZZWFycycgfSlcbmV4cG9ydCBjbGFzcyBBZGRJU09XZWVrWWVhcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZElTT1dlZWtZZWFycyhkYXRlLCBhbW91bnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FkZElTT1dlZWtZZWFyc1BpcGVdLFxuICBleHBvcnRzOiBbQWRkSVNPV2Vla1llYXJzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgQWRkSVNPV2Vla1llYXJzUGlwZU1vZHVsZSB7fVxuIl19