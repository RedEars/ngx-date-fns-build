import { NgModule, Pipe } from '@angular/core';
import differenceInISOWeekYears from 'date-fns/differenceInISOWeekYears';
export class DifferenceInISOWeekYearsPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInISOWeekYears(dateLeft, dateRight);
    }
}
DifferenceInISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInISOWeekYears' },] }
];
export class DifferenceInISOWeekYearsPipeModule {
}
DifferenceInISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInISOWeekYearsPipe],
                exports: [DifferenceInISOWeekYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1pc28td2Vlay15ZWFycy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZGlmZmVyZW5jZS1pbi1pc28td2Vlay15ZWFycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLHdCQUF3QixNQUFNLG1DQUFtQyxDQUFDO0FBR3pFLE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMsU0FBUyxDQUFDLFFBQTBCLEVBQUUsU0FBMkI7UUFDL0QsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDakMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLDhCQUE4QixFQUFFOztBQWlCOUMsTUFBTSxPQUFPLGtDQUFrQzs7O1lBSjlDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbklTT1dlZWtZZWFycyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlSW5JU09XZWVrWWVhcnMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRGlmZmVyZW5jZUluSVNPV2Vla1llYXJzJyB9KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbklTT1dlZWtZZWFyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGVMZWZ0OiBEYXRlRm5zSW5wdXREYXRlLCBkYXRlUmlnaHQ6IERhdGVGbnNJbnB1dERhdGUpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgZGF0ZUxlZnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlTGVmdCA9IG5ldyBEYXRlKGRhdGVMZWZ0KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRlUmlnaHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlUmlnaHQgPSBuZXcgRGF0ZShkYXRlUmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gZGlmZmVyZW5jZUluSVNPV2Vla1llYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RpZmZlcmVuY2VJbklTT1dlZWtZZWFyc1BpcGVdLFxuICBleHBvcnRzOiBbRGlmZmVyZW5jZUluSVNPV2Vla1llYXJzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluSVNPV2Vla1llYXJzUGlwZU1vZHVsZSB7fVxuIl19