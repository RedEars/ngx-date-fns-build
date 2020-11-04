import { NgModule, Pipe } from '@angular/core';
import isBefore from 'date-fns/isBefore';
export class IsBeforePipe {
    transform(date, dateToCompare) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        if (typeof dateToCompare === 'string') {
            dateToCompare = new Date(dateToCompare);
        }
        return isBefore(date, dateToCompare);
    }
}
IsBeforePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsBefore' },] }
];
export class IsBeforePipeModule {
}
IsBeforePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsBeforePipe],
                exports: [IsBeforePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYmVmb3JlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9pcy1iZWZvcmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLElBQXNCLEVBQUUsYUFBK0I7UUFDL0QsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFDckMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0FBaUI5QixNQUFNLE9BQU8sa0JBQWtCOzs7WUFKOUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc0JlZm9yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNJc0JlZm9yZScgfSlcbmV4cG9ydCBjbGFzcyBJc0JlZm9yZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVUb0NvbXBhcmU6IERhdGVGbnNJbnB1dERhdGUpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0ZVRvQ29tcGFyZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVUb0NvbXBhcmUgPSBuZXcgRGF0ZShkYXRlVG9Db21wYXJlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQmVmb3JlKGRhdGUsIGRhdGVUb0NvbXBhcmUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0lzQmVmb3JlUGlwZV0sXG4gIGV4cG9ydHM6IFtJc0JlZm9yZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIElzQmVmb3JlUGlwZU1vZHVsZSB7fVxuIl19