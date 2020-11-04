import { NgModule, Pipe } from '@angular/core';
import differenceInMonths from 'date-fns/differenceInMonths';
export class DifferenceInMonthsPipe {
    transform(dateLeft, dateRight) {
        if (typeof dateLeft === 'string') {
            dateLeft = new Date(dateLeft);
        }
        if (typeof dateRight === 'string') {
            dateRight = new Date(dateRight);
        }
        return differenceInMonths(dateLeft, dateRight);
    }
}
DifferenceInMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMonths' },] }
];
export class DifferenceInMonthsPipeModule {
}
DifferenceInMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMonthsPipe],
                exports: [DifferenceInMonthsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1tb250aHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2RpZmZlcmVuY2UtaW4tbW9udGhzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sa0JBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFHN0QsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxTQUFTLENBQUMsUUFBMEIsRUFBRSxTQUEyQjtRQUMvRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7O0FBaUJ4QyxNQUFNLE9BQU8sNEJBQTRCOzs7WUFKeEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1vbnRocyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNEaWZmZXJlbmNlSW5Nb250aHMnIH0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluTW9udGhzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZUxlZnQ6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVSaWdodDogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlTGVmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVMZWZ0ID0gbmV3IERhdGUoZGF0ZUxlZnQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGVSaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGVSaWdodCA9IG5ldyBEYXRlKGRhdGVSaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGlmZmVyZW5jZUluTW9udGhzUGlwZV0sXG4gIGV4cG9ydHM6IFtEaWZmZXJlbmNlSW5Nb250aHNQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5Nb250aHNQaXBlTW9kdWxlIHt9XG4iXX0=