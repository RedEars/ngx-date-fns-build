import { NgModule, Pipe } from '@angular/core';
import getWeek from 'date-fns/getWeek';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class GetWeekPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getWeek(date, calculateLocale(options, this.config));
    }
}
GetWeekPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekPure' },] }
];
GetWeekPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class GetWeekPurePipeModule {
}
GetWeekPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekPurePipe],
                exports: [GetWeekPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdlZWsucHVyZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LXdlZWsucHVyZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLE9BQU8sTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLDJCQUEyQixFQUM1QixNQUFNLGtDQUFrQyxDQUFDO0FBUTFDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQW1CLE1BQW1DO1FBQW5DLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBQUcsQ0FBQztJQUUxRCxTQUFTLENBQ1AsSUFBc0IsRUFDdEIsT0FJQztRQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7OztZQWhCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7OztZQVIvQiwyQkFBMkI7O0FBK0I3QixNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBnZXRXZWVrIGZyb20gJ2RhdGUtZm5zL2dldFdlZWsnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlTG9jYWxlLFxuICBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2Vcbn0gZnJvbSAnLi9kYXRlLWZucy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgRGF0ZUZuc0ZpcnN0V2Vla0RheXMsXG4gIERhdGVGbnNJbnB1dERhdGUsXG4gIERhdGVGbnNXZWVrSW5kZXhcbn0gZnJvbSAnLi90eXBlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXRXZWVrUHVyZScgfSlcbmV4cG9ydCBjbGFzcyBHZXRXZWVrUHVyZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBkYXRlOiBEYXRlRm5zSW5wdXREYXRlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgICB3ZWVrU3RhcnRzT24/OiBEYXRlRm5zV2Vla0luZGV4O1xuICAgICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlPzogRGF0ZUZuc0ZpcnN0V2Vla0RheXM7XG4gICAgfVxuICApOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFdlZWsoZGF0ZSwgY2FsY3VsYXRlTG9jYWxlKG9wdGlvbnMsIHRoaXMuY29uZmlnKSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0V2Vla1B1cmVQaXBlXSxcbiAgZXhwb3J0czogW0dldFdlZWtQdXJlUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0V2Vla1B1cmVQaXBlTW9kdWxlIHt9XG4iXX0=