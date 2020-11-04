import { NgModule, Pipe } from '@angular/core';
import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import { DateFnsConfigurationService, calculateLocale } from './date-fns-configuration.service';
export class FormatPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, dateFormat, options) {
        if (typeof date === 'string') {
            date = parseISO(date);
        }
        return format(date, dateFormat, calculateLocale(options, this.config));
    }
}
FormatPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatPure' },] }
];
FormatPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class FormatPurePipeModule {
}
FormatPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatPurePipe],
                exports: [FormatPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LnB1cmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2Zvcm1hdC5wdXJlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBVSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUNMLDJCQUEyQixFQUMzQixlQUFlLEVBQ2hCLE1BQU0sa0NBQWtDLENBQUM7QUFHMUMsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBbUIsTUFBbUM7UUFBbkMsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7SUFBRyxDQUFDO0lBRTFELFNBQVMsQ0FDUCxJQUFTLEVBQ1QsVUFBa0IsRUFDbEIsT0FNQztRQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBbkJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7O1lBSjlCLDJCQUEyQjs7QUE4QjdCLE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgY2FsY3VsYXRlTG9jYWxlXG59IGZyb20gJy4vZGF0ZS1mbnMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0Zvcm1hdFB1cmUnIH0pXG5leHBvcnQgY2xhc3MgRm9ybWF0UHVyZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBkYXRlOiBhbnksXG4gICAgZGF0ZUZvcm1hdDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgICB3ZWVrU3RhcnRzT24/OiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuICAgICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlPzogbnVtYmVyO1xuICAgICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPzogYm9vbGVhbjtcbiAgICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM/OiBib29sZWFuO1xuICAgIH1cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRlID0gcGFyc2VJU08oZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgZGF0ZUZvcm1hdCwgY2FsY3VsYXRlTG9jYWxlKG9wdGlvbnMsIHRoaXMuY29uZmlnKSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWF0UHVyZVBpcGVdLFxuICBleHBvcnRzOiBbRm9ybWF0UHVyZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdFB1cmVQaXBlTW9kdWxlIHt9XG4iXX0=