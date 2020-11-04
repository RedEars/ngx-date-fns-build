import { NgModule, Pipe } from '@angular/core';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';
export class DifferenceInCalendarYearsPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInCalendarYears(dateLeft, dateRight);
    }
}
DifferenceInCalendarYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarYears' },] }
];
export class DifferenceInCalendarYearsPipeModule {
}
DifferenceInCalendarYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarYearsPipe],
                exports: [DifferenceInCalendarYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1jYWxlbmRhci15ZWFycy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZGlmZmVyZW5jZS1pbi1jYWxlbmRhci15ZWFycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLHlCQUF5QixNQUFNLG9DQUFvQyxDQUFDO0FBRzNFLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsU0FBUyxDQUFDLFFBQTBCLEVBQUUsU0FBMkI7UUFDL0QsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDakMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFOztBQWlCL0MsTUFBTSxPQUFPLG1DQUFtQzs7O1lBSi9DLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDN0MsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNEaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzJyB9KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIGRhdGVMZWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZUxlZnQgPSBuZXcgRGF0ZShkYXRlTGVmdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0ZVJpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZVJpZ2h0ID0gbmV3IERhdGUoZGF0ZVJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFyc1BpcGVdLFxuICBleHBvcnRzOiBbRGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFyc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNQaXBlTW9kdWxlIHt9XG4iXX0=