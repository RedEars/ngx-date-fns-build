import { NgModule, Pipe } from '@angular/core';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class GetWeekOfMonthPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return getWeekOfMonth(date, calculateLocale(options, this.config));
    }
}
GetWeekOfMonthPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekOfMonthPure' },] }
];
GetWeekOfMonthPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
export class GetWeekOfMonthPurePipeModule {
}
GetWeekOfMonthPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekOfMonthPurePipe],
                exports: [GetWeekOfMonthPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdlZWstb2YtbW9udGgucHVyZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LXdlZWstb2YtbW9udGgucHVyZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGNBQWMsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLDJCQUEyQixFQUM1QixNQUFNLGtDQUFrQyxDQUFDO0FBSTFDLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBbUIsTUFBbUM7UUFBbkMsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7SUFBRyxDQUFDO0lBRTFELFNBQVMsQ0FDUCxJQUFzQixFQUN0QixPQUdDO1FBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFOzs7WUFKdEMsMkJBQTJCOztBQTBCN0IsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBSnhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGdldFdlZWtPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2dldFdlZWtPZk1vbnRoJztcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUxvY2FsZSxcbiAgRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJy4vZGF0ZS1mbnMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUsIERhdGVGbnNXZWVrSW5kZXggfSBmcm9tICcuL3R5cGVzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldFdlZWtPZk1vbnRoUHVyZScgfSlcbmV4cG9ydCBjbGFzcyBHZXRXZWVrT2ZNb250aFB1cmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbG9jYWxlPzogTG9jYWxlO1xuICAgICAgd2Vla1N0YXJ0c09uPzogRGF0ZUZuc1dlZWtJbmRleDtcbiAgICB9XG4gICk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0V2Vla09mTW9udGgoZGF0ZSwgY2FsY3VsYXRlTG9jYWxlKG9wdGlvbnMsIHRoaXMuY29uZmlnKSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0V2Vla09mTW9udGhQdXJlUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXRXZWVrT2ZNb250aFB1cmVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXRXZWVrT2ZNb250aFB1cmVQaXBlTW9kdWxlIHt9XG4iXX0=