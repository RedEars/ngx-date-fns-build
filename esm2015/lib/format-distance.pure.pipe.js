import { NgModule, Pipe } from '@angular/core';
import formatDistance from 'date-fns/formatDistance';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class FormatDistancePurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, dateToCompare, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        if (typeof dateToCompare === 'string') {
            dateToCompare = new Date(dateToCompare);
        }
        return formatDistance(date, dateToCompare, calculateLocale(options, this.config));
    }
}
FormatDistancePurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistancePure' },] }
];
FormatDistancePurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class FormatDistancePurePipeModule {
}
FormatDistancePurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistancePurePipe],
                exports: [FormatDistancePurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRpc3RhbmNlLnB1cmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2Zvcm1hdC1kaXN0YW5jZS5wdXJlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sY0FBYyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxlQUFlLEVBQ2YsMkJBQTJCLEVBQzVCLE1BQU0sa0NBQWtDLENBQUM7QUFJMUMsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUFtQixNQUFtQztRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUE2QjtJQUFHLENBQUM7SUFFMUQsU0FBUyxDQUNQLElBQXNCLEVBQ3RCLGFBQStCLEVBQy9CLE9BSUM7UUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUNyQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLGNBQWMsQ0FDbkIsSUFBSSxFQUNKLGFBQWEsRUFDYixlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdEMsQ0FBQztJQUNKLENBQUM7OztZQXhCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7OztZQUp0QywyQkFBMkI7O0FBbUM3QixNQUFNLE9BQU8sNEJBQTRCOzs7WUFKeEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlTG9jYWxlLFxuICBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2Vcbn0gZnJvbSAnLi9kYXRlLWZucy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRm9ybWF0RGlzdGFuY2VQdXJlJyB9KVxuZXhwb3J0IGNsYXNzIEZvcm1hdERpc3RhbmNlUHVyZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBkYXRlOiBEYXRlRm5zSW5wdXREYXRlLFxuICAgIGRhdGVUb0NvbXBhcmU6IERhdGVGbnNJbnB1dERhdGUsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGluY2x1ZGVTZWNvbmRzPzogYm9vbGVhbjtcbiAgICAgIGFkZFN1ZmZpeD86IGJvb2xlYW47XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgfVxuICApOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRlVG9Db21wYXJlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZVRvQ29tcGFyZSA9IG5ldyBEYXRlKGRhdGVUb0NvbXBhcmUpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0RGlzdGFuY2UoXG4gICAgICBkYXRlLFxuICAgICAgZGF0ZVRvQ29tcGFyZSxcbiAgICAgIGNhbGN1bGF0ZUxvY2FsZShvcHRpb25zLCB0aGlzLmNvbmZpZylcbiAgICApO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1hdERpc3RhbmNlUHVyZVBpcGVdLFxuICBleHBvcnRzOiBbRm9ybWF0RGlzdGFuY2VQdXJlUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0RGlzdGFuY2VQdXJlUGlwZU1vZHVsZSB7fVxuIl19