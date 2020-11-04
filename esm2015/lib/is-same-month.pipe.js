import { NgModule, Pipe } from '@angular/core';
import isSameMonth from 'date-fns/isSameMonth';
export class IsSameMonthPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return isSameMonth(dateLeft, dateRight);
    }
}
IsSameMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsSameMonth' },] }
];
export class IsSameMonthPipeModule {
}
IsSameMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsSameMonthPipe],
                exports: [IsSameMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtc2FtZS1tb250aC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvaXMtc2FtZS1tb250aC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsUUFBMEIsRUFBRSxTQUEyQjtRQUMvRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQWlCakMsTUFBTSxPQUFPLHFCQUFxQjs7O1lBSmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNTYW1lTW9udGgnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zSXNTYW1lTW9udGgnIH0pXG5leHBvcnQgY2xhc3MgSXNTYW1lTW9udGhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiBkYXRlTGVmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVMZWZ0ID0gbmV3IERhdGUoZGF0ZUxlZnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGVSaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVSaWdodCA9IG5ldyBEYXRlKGRhdGVSaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBpc1NhbWVNb250aChkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJc1NhbWVNb250aFBpcGVdLFxuICBleHBvcnRzOiBbSXNTYW1lTW9udGhQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc1NhbWVNb250aFBpcGVNb2R1bGUge31cbiJdfQ==