import { NgModule, Pipe } from '@angular/core';
import getDayOfYear from 'date-fns/getDayOfYear';
export class GetDayOfYearPipe {
    transform(date) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getDayOfYear(date);
    }
}
GetDayOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDayOfYear' },] }
];
export class GetDayOfYearPipeModule {
}
GetDayOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDayOfYearPipe],
                exports: [GetDayOfYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheS1vZi15ZWFyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9nZXQtZGF5LW9mLXllYXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFHakQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixTQUFTLENBQUMsSUFBUztRQUNqQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7O0FBY2xDLE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXREYXlPZlllYXIgZnJvbSAnZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldERheU9mWWVhcicgfSlcbmV4cG9ydCBjbGFzcyBHZXREYXlPZlllYXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBhbnkpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXREYXlPZlllYXJQaXBlXSxcbiAgZXhwb3J0czogW0dldERheU9mWWVhclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERheU9mWWVhclBpcGVNb2R1bGUge31cbiJdfQ==