import { NgModule, Pipe } from '@angular/core';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
export class DifferenceInMillisecondsPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInMilliseconds(dateLeft, dateRight);
    }
}
DifferenceInMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMilliseconds' },] }
];
export class DifferenceInMillisecondsPipeModule {
}
DifferenceInMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMillisecondsPipe],
                exports: [DifferenceInMillisecondsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1taWxsaXNlY29uZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2RpZmZlcmVuY2UtaW4tbWlsbGlzZWNvbmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sd0JBQXdCLE1BQU0sbUNBQW1DLENBQUM7QUFHekUsTUFBTSxPQUFPLDRCQUE0QjtJQUN2QyxTQUFTLENBQUMsUUFBMEIsRUFBRSxTQUEyQjtRQUMvRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUU7O0FBaUI5QyxNQUFNLE9BQU8sa0NBQWtDOzs7WUFKOUMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNEaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMnIH0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZUxlZnQ6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVSaWdodDogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlTGVmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVMZWZ0ID0gbmV3IERhdGUoZGF0ZUxlZnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGVSaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVSaWdodCA9IG5ldyBEYXRlKGRhdGVSaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzUGlwZV0sXG4gIGV4cG9ydHM6IFtEaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNQaXBlTW9kdWxlIHt9XG4iXX0=